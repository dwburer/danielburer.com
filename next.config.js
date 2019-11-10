// next.config.js
const withSass = require('@zeit/next-sass');
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

module.exports = withSass({
  async exportPathMap(defaultPathMap, {
    dev, dir, outDir, distDir, buildId,
  }) {
    if (dev) {
      return defaultPathMap;
    }
    // Copy static files from project root into the export directory
    // TODO: include robots.txt, Apple touch icons, etc.
    await copyFile(join(dir, 'favicon.ico'), join(outDir, 'favicon.ico'));
    await copyFile(join(dir, 'CNAME'), join(outDir, 'CNAME'));
    return defaultPathMap;
  },
});
