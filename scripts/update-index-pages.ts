import {copyFileSync, readFileSync, writeFileSync} from 'fs';
import {execSync} from 'child_process';
import {globSync} from 'glob';

// ts-node scripts/update-index-pages.ts [gh-pages.dir]
const args = process.argv.slice(2);
let dir = args[0] || 'gh-pages/';
dir[dir.length - 1] === '/' ? dir : dir + '/';

/*
. (main branch)
├ gh-pages/ (gh-pages branch)
│ ├ example-slidev/
│ │ ├ index.html
│ │ ...
│ ├ 2024mmdd_slide/
│ │ ├ index.html
│ │ ...
│ ├ 404.png
│ └ index.html  <- this script will update this
├ pages.json/
...
*/

const slidePaths = globSync(`${dir}/*/index.html`);
const sorted = slidePaths
    .map(path => {
        const elems = path.split('/');
        const name = elems[1];
        const rel = `${name}/${elems[2]}`
        
        const gitDate = execSync(`git -C ${dir} log -1 --format=%cI ${rel}`).toString().trim();
        return { name, date: new Date(gitDate)};
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map(data => {
        const name = data.name;
        const date = data.date.toISOString().split('T')[0];
        return `
        <div class="slide">
            <a href="./${name}">
                <img src="./${name}/preview.png" onerror="this.onerror=null; this.src='./404.png';">
                <div>
                    <h3>${name}</h3>
                </div>
            </a>
            <div>last committed: ${date}</div>
        </div>`
    });

/* update index.html */
let indexHtml = readFileSync('scripts/templates/tmpl_index.html', 'utf8');
indexHtml = indexHtml.replace('{{ entries }}', sorted.join('\n'));
writeFileSync(`${dir}/index.html`, indexHtml, 'utf-8');

/* copy 404.png */
copyFileSync('scripts/templates/404.png', `${dir}/404.png`);
