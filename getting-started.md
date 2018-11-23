# Getting started 

[Github](https://github.com) is an online service that helps people collaborate on large projects remotely. Along with Github, we'll be using another feature called Github Pages to store and serve the generated documents to the public. More on this feature can be found [here](https://pages.github.com/).

## Prerequisites

- Basic understanding of the command line
- Local machine with Git installed

## Instructions

**Step 1:**

If you __do not__ have a Github account, follow the steps [here](https://github.com/) to get one created.

If you __already have an__ account on Github account, create a new repository and name it in the following convention: 

```
opendoc-<name_of_document> e.g. opendoc-example-doc
```

**Step 2:**

Navigate into the working directory and clone the template repo onto your local machine

```
cd <directory_path>
git clone git@github.com:opendocsg/opendoc-template.git
```

**Step 3:**

Rename the folder to match the name of the repository that was created, and update the remote address for the repo on your local machine. This allows you to make changes to the online repository that was created.

```
mv opendoc-template opendoc-<name_of_document>
cd opendoc-<name_of_document>
git remote set-url origin git@github.com:opendocsg/opendoc-<name_of_document>.git
```

**Step 4:**

Update the following configuration fields in the _config.yml file:
```
- title                           <------- Change
- repository 					<--------- change
- styling_options
	- primary_brand_color     <------- Change
	- logo_path               <------- Change
```

Definitions:

- title: Name of document
- repository -> opendocsg/opendc-<name_of_document>
- primary_brand_colour: Primary brand color of Ministry/Agency publishing the document
- logo_path: Path to logo file in this directory


**Step 5:**

Copy the markdown documents into the root directory of the repo. The documents have to be in the markdown (.md) format, and you can find out more about getting the documents converted in the following section.

**Step 6:**

Commit your changes, and update the online repository with the new version

```
git add .
git commit -m <"commit_message">
git push origin master
```

## Configuring Github Pages

Follow these instructions on "Enabling Github Pages to publish your site from master or gh-pages"

Link [here](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)








