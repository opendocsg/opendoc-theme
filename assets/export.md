---
exclude: true
layout: print
permalink: /export
---
<!-- dynamic combine all other md contents except itself -->
<!-- inspired from https://codana.me/2014/06/16/excluding-pages-from-top-navigation-in-jekyll/ -->
{% for site_page in site.html_pages %}
  {% unless site_page.exclude %}
    {{site_page.content}}
  {% endunless %}
{% endfor %}
