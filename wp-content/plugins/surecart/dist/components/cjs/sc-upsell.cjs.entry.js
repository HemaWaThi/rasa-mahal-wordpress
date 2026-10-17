'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
require('./watchers-08c6f04b.js');
const store = require('./store-401bdb4d.js');
const getters = require('./getters-bc65a40b.js');
const mutations = require('./mutations-463da571.js');
require('./watchers-b5cd03f1.js');
require('./index-c3de642f.js');
require('./google-5d965da2.js');
require('./currency-71fce0f0.js');
require('./google-8dbad1a6.js');
require('./utils-a9d13080.js');
require('./util-a15c420c.js');
require('./index-fb76df07.js');
require('./add-query-args-49dcb630.js');
require('./fetch-5e8dc1d5.js');
require('./index-7ced8198.js');
require('./remove-query-args-b57e8cd3.js');
require('./mutations-d5d6ddf1.js');

const scUpsellCss = ":host{display:block}.confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}";
const ScUpsellStyle0 = scUpsellCss;

const ScUpsell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        mutations.trackOffer();
        mutations.preview();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const manualPaymentMethod = (_a = store.state.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        return (index.h(index.Host, { key: '1feeb596433d726d63270185da07147edbe176bf' }, index.h("slot", { key: '608c578c002d6110330b5a35abfd02f881312597' }), getters.isBusy() && index.h("sc-block-ui", { key: '1ccc19bf67f8d75ef28458dca3b822efb7de139b', style: { 'z-index': '30', '--sc-block-ui-position': 'fixed' } }), index.h("sc-dialog", { key: 'e981a4d81227e05733867672e963823c31085e37', open: store.state.loading === 'complete', style: { '--body-spacing': 'var(--sc-spacing-xxx-large)' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, index.h("div", { key: '4bf2098a19b643fc4def3dbcdb2af8ce4c3d5f86', class: "confirm__icon" }, index.h("div", { key: '63bae6940fafb5174ba5c4d7598b3bb2e283ca73', class: "confirm__icon-container" }, index.h("sc-icon", { key: '10cfc2b97369c5a86b0424c8bc518dee044bd967', name: "check" }))), index.h("sc-dashboard-module", { key: '2637af85cdcb7d8b8ba1c049e336a6dcaa000fb5', heading: ((_c = (_b = store.state === null || store.state === void 0 ? void 0 : store.state.text) === null || _b === void 0 ? void 0 : _b.success) === null || _c === void 0 ? void 0 : _c.title) || wp.i18n.__('Thank you!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, index.h("span", { key: 'f96732f4eb36344e38ac05cafa9bde7a5edd8a71', slot: "description" }, ((_e = (_d = store.state === null || store.state === void 0 ? void 0 : store.state.text) === null || _d === void 0 ? void 0 : _d.success) === null || _e === void 0 ? void 0 : _e.description) || wp.i18n.__('Your purchase was successful. A receipt is on its way to your inbox.', 'surecart')), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (index.h("sc-alert", { key: '16d04726310a1497245adff3532f26706a2d6d8e', type: "info", open: true, style: { 'text-align': 'left' } }, index.h("span", { key: '7755e292059e830e38a856d848cab863b2129595', slot: "title" }, manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name), index.h("div", { key: '983d1b8c3e79d6c387473b84217e3b2886fb7cbf', innerHTML: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions }))), index.h("sc-button", { key: 'bb2eb1b40154a8cf0b20fa499ce50d35094eff31', href: (_g = (_f = window === null || window === void 0 ? void 0 : window.scData) === null || _f === void 0 ? void 0 : _f.pages) === null || _g === void 0 ? void 0 : _g.dashboard, size: "large", type: "primary", autofocus: true }, ((_j = (_h = store.state === null || store.state === void 0 ? void 0 : store.state.text) === null || _h === void 0 ? void 0 : _h.success) === null || _j === void 0 ? void 0 : _j.button) || wp.i18n.__('Continue', 'surecart'), index.h("sc-icon", { key: '8ec97a67c191a466cd7396a439174686effa5bc5', name: "arrow-right", slot: "suffix" }))))));
    }
};
ScUpsell.style = ScUpsellStyle0;

exports.sc_upsell = ScUpsell;

//# sourceMappingURL=sc-upsell.cjs.entry.js.map