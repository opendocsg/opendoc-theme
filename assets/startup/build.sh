---
---
#!/bin/bash

echo 'Started script to generate PDFs'
echo 'Installing node dependencies'
npm i glob jsdom js-yaml
node _site/assets/startup/pdf-gen.js
if [ "{{ site.offline_search_only }}" == "true" ]; then
    node _site/assets/startup/prebuild-lunr-index.js
    echo 'Generating Lunr Index complete'
else
    echo 'Skipping Lunr Index'
fi
echo 'End script'
