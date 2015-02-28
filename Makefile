deploy-setup-project:
	echo "init gh-pages for current repo and gh-pages branch..."
	git checkout --orphan gh-pages
	git rm -rf .
	touch README.md
	git add README.md
	git commit -m "Init gh-pages"
	git push --set-upstream origin gh-pages
	git checkout master

deploy-setup-org:
	echo "init gh-pages for github.io repo and master branch..."
	mkdir deploy-repo
	cd deploy-repo && git init
	cd deploy-repo && touch README.md
	cd deploy-repo && git add README.md
	cd deploy-repo && git commit -m "init commit"
	cd deploy-repo && git remote add origin https://github.com/$(ORGNAME)/$(ORGNAME).github.io.git
	cd deploy-repo && git push -u origin master