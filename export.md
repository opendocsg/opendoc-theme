---
---

{% for site_page in site.html_pages %}
    {% if site_page.url == page.url %}
        {{ site_page.content}}
    {% else %}
        {{ site_page.content}}
    {% endif %}
      })
{% endfor %}
