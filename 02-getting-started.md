---
title: Getting Started 
---

# Getting Started 

[Github](https://github.com) is an online service that helps people collaborate on large projects remotely. OpenDoc makes use Github's platform to manage the documents and provide a simple user interface from which you can make changes to your documents. 

Before you proceed with the rest of this tutorial, we recommend that you take some time to complete the following online courses. Each course will take around half an hour to complete, and it will walk you through the user interface of Github, as well as some of the process flows that we'll be using for OpenDoc.

> **Introduction to Github** (Strongly recommend)

> [https://lab.github.com/githubtraining/introduction-to-github](https://lab.github.com/githubtraining/introduction-to-github)

> **Communicating using Markdown** (Strongly recommend)

> [https://lab.github.com/githubtraining/communicating-using-markdown](https://lab.github.com/githubtraining/communicating-using-markdown)

> **Reviewing pull requests** (Optional)

> [https://lab.github.com/githubtraining/reviewing-pull-requests](https://lab.github.com/githubtraining/reviewing-pull-requests)

More on this feature can be found [here](https://pages.github.com/).

## Creating an OpenDoc (IT administrators)

**Step 1:**

> If you __do not__ have a Github account, follow the steps [here](https://github.com/) to get one created.

> If you __already have an__ account on Github account, create a new repository and name it in the following convention: 

```opendoc-<name_of_document> e.g. opendoc-example-doc```

**Step 2:**

> Navigate into the working directory and clone the template repo onto your local machine.

```
cd <directory_path>
git clone git@github.com:opendocsg/opendoc-template.git
```

**Step 3:**

> Rename the folder to match the name of the repository that was created, and update the remote address for the repo on your local machine. This allows you to make changes to the online repository that was created.

```
mv opendoc-template opendoc-<name_of_document>
cd opendoc-<name_of_document>
git remote set-url origin git@github.com:opendocsg/opendoc-<name_of_document>.git
```

**Step 4:**

> Update the following configuration fields in the _config.yml file:

```
- title                           <------- Update
- repository 	                  <------- Update
- styling_options
	- primary_brand_color     <------- Update
	- logo_path               <------- Update
```

> Definitions:

> - title: Name of document
> - repository -> opendocsg/opendoc-<name_of_document>
> - primary_brand_colour: Primary brand color of Ministry/Agency publishing the document
> - logo_path: Path to logo file in this directory


**Step 5:**

> Copy the markdown documents into the root directory of the repo. The documents have to be in the markdown (.md) format, and you can find out more about getting the documents converted in the following section.

**Step 6:**

> Commit your changes, and update the online repository with the new version.

```
git add .
git commit -m <"commit_message">
git push origin master
```

### Configuring Github Pages

> Follow these instructions on "Enabling Github Pages to publish your site from master or gh-pages".

> Link [here](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)

## Editing an existing OpenDoc (Content owners)

> Follow these steps if you want to make a change to one of your documents. Changes made here will **NOT** take effect immediately, and you will be able to review the document before publishing it online.

**Step 1:** 

> Visit [Github.com](https://github.com).

> ![](/images/edit-document/step-1-visit-site.png)

**Step 2:** (If you __do not__ already have a Github account)

> Create a Github account by filling up the required information. 

> **IMPORTANT:** Once you have created your account, email us at admin@opendoc.sg with your username and document name and we will grant you permission to edit the document. An email will be sent to you with an invitation to join the document, click on the "Accept Invitation" button to proceed.

> ![](/images/edit-document/step-2-sign-up-screen.png)

**Step 3:** 

> Click on the "Sign in" button.

> ![](/images/edit-document/step-3-sign-in-button.png)

> and sign in to your account.

> ![](/images/edit-document/step-3-sign-in-box.png)

**Step 4:** 

> Select the OpenDoc document you want to edit.

> ![](/images/edit-document/step-4-select-document.png)

**Step 5:** 

> Select the "staging" branch.

> ![](/images/edit-document/step-5-select-staging-branch.png)

**Step 6:** 

> Select the file that you would like to make changes to.

> ![](/images/edit-document/step-6-select-file-to-edit.png)

**Step 7:** 

> Click on the "Edit" icon.

> ![](/images/edit-document/step-7-click-on-edit.png)

**Step 8:** 

> Make the necessary edits.

> ![](/images/edit-document/step-8-make-changes-to-file.png)

**Step 9:** 

> Add a description for the changes made.

> ![](/images/edit-document/step-9-add-description-for-changes-made.png)

**Step 10:** 

> Click on the "Commit change" button.

> ![](/images/edit-document/step-10-commit-changes.png)

Congrats!!! 🎉🎉🎉 You have made a change to the document.

## Updating OpenDoc (IT administrators)

Follow these steps if you want to publish the changes made in the draft environment. This process will require a second person to review the changes before the document can be published live.

**IMPORTANT:** Before you proceed with the next steps, check if the draft site is reflecting the changes accurately.

### For the requestor

**Step 1:** 

> Visit [Github.com](https://github.com).

> ![](/images/update-website/step-1-visit-site.png)

**Step 2:** (If you __do not__ already have a Github account)

> Create a Github account by filling up the required information. 

> **IMPORTANT:** Once you have created your account, email us at admin@opendoc.sg with your username and document name and we will grant you permission to edit the document. An email will be sent to you with an invitation to join the document, click on the "Accept Invitation" button to proceed.

> ![](/images/update-website/step-2-sign-up-screen.png)

**Step 3:** 

> Click on the "Sign in" button.

> ![](/images/update-website/step-3-sign-in-button.png)

> and sign in to your account.

> ![](/images/update-website/step-3-sign-in-box.png)

**Step 4:** 

> Select the OpenDoc document you want to edit.

> ![](/images/update-website/step-4-select-document.png)

**Step 5:** 

> Click on the "Pull requests" tab.

> ![](/images/update-website/step-5-click-pull-request.png)

**Step 6:** 

> Select "master" as the "base", and "staging" as the branch to compare from.

> ![](/images/update-website/step-6-base-and-compare.png)

**Step 7:**

> Click on the "Create pull request" button.

> ![](/images/update-website/step-7-create-pull-request.png)

**Step 8:**

> Select a reviewer for your pull request.

> ![](/images/update-website/step-8-select-reviewer.png)

**Step 9:**

> Create the pull request.

> ![](/images/update-website/step-9-create-pull-request.png)

You've just created a pull request. Now, someone else from your team can proceed with approving the changes.

### For the approver

**IMPORTANT:** Complete the next steps **ONLY** after the pull request is created.

**Step 10:**

> Click on the "Pull requests" tab.

> ![](/images/update-website/step-10-click-pull-request.png)

**Step 11:**

> Select the pull request that was submitted.

**Step 12:**

> Add your review to the pull request by clicking on the "Add review" button.

> ![](/images/update-website/step-12-click-add-review.png)

**Step 13:**

> Review the changes made by clicking on the "Files changed" tab.

> ![](/images/update-website/step-13-files-changed.png)

**Step 14:**

> If the changes are correct, provide a short comment, select the "Approve" option, and click on the "Submit review" button.

> ![](/images/update-website/step-14-review-changes.png)

**Step 15:**

> Click on the "Merge pull request" button.

> ![](/images/update-website/step-15-merge-pull-request.png)

**Step 16:**

> Lastly, click on the "Confirm merge" button.

> ![](/images/update-website/step-16-confirm-merge.png)

### Congrats!!! 🎉🎉🎉 

Your updates have been pushed to production, and are now viewable to the public. 

![](/images/update-website/step-16-merge-success.png)








