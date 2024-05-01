random_tag := $(shell cat /dev/urandom | tr -dc 'a-zA-Z' | fold -w 2 | head -n 1)
.PHONY: random
deploy:
		npm run build
		@echo "Tag: $(shell date +%y%m%d)$(random_tag)"
		docker build -t black000fox/keepsy:front-$(shell date +%y%m%d)$(random_tag) .
		docker push black000fox/keepsy:front-$(shell date +%y%m%d)$(random_tag)