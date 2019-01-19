// next.config.js
const withSass = require('@zeit/next-sass');
const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

module.exports = withSass({
    exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
        if (dev) {
            return defaultPathMap
        }
        // Copy favicon from project root into the export directory
        await copyFile(join(dir, 'favicon.ico'), join(outDir, 'favicon.ico'));
        return defaultPathMap
    }
});
