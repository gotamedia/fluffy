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