#!/bin/bash

dist_dir=dist
temp_dist_dir=temp_dist
temp_root_dir=temp_root

rm -rf $dist_dir
rm -rf $temp_dist_dir
rm -rf $temp_root_dir

mkdir $dist_dir
mkdir $temp_dist_dir
mkdir $temp_root_dir

cp -r ./src/* $temp_root_dir

node > ./$temp_root_dir/tsconfig.json <<EOF
    const tsConfig = require('./tsconfig.json')
    tsConfig.compilerOptions.baseUrl = './'
    tsConfig.exclude.push('**/**/*.cy.tsx')
    console.log(JSON.stringify(tsConfig, null, 4))
EOF

if [ $? != 0 ]
then
   exit 1
fi

find ./$temp_root_dir -name \*.stories.tsx -type f -delete
find ./$temp_root_dir -name \*.test.tsx -type f -delete

ignore_list=(
    "tests"
)

for pattern in components \
    contexts \
    hooks \
    utils
do
    echo ""
    echo "-----------------------------------"
    echo "Copying files from: $pattern"
    echo "-----------------------------------"
    echo ""

    for name in $temp_root_dir/$pattern/*/
    do
        sourcePath=${name%*/}
        sourceName=$(echo "${sourcePath##*/}")

        if [[ " ${ignore_list[*]} " =~ " ${sourceName} " ]]; then
            echo "   🚫   Ignore:     $pattern/$sourceName"
        else
            echo "   ✅   Copy:       $pattern/$sourceName"

            mkdir $temp_root_dir/$sourceName

            echo "export * from '../$pattern/$sourceName'" >> $temp_root_dir/$sourceName/index.ts

            if grep -q -E "export { default }|export default" "$sourcePath/index.ts"; then
                echo "export { default } from '../$pattern/$sourceName'" >> $temp_root_dir/$sourceName/index.ts
            fi
        fi
    done

    echo ""
done

npm run types

cp -r $temp_root_dir/dist/* $temp_dist_dir

rm -rf $temp_root_dir

npm run babel

rm -rf $temp_dist_dir