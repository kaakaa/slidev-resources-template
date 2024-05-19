import fs from 'fs';

// ts-node scripts/setup-repository.ts [github.repository] [pages.base_path] [pages.base_url]
const args = process.argv.slice(2);
const repository = args[0] || 'kaakaa/slidev-resources-template';
const basePath = args[1] || '/slidev-resources-template';
const baseUrl = args[2] || 'https://kaakaa.github.cio/slidev-resources-template';

const values: { [key: string]: string } = {
    'github.repository': repository,
    'pages.base_url': baseUrl,
}

const filesToRemove = [
    '.github/workflows/setup.yaml',
    'scripts/setup-repository.ts',
    'scripts/templates/tmpl_readme.md',
    'assets/'
];

/* replace pages.basePath in package.json*/
let pkgjsonFile = fs.readFileSync('package.json', 'utf8');
pkgjsonFile = pkgjsonFile.replace( /--base \/slidev-resources-template/g, `--base ${basePath}`);
fs.writeFileSync('package.json', pkgjsonFile, 'utf-8');


/* rewrite README.md */
let readmeFile = fs.readFileSync('scripts/templates/tmpl_readme.md', 'utf8');
for (const key in values) {
    readmeFile = readmeFile.replace(new RegExp(`{{ ${key} }}`, 'g'), values[key]);
}
fs.writeFileSync('README.md', readmeFile, 'utf-8');


/* remove unnecessary files */
filesToRemove.forEach((path) => {
    const stats = fs.statSync(path);
    if (stats.isDirectory()) {
        fs.rmdirSync(path, { recursive: true });
    } else if (stats.isFile()) {
        fs.unlinkSync(path);
    }
});
