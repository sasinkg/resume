const fs = require('node:fs');
const path = require('node:path');

// Give GitHub Pages a real entry point for direct visits and refreshes.
const buildDirectory = path.resolve(__dirname, '../build');
const creativeDirectory = path.join(buildDirectory, 'creative');
fs.mkdirSync(creativeDirectory, { recursive: true });
fs.copyFileSync(path.join(buildDirectory, 'index.html'), path.join(creativeDirectory, 'index.html'));

// Ship the standalone canvas campaign at /game/ alongside the React site.
fs.cpSync(path.resolve(__dirname, '../game'), path.join(buildDirectory, 'game'), { recursive: true });
