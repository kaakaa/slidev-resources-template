# slidev-resources

This repository manage my [slidev](https://sli.dev/) resources.

* [GitHub Pages(SPA)](https://kaakaa.github.io/slidev-resources-template)
* [GitHub Releases(PDF)](https://github.com/kaakaa/slidev-resources-template/releases)

## Write and deploy a slide
1. Create a directory (e.g.: `my-slide`)
2. Create `slides.md` in the directory and write slidev to the file (e.g.:`my-slide/slides.md`)
   * The file name must be `slides.md` because it's hardcoded in [`package.json`](./package.json)
3. (Optional) Create a sub directory for slidev's assets if you want use it in the slide (e.g.:`my-slide/public`, `my-slide/components`)
4. Commit it and create a tag with the name of the directory (e.g.: `my-slide`)

## When encounting font issue
If your slide encounters font issue, you need to add a step to install your language's font to [the release action](./.github/workflows/release.yaml).

For example (to install Japanese font):
```
...
jobs:
  release:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    steps:
      - name: Install Japanese font            # Insert these 2 lines
        run: sudo apt install -y fonts-noto    #     to install Japanese font
      - uses: actions/checkout@v3
      ...
```
# License

This repository is licensed under the MIT License. See [LICENSE](LICENSE) for the full license text.
