import { r as registerInstance, h } from './index-25e5af33.js';

const scFeatureDemoBannerCss = ".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}";
const ScFeatureDemoBannerStyle0 = scFeatureDemoBannerCss;

const ScFeatureDemoBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.url = 'https://app.surecart.com/plans';
        this.buttonText = wp.i18n.__('Upgrade Your Plan', 'surecart');
    }
    render() {
        return (h("div", { key: '6131c5d1e084bb8768c4c39b4b00645fefac69e0', class: { 'sc-banner': true } }, h("p", { key: '6f9fb06e1cb08024c1928898e5eee8d8d91b7b77' }, h("slot", { key: '4a3845d026b769f35438136a63e144d34954295e' }, wp.i18n.__('This is a feature demo. In order to use it, you must upgrade your plan.', 'surecart')), h("a", { key: '043b395ce4c93b6d250df56172195334ed62645c', href: this.url, target: "_blank" }, h("slot", { key: '9cfabf3fc0e44ffbda609ed9ffcfe14cbd38b014', name: "link" }, this.buttonText, " ", h("sc-icon", { key: 'db79e754559bc4a5fa1f4a769c2afcbfd9dd1495', name: "arrow-right" }))))));
    }
};
ScFeatureDemoBanner.style = ScFeatureDemoBannerStyle0;

export { ScFeatureDemoBanner as sc_feature_demo_banner };

//# sourceMappingURL=sc-feature-demo-banner.entry.js.map