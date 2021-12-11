default:
	cd packages/vanilla && yarn build
	cd packages/react-glue && yarn build

build: default

docs:
	@-/bin/rm -rf doc
	@-mkdir doc
	cd packages/vanilla && yarn doc
	cd packages/react-glue && yarn doc
	cp -r ./packages/vanilla/docs doc/vanilla
	cp -r ./packages/react-glue/docs doc/react-glue

clean:
	cd packages/vanilla && /bin/rm -rf node_modules
	cd packages/react-glue && /bin/rm -rf node_modules

install:
	cd packages/vanilla && yarn install
	cd packages/react-glue && yarn install

test:
	cd packages/vanilla && yarn test
	cd packages/react-glue && yarn test