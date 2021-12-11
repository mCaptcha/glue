doc:
	@-/bin/rm -rf doc
	@-mkdir doc
	lerna run doc
	cp -r ./packages/vanilla/docs doc/vanilla
	cp -r ./packages/react-glue/docs doc/react-glue
