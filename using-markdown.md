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
<div class="examples-box">
    <iframe width="100%" height="0" src="./iframes/creating-headers-iframe.html" frameborder="0" scrolling="auto" onload="resizeIframe(this)"></iframe>
</div>

<button name="creating-headers-button" onclick="window.open('https://opendocsg.github.io/editor/#U1YIycgsVgCikoxUhZzEovTU4hKFDEOFjNTElNQiRS5lZRQVZalFlRBlChlGSIqUMc1RyDBGVoCqIjcfKJ5YAlRkAlMEAA==')">Try it out!</button>

**Styling Text**

You can add a variety of styles to your text for emphasis or clarity. These include bold, italics and footers.
```markdown
**Bold** and *italicize* your text like this.

Add footers easily! [^1]
[^1]: Your footer here.
```
<div class="examples-box">
	<b>Bold</b> and <i>italicize</i> your text like this.
	Add footers easily!<sup class="footnote-ref">[1]</sup>
	<section class="footnotes">
		<ol class="footnotes-list">
			<li id="fn1" class="footnote-item"><p>Footnote↩</p>
			</li>
		</ol>
	</section>
</div>

<button name="styling-text-button" onclick="window.open('https://opendocsg.github.io/editor/#09Jyys9J0dJSSMxLUdDKLEnMyUzOrErVUqjMLy1SKEmtKFHIycxOVSjJyCzW4wIA')">Try it out!</button>

**Indentations**

Use the > symbol at the start of your text to indent it for formatting purposes.
```
> This is an indented text!
```
<div class="examples-box">
    <div style="margin-left: 40px"> This is an indented text! </div>
</div>

<button name="indentations-button" onclick="window.open('https://opendocsg.github.io/editor/#88vP083MS0nNK0lNUShJrShR5LJTCMnILFYAosQ8BTQ5AA==')">Try it out!</button>

## Organising your Content
**Using Lists**

As its name suggests, a list is used to display a collection of items. There are two kinds of lists - bullet lists and number lists.
```
This is a bullet list:
 - Item 1
 - Item 2
   - Item 2.1
   - Item 2.2

This is a number list:
1. Item A
2. Item B
```
<div class="examples-box">
	This is a bullet list:
	<ul>
		<li>Item 1</li>
		<li>Item 2
		<ul>
			<li>Item 2.1</li>
			<li>Item 2.2</li>
		</ul>
	</li>
	</ul>

	This is a number list:
	<ol>
		<li>Item A</li>
		<li>Item B</li>
	</ol>
</div>

<button name="using-lists-button" onclick="window.open('https://opendocsg.github.io/editor/#C8nILFYAokSFpNKcnNQShZzM4hIrLgVdBc+S1FwFQzjLiEtBAc7WM0ThGXFxhcDNySvNTUotgppjqAdR48hlBGU5cQEA')">Try it out!</button>

**Using Tables**

Tables are used to organise information in a clear, easy-to-read manner. Here's how to add one to your webpage.

Visit the <a href="https://www.tablesgenerator.com/html_tables" target="_blank"> HTML Table Generator</a> and select File > New Table. Once the table is created, double-click a cell to add in data. Then click the Generate button and copy the generated code to your Markdown file.


## Adding Media Enhancements
**Adding Images (jpg, png and gif)**

As they say, a picture speaks a thousand words. To add a image, you need both the image filepath, and an alternative text if the image fails to show up.
```markdown
![Alternative text if image doesn't load](/images/govtech-logo.gif)
```
<div class="examples-box">
	<img src="./images/govtech-logo.gif" alt="Alternative text if image doesn't load"/>
</div>

<button name="adding-images-button" onclick="window.open('https://opendocsg.github.io/editor/#HcoxCoAwDADAr8RJXZrdzc3BH4hIwRgDtSlNKD5f8Obrtjk51RxdGoHT6yAXyBOZ4FSy3Dskjec+3O7FJkQtlANrC8b4P8NVWY9FqwRrPH4=')">Try it out!</button>

**Adding Videos (YouTube)**

Videos are a good platform to bring across content effectively to viewers. You can add YouTube videos by simply following these steps:

1. Click on "Share" button at the bottom of the video.
2. Click on "Embed".
3. Copy the code &lt;iframe...&gt; &lt;/iframe&gt;.
4. Paste it between the &lt;div class="opendoc-video"&gt; and &lt;/div&gt; tags in the following example.

```html
<div class="opendoc-video">
<iframe width="560" height="315" src="https://www.youtube.com/embed/BBcR4KGDdL0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```
<div class="examples-box">
	<div class="opendoc-video">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/BBcR4KGDdL0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</div>

<button name="adding-videos-button" onclick="window.open('https://opendocsg.github.io/editor/#Lc7LDoIwFATQPV/R3D1Uo7hQyoKYuNCVf1B6L7ZJoaQPGv5efCwnmZmcBs3ClJUhCHAzTehUuRgkB21RNGbwciSWDUYtoD7tgGkyLx0FHPY1sOCVAB3jHM6c55yr1aWYeqqUGzmNPSHvOvU83m9XfGzj713vPJIXsGVprcsCZIputnK9MJqUX+dIWI6ERv4bQ7I2KE80tQ3/mT46vtnb4g0=')">Try it out!</button>

**Adding Links**

Sometimes, it may be important to direct your user to another website using a hyperlink. Two types of links are covered here, namely URL links and email links.

```markdown
[This](https://www.tech.gov.sg/) links to GovTech!
Send an email to <email@something.com>!
```
<div class="examples-box">
	<a href="https://www.tech.gov.sg/"> This </a> links to GovTech!
	Send an email to <a href="mailto:email@something.com">email@something.com</a>!
</div>

<button name="adding-links-button" onclick="window.open('https://opendocsg.github.io/editor/#iw7JyCyO1cgoKSkottLXLy8v1ytJTc7QS88v0ytO19dUyMnMyy5WKMlXcM8vCwHKKHIFp+alKCTmKaTmJmbmgGRswCyH4vzc1JKMzLx0veT8XDtFLgA=')">Try it out!</button>

**Adding Documents**

Finally, you may wish to attach supplementary documents on your webpage to allow users to download them. These can be word documents, pdf files or excel spreadsheets.

```html
Download the <a href="/files/digital-govt-blueprint.pdf" download>Digital Government Blueprint (Summary)</a> here!
```
<div class="examples-box">
	Download the <a href="./files/digital-govt-blueprint.pdf" download>Digital Government Blueprint (Summary)</a> here!
</div>

<button name="adding-documents-button" onclick="window.open('https://opendocsg.github.io/editor/#JcyxDsIgEADQX8GtHQR1Mo6miR/gaEyDcgUM3JHjKPHvNen2pjdRx0TWKQmgHlP0UWxSN1qBMQOKuqYGheNfw73lbPk7PocgUurFmN67FngH7WnV1ZslJqjGbcte2GJdiLOVSGicf811K+ZPQzgdjmdd3DKqAAy7Hw==')">Try it out!</button>
