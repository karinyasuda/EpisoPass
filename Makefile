clean:
	/bin/rm -f *~ */*~
push:
	git push pitecan.com:/home/masui/git/EpisoPass.git
	git push git@github.com:masui/EpisoPass.git
js:
	coffee -b -c public/javascripts/episopass.coffee
	coffee -c public/javascripts/crypt.coffee

