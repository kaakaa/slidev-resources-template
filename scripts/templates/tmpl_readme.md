[![Release slidev](https://github.com/{{ github.repository }}/actions/workflows/release.yaml/badge.svg)](https://github.com/{{ github.repository }}/actions/workflows/release.yaml)

# slidev-resources

This repository manage my [slidev](https://sli.dev/) resources.

* [GitHub Pages(SPA)]({{ pages.base_url }})
* [GitHub Releases(PDF)](https://github.com/{{ github.repository }}/releases)

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{ github.repository }})

## Write and deploy a slide

1. Run `npm install`
2. Run `npm run new` and specify a name of directory (e.g.:`my-slide`) to create new sub-project
   * `npm run new` command will create `my-slide/slides.mds` and `my-slide/public/`
   * `my-slide/slides.md` is an entry point for slidev. (Filename `slides.md` must not be changed because its name is hardcoded in some scripts in `package.json`)
   * Static files in `my-slide/public` can be refered from slide
     * e.g.: `my-slide/public/image.png` can be refered as `/image.png` from `my-slide/slides.md`
3. Commit subdirectory (e.g.: `my-slide/`) and create a tag with the name of the directory (e.g.: `my-slide`)

### Set up environment to write a slide

This repository has devcontainer setting, so you can create Codespace from [Your Codespaces](https://github.com/{{ github.repository }}/codespaces) and write slidev on it.
There are two kinds of devcontainer.

| Configuration   | Description |
|:----------------|:------------|
| [Slidev Dev](./.devcontainer/devcontainer.json)  | Use `mcr.microsoft.com/vscode/devcontainers/universal:2-linux` |
| [Slidev Dev (ja)](./.devcontainer/slidev-dev-ja) | `Slidev Dev` + cjk font (fonts-noto-cjk) |

### Enable OGP on GitHub Pages (Experimental)

Adding `githubPages.ogp=true` to frontmatter of Slidev enables OGP on GitHub Pages.

```yaml
githubPages:
  ogp: true
```

Parameters of OGP are from a front-matter in slidev entry file.
| ogp property   | front-matter | default value |
|:---------------|:-------------|:--------------|
| og:title       | title        | `Slidev Presentation` |
| og:type        | -            | `website`     |
| og:url         | -            | `{url_ghpages}`      |
| og:image       | -            | `{url_ghpages}/preview.png` |
| og:description | info         | `(empty)`     |

Preview image of `og:image` is generate from the first page of PDF file.

## When encounting font issue

If your slide encounters font issue, you need to add a step to install your language's font to [the release action](./.github/workflows/release.yaml).

For example (to install Japanese font):

```yaml
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