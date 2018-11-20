# Readme
## I. Make a fork of bare

### Forking yours/repo into anothername/repo

1. Just click 'Fork' on the top right of the GitHub page

### Forking yours/repo into yours/repo2

1. Make a new repo on GitHub (eg. datagovsg/opendoc-myrepo)

2. Clone it
	
	`git clone git@github.com:opengovsg/opendoc-myrepo.git`

3. Add the url to the repo you want to fork, as  upstream
	``` 
	cd opendoc-myrepo
	git remote add upstream git@github.com:opengovsg/opendoc-bare.git
	```

4. Pull all the files from the repo you are forking

	` git pull upstream master`

5. Push all the files in your local fork to the repo on GitHub
	
	` git push origin master` 

## II. Set up GitHub pages

On GitHub repo page - Settings - Scroll down to GitHub Pages - Select the branch you want to publish from: master/docs

## III. Set your push webhook

On GitHub repo page - Settings - WebHooks on the left nav bar - Add webhook


## IV. Copy your markdown documents into your local repo

## V. Modify the config file

The config file is located in the base path of your directory ("_config.yml"). There are several customisation options availabe in the config file:

- logo_path: Full path of logo file in assets folder (e.g. "logo.png")
- primary_brand_color: Hex value of primary brand color (e.g. "#000000")

## VI. Push your changes to production

```
git add .
git commit -m <commit message>
git push origin master
```

