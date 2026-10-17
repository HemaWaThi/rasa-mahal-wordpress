'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const ScPremiumTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'small';
    }
    render() {
        return (index.h("sc-tag", { key: '8e623c9716c40ee3c1b86906d8bf8c691d8185d3', type: "success", size: this.size }, wp.i18n.__('Premium', 'surecart')));
    }
};

exports.sc_premium_tag = ScPremiumTag;

//# sourceMappingURL=sc-premium-tag.cjs.entry.js.map