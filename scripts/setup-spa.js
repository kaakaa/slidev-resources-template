const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const tag = process.argv[2];
const pagesUrl = process.argv[3];

const entry = `${tag}/slides.md`
const dest = `${tag}/index.html`;

const { data } = matter.read(entry);

const title = data.title || "Slidev Presentation";
const url = `${pagesUrl}/${tag}`;
const imageUrl = `${pagesUrl}/${tag}/preview.png`;
const info = data.info || "";

const index = `<head>
  <meta property="og:title" content="${title}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="${url}"/>
  <meta property="og:image" content="${imageUrl}"/>
  <meta property="og:description" content="${info}"/>
</head>`

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, index, 'utf8');