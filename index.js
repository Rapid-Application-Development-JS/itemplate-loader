var itemplate = require('idom-template'),
    loaderUtils = require('loader-utils');

module.exports = function (source) {
    var options, renderFn, wrapper;

    this.cacheable && this.cacheable();

    options = loaderUtils.parseQuery(this.query);
    itemplate.options(options);
    renderFn = itemplate.compile(source);

    wrapper = "function (data, content) { var render = " + renderFn.toString()
        + "; return render.call(this, data, require('RAD.js').utils.IncrementalDOM, "
        + "require('RAD.js').utils.ITemplate.helpers, content, require('RAD.js').utils.binder);}";

    return 'module.exports = ' + wrapper;
};