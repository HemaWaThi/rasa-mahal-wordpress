'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const scDividerCss = ":host{display:block;min-height:1px}.divider{position:relative;padding:var(--spacing) 0}.line__container{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center}.line{width:100%;border-top:1px solid var(--sc-divider-border-top-color, var(--sc-color-gray-200))}.text__container{position:relative;display:flex;justify-content:center;font-size:var(--sc-font-size-small)}.text{padding:0 var(--sc-spacing-small);background:var(--sc-divider-text-background-color, var(--sc-color-white));color:var(--sc-color-gray-500)}";
const ScDividerStyle0 = scDividerCss;

const ScDivider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { key: 'b3da022625cf0ec616e9e10dd0f48e5b40bc03d0', class: "divider", part: "base" }, index.h("div", { key: 'e4b75e2f40d1207c2a15ccdfa620e30bbf7b65a4', class: "line__container", "aria-hidden": "true", part: "line-container" }, index.h("div", { key: 'a6d84e10c4f587959baaab47d0e4436045a826cc', class: "line", part: "line" })), index.h("div", { key: '8a324db9cd308d00e4ff5ebad3fce6dacad8f772', class: "text__container", part: "text-container" }, index.h("span", { key: 'b971268e5702f9acfd716fb018515f3aacb25aa9', class: "text", part: "text" }, index.h("slot", { key: '81ceb5ae6905dce109aaff37742959e27bf62625' })))));
    }
};
ScDivider.style = ScDividerStyle0;

exports.sc_divider = ScDivider;

//# sourceMappingURL=sc-divider.cjs.entry.js.map