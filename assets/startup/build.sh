---
---
#!/bin/bash

echo 'Started script to generate PDFs'
echo 'Installing node dependencies'
npm i glob jsdom js-yaml p-all
if [ "{{ site.offline }}" == "true" ]; then
    node _site/assets/startup/prebuild-lunr-index.js
    echo 'Generating lunr index complete'
    npm i html-pdf
else
    echo 'Skipping lunr index'
fi
node _site/assets/startup/pdf-gen.js
echo 'End script'
