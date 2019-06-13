---
---
#!/bin/bash

echo 'Started script to generate PDFs'
echo 'Installing node dependencies'
npm i glob jsdom js-yaml p-all
if [[ (-z "${PDF_GEN_API_SERVER}") || (-z "${PDF_GEN_API_KEY}") ]]; then
  npm i html-pdf
fi
node _site/assets/startup/pdf-gen.js
if [ "{{ site.offline_search_only }}" == "true" ]; then
    node _site/assets/startup/prebuild-lunr-index.js
    echo 'Generating Lunr Index complete'
else
    echo 'Skipping Lunr Index'
fi
echo 'End script'
