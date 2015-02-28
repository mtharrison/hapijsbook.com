PUBLICSRC = web/public-src
PUBLICDST = web/public-dst

SRCJS = $(PUBLICSRC)/js/main.js $(PUBLICSRC)/js/mod.js

all: bfy

bfy:
	browserify $(SRCJS) -o $(PUBLICDST)/js/bundle.js

.PHONY: bfy