import { r as registerInstance, h, H as Host } from './index-25e5af33.js';
import './watchers-2d9a1422.js';
import { s as state } from './store-289e460c.js';
import { a as isBusy } from './getters-1477d792.js';
import { t as trackOffer, p as preview } from './mutations-b310b068.js';
import './watchers-81f32d01.js';
import './index-18f5a1bc.js';
import './google-52867ad8.js';
import './currency-a0c9bff4.js';
import './google-e9085e27.js';
import './utils-f84b2118.js';
import './util-dfbf863e.js';
import './index-c5a96d53.js';
import './add-query-args-0e2a8393.js';
import './fetch-cdff67be.js';
import './index-824c562b.js';
import './remove-query-args-938c53ea.js';
import './mutations-7458343f.js';

const scUpsellCss = ":host{display:block}.confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}";
const ScUpsellStyle0 = scUpsellCss;

const ScUpsell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackOffer();
        preview();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const manualPaymentMethod = (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        return (h(Host, { key: '1feeb596433d726d63270185da07147edbe176bf' }, h("slot", { key: '608c578c002d6110330b5a35abfd02f881312597' }), isBusy() && h("sc-block-ui", { key: '1ccc19bf67f8d75ef28458dca3b822efb7de139b', style: { 'z-index': '30', '--sc-block-ui-position': 'fixed' } }), h("sc-dialog", { key: 'e981a4d81227e05733867672e963823c31085e37', open: state.loading === 'complete', style: { '--body-spacing': 'var(--sc-spacing-xxx-large)' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, h("div", { key: '4bf2098a19b643fc4def3dbcdb2af8ce4c3d5f86', class: "confirm__icon" }, h("div", { key: '63bae6940fafb5174ba5c4d7598b3bb2e283ca73', class: "confirm__icon-container" }, h("sc-icon", { key: '10cfc2b97369c5a86b0424c8bc518dee044bd967', name: "check" }))), h("sc-dashboard-module", { key: '2637af85cdcb7d8b8ba1c049e336a6dcaa000fb5', heading: ((_c = (_b = state === null || state === void 0 ? void 0 : state.text) === null || _b === void 0 ? void 0 : _b.success) === null || _c === void 0 ? void 0 : _c.title) || wp.i18n.__('Thank you!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, h("span", { key: 'f96732f4eb36344e38ac05cafa9bde7a5edd8a71', slot: "description" }, ((_e = (_d = state === null || state === void 0 ? void 0 : state.text) === null || _d === void 0 ? void 0 : _d.success) === null || _e === void 0 ? void 0 : _e.description) || wp.i18n.__('Your purchase was successful. A receipt is on its way to your inbox.', 'surecart')), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (h("sc-alert", { key: '16d04726310a1497245adff3532f26706a2d6d8e', type: "info", open: true, style: { 'text-align': 'left' } }, h("span", { key: '7755e292059e830e38a856d848cab863b2129595', slot: "title" }, manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name), h("div", { key: '983d1b8c3e79d6c387473b84217e3b2886fb7cbf', innerHTML: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions }))), h("sc-button", { key: 'bb2eb1b40154a8cf0b20fa499ce50d35094eff31', href: (_g = (_f = window === null || window === void 0 ? void 0 : window.scData) === null || _f === void 0 ? void 0 : _f.pages) === null || _g === void 0 ? void 0 : _g.dashboard, size: "large", type: "primary", autofocus: true }, ((_j = (_h = state === null || state === void 0 ? void 0 : state.text) === null || _h === void 0 ? void 0 : _h.success) === null || _j === void 0 ? void 0 : _j.button) || wp.i18n.__('Continue', 'surecart'), h("sc-icon", { key: '8ec97a67c191a466cd7396a439174686effa5bc5', name: "arrow-right", slot: "suffix" }))))));
    }
};
ScUpsell.style = ScUpsellStyle0;

export { ScUpsell as sc_upsell };

//# sourceMappingURL=sc-upsell.entry.js.map