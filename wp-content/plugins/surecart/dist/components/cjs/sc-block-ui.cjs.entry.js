'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const scBlockUiCss = ":host{display:block;position:var(--sc-block-ui-position, absolute);top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:\"\";position:var(--sc-block-ui-position, absolute);top:0;left:0;right:0;bottom:0;cursor:var(--sc-block-ui-cursor, wait);background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}";
const ScBlockUiStyle0 = scBlockUiCss;

const ScBlockUi = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.zIndex = 1;
        this.transparent = undefined;
        this.spinner = undefined;
    }
    render() {
        return (index.h("div", { key: 'da4a3d9d4aae87c6ef9a51dd335e391a373c0d9e', part: "base", class: { overlay: true, transparent: this.transparent }, style: { 'z-index': this.zIndex.toString() } }, index.h("div", { key: 'ad4555f0ec7c9431941664d6dd47c12cec737ed0', class: "overlay__content", part: "content" }, index.h("slot", { key: 'b226d9bc01759054a83b4d17d10f91ec22b429e2', name: "spinner" }, !this.transparent && this.spinner && index.h("sc-spinner", { key: 'ba47a361179c0944612831d43408a0a680b1399a' })), index.h("slot", { key: 'efbfee08ebd450a42c4399555d24e78712b0e73c' }))));
    }
};
ScBlockUi.style = ScBlockUiStyle0;

exports.sc_block_ui = ScBlockUi;

//# sourceMappingURL=sc-block-ui.cjs.entry.js.map