---
---
(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        {% for site_page in site.html_pages %}
            {% unless site_page.exclude %}
            {% unless site_page.name == 'index.html' or site_page.name == 'index.md' %}
            {% capture name %}{{ site_page.name }}{% endcapture %}
            {% if site_page.title == null %}
            {% capture title %}{% assign words  = name | remove_first: '.md' | split: '-' %}{% for word in words %}{{ word | capitalize }} {% endfor %}{% endcapture %}
            {% else %}
            {% capture title %}{{ site_page.title }}{% endcapture %}
            {% endif %}
            {
                'name': {{name | jsonify}},
                'title': {{title | jsonify}},
                'url': {{ site_page.url | relative_url | jsonify }},
                'absolute_url': {{ site_page.url | jsonify}},
                'documentInfo': {% include document-title.txt dir=site_page.dir %}
            },
            {% endunless %}
            {% endunless %}
        {% endfor %}
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()