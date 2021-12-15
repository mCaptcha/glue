default:
	cd packages/core && yarn build
	cd packages/vanilla && yarn build
	cd packages/react && yarn build

build: default

docs:
	@-/bin/rm -rf doc
	@-mkdir doc
	cd packages/core && yarn doc
	cd packages/vanilla && yarn doc
	cd packages/react && yarn doc
	cp -r ./packages/core/docs doc/core-glue
	cp -r ./packages/vanilla/docs doc/vanilla
	cp -r ./packages/react/docs doc/react

clean:
	cd packages/core && /bin/rm -rf node_modules
	cd packages/vanilla && /bin/rm -rf node_modules
	cd packages/react && /bin/rm -rf node_modules

install:
	cd packages/core && yarn install
	cd packages/vanilla && yarn install
	cd packages/react && yarn install

test:
	cd packages/core && yarn test
	cd packages/vanilla && yarn test
	cd packages/react && yarn test
