---
title: Using Markdown
---

# Using Markdown

Our system takes in Markdown files (with file extension .md) and converts them into elegant webpages. Here are some tips to orientate you with Markdown. 

## Formatting your Text
**Creating Headers**

Headers come in different types, from the largest h1 size to the moderate h4 size. Create headers by adding the # symbol at the front of your text.
```
# This is the largest h1 header!
## This is the very large h2 header!
### This is the large h3 header!
#### This is the moderate h4 header!
```
<div class="creating-headers">
      <iframe width="100%" height="0" src="iframes/creating-headers-iframe.html" frameborder="0" scrolling="no" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="creating-headers-button" onclick="window.open('markdown-helper-master/opendoc-creating-headers.html')">Try it out!</button>

**Styling Text**

You can add a variety of styles to your text for emphasis or clarity. These include bold, italics and footers.
```
**Bold** and *italicize* your text like this.
Add footers easily! <sup>[1]</sup> <sub>[2]</sub>
```
<div class="styling-text">
      <iframe width="100%" height="0" src="iframes/styling-text-iframe.html" frameborder="0" scrolling="no" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="styling-text-button" onclick="window.open('markdown-helper-master/opendoc-styling-text.html')">Try it out!</button>

**Indentations**

Use the > symbol at the start of your text to indent it for formatting purposes.
```
> This is an indented text!
```
<div class="indentations">
      <iframe width="100%" height="0" src="iframes/indentations-iframe.html" frameborder="0" scrolling="no" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="indentations-button" onclick="window.open('markdown-helper-master/opendoc-indentations.html')">Try it out!</button>

## Organising your Content
**Using Lists**

As its name suggests, a list is used to display a collection of items. There are two kinds of lists - bullet lists and number lists.
```
This is a bullet list:
 * Item 1
 * Item 2
   * Item 2.1
   * Item 2.2

This is a number list:
1. Item A
2. Item B
```
<div class="using-lists">
      <iframe width ="100%" height="0" src="iframes/using-lists-iframe.html" frameborder="0" scrolling="no" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="using-lists-button" onclick="window.open('markdown-helper-master/opendoc-using-lists.html')">Try it out!</button>

**Using Tables**

Tables are used to organise information in a clear, easy-to-read manner. Here's how to add one to your webpage.

Visit the <a href="https://www.tablesgenerator.com/html_tables" target="_blank"> HTML Table Generator </a> and select File > New Table. Once the table is created, double-click a cell to add in data. Then click the Generate button and copy the generated code to your Markdown file.


## Adding Media Enhancements
**Adding Images (jpg, png and gif)**

As they say, a picture speaks a thousand words. To add a image, you need both the image filepath, and an alternative text if the image fails to show up.
```
![Alternative text if image doesn't load](/images/govtech-logo.jpg)
```
<div class="adding-images">
      <iframe width ="100%" height="0" src="iframes/adding-images-iframe.html" frameborder="0" scrolling="no" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="adding-images-button" onclick="window.open('markdown-helper-master/opendoc-adding-images.html')">Try it out!</button>

**Adding Videos (YouTube)**

Videos are a good platform to bring across content effectively to viewers. You can add YouTube videos by simply following these steps:

1. Click on "Share" button at the bottom of the video.
2. Click on "Embed".
3. Copy the code &lt;iframe...&gt; &lt;/iframe&gt;.
4. Paste it between the &lt;div class="bp-youtube"&gt; and &lt;/div&gt; tags in the following example.

```
<div class="bp-youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BBcR4KGDdL0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```
<div class="adding-videos">
      <iframe width ="100%" height="0" src="iframes/adding-videos-iframe.html" frameborder="0" scrolling="yes" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="adding-videos-button" onclick="window.open('markdown-helper-master/opendoc-adding-videos.html')">Try it out!</button>

**Adding Links**

Sometimes, it may be important to direct your user to another website using a hyperlink. Two types of links are covered here, namely URL links and email links.

```
[This](https://www.tech.gov.sg/) links to GovTech!
Send an email to <email@something.com>!
```
<div class="adding-links">
      <iframe width ="100%" height="0" src="iframes/adding-links-iframe.html" frameborder="0" scrolling="yes" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="adding-links-button" onclick="window.open('markdown-helper-master/opendoc-adding-links.html')">Try it out!</button>

**Adding Documents**

Finally, you may wish to attach supplementary documents on your webpage to allow users to download them. These can be word documents, pdf files or excel spreadsheets.

```
Download the [Digital Government Blueprint (Summary)](/files/digital-govt-blueprint.pdf) here!
```
<div class="adding-documents">
      <iframe width ="100%" height="0" src="iframes/adding-documents-iframe.html" frameborder="0" scrolling="no" style="border: 1px solid grey;" onload="resizeIframe(this)"></iframe>
</div>

<button name="adding-documents-button" onclick="window.open('markdown-helper-master/opendoc-adding-documents.html')">Try it out!</button>