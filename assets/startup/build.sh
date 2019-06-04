---
---
#!/bin/bash
echo 'Generating PDFs'
echo 'Installing node dependencies'
npm i html-pdf glob jsdom js-yaml
node _site/assets/startup/pdf-gen.js
echo 'Generating PDFs Complete'
if [ "{{ site.offline_search_only }}" == "true" ]; then
    node _site/assets/startup/prebuild-lunr-index.js
    echo 'Generating Lunr Index complete'
else
    echo 'Skipping Lunr Index'
fi
