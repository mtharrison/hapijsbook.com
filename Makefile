PUBLICSRC = web/public-src
PUBLICDST = web/public-dst

SRCJS = $(PUBLICSRC)/js/main.js $(PUBLICSRC)/js/mod.js $(PUBLICSRC)/js/comp.js

all: jsx bfy

jsx:
	@./node_modules/react-tools/bin/jsx -x jsx web/public-src/js/ web/public-src/js/
bfy:
	@browserify $(SRCJS) -o $(PUBLICDST)/js/bundle.js

.PHONY: jsx bfy