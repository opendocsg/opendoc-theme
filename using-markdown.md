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
    <iframe width="100%" height="0" src="iframes/creating-headers-iframe.html" frameborder="0" scrolling="auto" onload="resizeIframe(this)"></iframe>
</div>

<button name="creating-headers-button" onclick="window.open('editor/#U1AAAi5lhZCMzGIFICrJSFXISSxKTy0uUcgwVMhITUxJLVLkUkZVUZZaVAlRppBhhKQIizkKGcbIClBV5OYDxRNLgIpM4IpADgIA')">Try it out!</button>

**Styling Text**

You can add a variety of styles to your text for emphasis or clarity. These include bold, italics and footers.
```
**Bold** and *italicize* your text like this.
Add footers easily! <sup>[1]</sup> <sub>[2]</sub>
```
<div class="examples-box">
	<b>Bold</b> and <i>italicize</i> your text like this.
	Add footers easily! <sup>[1]</sup> <sub>[2]</sub>
</div>

<button name="styling-text-button" onclick="window.open('editor/#HY2xDoMwDAX3fMXr6oGqzCgS/Q3UIcGuahGRihiJ8PU0veluOuCHI3rmxEQIK4PUQtJZTyHUvG8wOQxJF4F9tHRuZMY7Z5OtQELRVG8Yyv710+M13Ju0jH7q/xm9a5ML')">Try it out!</button>

**Indentations**

Use the > symbol at the start of your text to indent it for formatting purposes.
```
> This is an indented text!
```
<div class="examples-box">
    <div style="margin-left: 40px"> This is an indented text! </div>
</div>

<button name="indentations-button" onclick="window.open('editor/#U1AAAi47hZCMzGIFIErMU8jMS0nNK0lNUShJrShR5AIpAAA=')">Try it out!</button>

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

<button name="using-lists-button" onclick="window.open('editor/#U1AAAq6QjMxiBSBKVEgqzclJLVHIySwuseJS0FLwLEnNVTCEs4y4gMphbD1DFJ4RF5I5eaW5SalFUHMM9SBqHLmMoCwnkE4FAA==')">Try it out!</button>

**Using Tables**

Tables are used to organise information in a clear, easy-to-read manner. Here's how to add one to your webpage.

Visit the <a href="https://www.tablesgenerator.com/html_tables" target="_blank"> HTML Table Generator</a> and select File > New Table. Once the table is created, double-click a cell to add in data. Then click the Generate button and copy the generated code to your Markdown file.


## Adding Media Enhancements
**Adding Images (jpg, png and gif)**

As they say, a picture speaks a thousand words. To add a image, you need both the image filepath, and an alternative text if the image fails to show up.
```
![Alternative text if image doesn't load](/images/govtech-logo.jpg)
```
<div class="examples-box">
	<img src="../images/govtech-logo.jpg" alt="Alternative text if image doesn't load"/>
</div>

<button name="adding-images-button" onclick="window.open('editor/#U1AAAi7FaMecktSivMSSzLJUhZLUihKFzDSFzNzE9FSFlPzU4jz1EoWc/MSUWA19sGCxfnp+WUlqcoZuTn56vl5WQbomF8ggAA==')">Try it out!</button>

**Adding Videos (YouTube)**

Videos are a good platform to bring across content effectively to viewers. You can add YouTube videos by simply following these steps:

1. Click on "Share" button at the bottom of the video.
2. Click on "Embed".
3. Copy the code &lt;iframe...&gt; &lt;/iframe&gt;.
4. Paste it between the &lt;div class="opendoc-video"&gt; and &lt;/div&gt; tags in the following example.

```
<div class="opendoc-video">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/BBcR4KGDdL0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
```
<div class="examples-box">
	<div class="opendoc-video">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/BBcR4KGDdL0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</div>
</div>

<button name="adding-videos-button" onclick="window.open('editor/#LY5BDoIwFET3nKL5e6hGcaEtC2LiQlfeoPR/bJNCSVtouL1EfLtJZiaPsY1CoF2YdipGCX6iEb0uF4vkoSnYD2H7oAZi2WIyEurLAZgh+zFJwulYA4tBSzApTfHKec65Wv2c5o4q7QdOQ0fI21a/z8/HHV/b+HfX+YAUJGxZOeezBDUnPzm13hiNOqxTIiwHQqv+jX52LupANDaC705NIfjmv5t+AQ==')">Try it out!</button>

**Adding Links**

Sometimes, it may be important to direct your user to another website using a hyperlink. Two types of links are covered here, namely URL links and email links.

```
[This](https://www.tech.gov.sg/) links to GovTech!
Send an email to <email@something.com>!
```
<div class="examples-box">
	<a href = "https://www.tech.gov.sg/" target="_blank"> This </a> links to GovTech!
	Send an email to <a href = "mailto:email@something.com">email@something.com</a>!
</div>

<button name="adding-links-button" onclick="window.open('editor/#U1AAAq7okIzM4liNjJKSgmIrff3y8nK9ktTkDL30/DK94nR9TYWczLzsYoWSfAX3/LIQoIwiV3BqXopCYp5Cam5iZg5IxgbMcijOz00tycjMS9dLzs+1U+QCmQ8A')">Try it out!</button>

**Adding Documents**

Finally, you may wish to attach supplementary documents on your webpage to allow users to download them. These can be word documents, pdf files or excel spreadsheets.

```
Download the [Digital Government Blueprint (Summary)](/files/digital-govt-blueprint.pdf) here!
```
<div class="examples-box">
	Download the <a href="../files/digital-govt-blueprint.pdf" download>Digital Government Blueprint (Summary)</a> here!
</div>

<button name="adding-documents-button" onclick="window.open('editor/#U1AAAi6X/PK8nPzEFIWSjFSFaJfM9MySxBwF9/yy1KK83NS8EgWnnNLUgqJMIEsjuDQ3N7GoUjNWQz8tMye1WD8Folw3Pb+sRDcJplCvICVNUyEjtShVkQtkBwA=')">Try it out!</button>