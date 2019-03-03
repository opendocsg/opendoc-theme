---
exclude: true
layout: print
permalink: /export
---
{% assign site_pages = '' | split: ',' %}
{% for site_page in site.html_pages %}
{% unless site_page.exclude %}
{% assign site_pages = site_pages | push: site_page %}
{% endunless %}
{% endfor %}

{% if site.document_order %}
{% assign sorted_folders = '' | split: '' %}
{% for document in site.document_order %}
{% assign document_to_compare = document | strip | uri_escape | downcase %}
{% for page in site_pages %}
{% assign dir_to_compare = page.dir | remove: '/' | downcase %}
{% if document_to_compare == dir_to_compare %}
{{page.content}}
{% endif %}
{% endfor %}
{% endfor %}

{% else %}

{% for page in site_pages %}
{{page.content}}
{% endfor %}
{% endif %}
