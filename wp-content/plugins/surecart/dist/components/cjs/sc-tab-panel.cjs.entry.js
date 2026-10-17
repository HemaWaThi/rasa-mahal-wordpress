'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const scTabPanelCss = ":host{--padding:0;--spacing:var(--sc-spacing-large);display:block}::slotted(*~*){margin-top:var(--spacing)}.tab-panel{border:solid 1px transparent;padding:var(--padding);font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium)}";
const ScTabPanelStyle0 = scTabPanelCss;

let id = 0;
const ScTabPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentId = `tab-panel-${++id}`;
        this.name = '';
        this.active = false;
    }
    render() {
        // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
        this.el.id = this.el.id || this.componentId;
        return (index.h(index.Host, { key: '2cd2690a82090139213d4653c9e24102c7bc10d2', style: { display: this.active ? 'block' : 'none' } }, index.h("div", { key: 'c4dbfba7896a48496937840d16fb60ba954b1391', part: "base", class: "tab-panel", role: "tabpanel", "aria-hidden": this.active ? 'false' : 'true' }, index.h("slot", { key: 'faaf1ebc7649daa0eb1af63dc691d64c642a28c5' }))));
    }
    get el() { return index.getElement(this); }
};
ScTabPanel.style = ScTabPanelStyle0;

exports.sc_tab_panel = ScTabPanel;

//# sourceMappingURL=sc-tab-panel.cjs.entry.js.map