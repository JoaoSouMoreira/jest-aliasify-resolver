var path = require('path');
var aliasify = require('aliasify');
var resolve = require('resolve');
var transformTools = require('browserify-transform-tools');

module.exports = function aliasifyResolver(file, data) {
    var config = transformTools.loadTransformConfigSync('aliasify', file, {
        fromSourceFileDir: true
    });

    if (config && config.config && config.config.aliases) {
        if (Object.keys(config.config.aliases).indexOf(file) !== -1) {
            return path.resolve(config.config.aliases[file]);
        }
    }

    return resolve.sync(file, data);
};