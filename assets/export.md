---
exclude: true
layout: print
permalink: /export
---
{% if site.section_order == null %}
  {% assign sorted_pages = site.html_pages | sort: 'name' %}
  {% for site_page in sorted_pages %}
    {% unless site_page.exclude %}
      {{site_page.content}}
    {% endunless %}
  {% endfor %}
{% else %}
  {% assign pageOrder = site.section_order %}
  {% for order in pageOrder %}
    {% for site_page in site.html_pages %}
      {% unless site_page.exclude %}
        {% if site_page.title == order %}
          {{site_page.content}}
        {% endif %}
      {% endunless %}
    {% endfor %}
  {% endfor %}
{% endif %}
