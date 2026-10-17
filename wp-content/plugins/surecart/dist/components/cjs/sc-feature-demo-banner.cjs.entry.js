'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const scFeatureDemoBannerCss = ".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}";
const ScFeatureDemoBannerStyle0 = scFeatureDemoBannerCss;

const ScFeatureDemoBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.url = 'https://app.surecart.com/plans';
        this.buttonText = wp.i18n.__('Upgrade Your Plan', 'surecart');
    }
    render() {
        return (index.h("div", { key: '6131c5d1e084bb8768c4c39b4b00645fefac69e0', class: { 'sc-banner': true } }, index.h("p", { key: '6f9fb06e1cb08024c1928898e5eee8d8d91b7b77' }, index.h("slot", { key: '4a3845d026b769f35438136a63e144d34954295e' }, wp.i18n.__('This is a feature demo. In order to use it, you must upgrade your plan.', 'surecart')), index.h("a", { key: '043b395ce4c93b6d250df56172195334ed62645c', href: this.url, target: "_blank" }, index.h("slot", { key: '9cfabf3fc0e44ffbda609ed9ffcfe14cbd38b014', name: "link" }, this.buttonText, " ", index.h("sc-icon", { key: 'db79e754559bc4a5fa1f4a769c2afcbfd9dd1495', name: "arrow-right" }))))));
    }
};
ScFeatureDemoBanner.style = ScFeatureDemoBannerStyle0;

exports.sc_feature_demo_banner = ScFeatureDemoBanner;

//# sourceMappingURL=sc-feature-demo-banner.cjs.entry.js.map