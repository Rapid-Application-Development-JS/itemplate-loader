var itemplate = require('idom-template'),
    loaderUtils = require('loader-utils');

module.exports = function(source) {
    var options, renderFn;

    this.cacheable && this.cacheable();

    options = loaderUtils.parseQuery(this.query);
    itemplate.options(options);
    renderFn = itemplate.compile(source);

    return 'module.exports = ' + renderFn;
};