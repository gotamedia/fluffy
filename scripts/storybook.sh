#!/bin/bash

code="<Meta
    title={'CHANGELOG'}
    parameters={{
        options: {
            showToolbar: false
        }
    }}
/>
"

echo -e "$code\n$(cat ./CHANGELOG.md)" > .storybook/CHANGELOG.stories.mdx

build_fluffy_types_for_monaco () {
    dts-bundle --name @gotamedia/fluffy --main dist/index.d.ts
    cp dist/@gotamedia/fluffy.d.ts src/internal/components/ThemeGenerator/components/Editor/types/fluffy.d.ts.raw
    rm -rf dist/@gotamedia
}

if [ -f "dist/@gotamedia/fluffy.d.ts" ]; then
    build_fluffy_types_for_monaco
else
    npm run build
    build_fluffy_types_for_monaco
fi