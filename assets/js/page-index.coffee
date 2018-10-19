---
---
# Data Blob
# =============================================================================
# The main "blob" of site data constructed by liquid
# We cherry pick to minimize size
# Also because jsonify doesn't work quite right and collapses the page objects
# into just strings when we jsonify the whole site
pages = [
  {% for site_page in site.html_pages %}
    {% unless site_page.exclude %}

      {% capture name %}{{ site_page.name }}{% endcapture %}
      {% if site_page.title == null %}
      {% capture title %}{% assign words  = name | remove_first: '.md' | split: '-' %}{% for word in words %}{{ word | capitalize }} {% endfor %}{% endcapture %}
      {% else %}
      {% capture title %}{{ site_page.title }}{% endcapture %}
      {% endif %}
      {
        'name': {{name | jsonify}},
        'title': {{title | jsonify}},
        # For consistency all page markdown is converted to HTML
        {% if site_page.url == page.url %}
        'content': {{ site_page.content | jsonify }},
        {% else %}
        'content': {{ site_page.content | markdownify | jsonify }},
        {% endif %}
        'url': {{ site_page.url | relative_url | jsonify }}
      }
    {% endunless %}
  {% endfor %}
]

pageIndex = {}
pageOrder = [
  {% for section_title in site.section_order %}
    {{ section_title | jsonify }}
  {% endfor %}
]
if pageOrder.length > 0
  pages.sort (a, b) -> return if pageOrder.indexOf(a.title) < pageOrder.indexOf(b.title) then -1 else 1
else
  pageOrder = [
    {% for site_page in site.html_pages %}
      {{ site_page.name | jsonify }}
    {% endfor %}
  ]
  pages.sort (a, b) -> return if pageOrder.indexOf(a.name) < pageOrder.indexOf(b.name) then -1 else 1
pages.forEach (page) -> pageIndex[page.url] = page

# Expose as global var
root = exports ? this
root.pageIndex = pageIndex