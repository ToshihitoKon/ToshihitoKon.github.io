default: build/pdf

build/%:
	marp slide.md -o dest/slide.${@F} --allow-local-files

serve:
	marp --server .
