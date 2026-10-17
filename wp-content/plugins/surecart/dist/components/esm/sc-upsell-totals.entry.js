import { r as registerInstance, h, F as Fragment } from './index-25e5af33.js';
import './watchers-2d9a1422.js';
import { s as state } from './store-289e460c.js';
import './watchers-81f32d01.js';
import './index-18f5a1bc.js';
import './google-52867ad8.js';
import './currency-a0c9bff4.js';
import './google-e9085e27.js';
import './utils-f84b2118.js';
import './util-dfbf863e.js';
import './index-c5a96d53.js';
import './getters-1477d792.js';
import './mutations-b310b068.js';
import './fetch-cdff67be.js';
import './index-824c562b.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './mutations-7458343f.js';

const scUpsellTotalsCss = ":host{display:block}sc-divider{margin:16px 0 !important}.conversion-description{color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small);margin-right:var(--sc-spacing-xx-small)}";
const ScUpsellTotalsStyle0 = scUpsellTotalsCss;

const ScUpsellTotals = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    renderAmountDue() {
        var _a, _b;
        return state.amount_due > 0 ? (_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.total_display_amount : !!((_b = state === null || state === void 0 ? void 0 : state.line_item) === null || _b === void 0 ? void 0 : _b.trial_amount) ? wp.i18n.__('Trial', 'surecart') : wp.i18n.__('Free', 'surecart');
    }
    // Determine if the currency should be displayed to avoid duplication in the amount display.
    getCurrencyToDisplay() {
        var _a, _b, _c, _d, _e, _f, _g;
        return ((_c = (_b = (_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.total_default_currency_display_amount) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === null || _c === void 0 ? void 0 : _c.includes((_e = (_d = state === null || state === void 0 ? void 0 : state.line_item) === null || _d === void 0 ? void 0 : _d.currency) === null || _e === void 0 ? void 0 : _e.toLowerCase()))
            ? ''
            : (_g = (_f = state === null || state === void 0 ? void 0 : state.line_item) === null || _f === void 0 ? void 0 : _f.currency) === null || _g === void 0 ? void 0 : _g.toUpperCase();
    }
    renderConversion() {
        var _a, _b, _c, _d, _e, _f;
        // need to check the checkout for a few things.
        const checkout = state === null || state === void 0 ? void 0 : state.checkout;
        if (!(checkout === null || checkout === void 0 ? void 0 : checkout.show_converted_total)) {
            return null;
        }
        // the currency is the same as the current currency.
        if ((checkout === null || checkout === void 0 ? void 0 : checkout.currency) === (checkout === null || checkout === void 0 ? void 0 : checkout.current_currency)) {
            return null;
        }
        // there is no amount due.
        if (!((_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.total_amount)) {
            return null;
        }
        return (h(Fragment, null, h("sc-divider", null), h("sc-line-item", { style: { '--price-size': 'var(--sc-font-size-x-large)' } }, h("span", { slot: "title" }, h("slot", { name: "charge-amount-description" }, wp.i18n.sprintf(wp.i18n.__('Payment Total', 'surecart'), (_c = (_b = state === null || state === void 0 ? void 0 : state.line_item) === null || _b === void 0 ? void 0 : _b.currency) === null || _c === void 0 ? void 0 : _c.toUpperCase()))), h("span", { slot: "price" }, this.getCurrencyToDisplay() && h("span", { class: "currency-label" }, this.getCurrencyToDisplay()), (_d = state === null || state === void 0 ? void 0 : state.line_item) === null || _d === void 0 ? void 0 :
            _d.total_default_currency_display_amount)), h("sc-line-item", null, h("span", { slot: "description", class: "conversion-description" }, wp.i18n.sprintf(wp.i18n.__('Your payment will be processed in %s.', 'surecart'), (_f = (_e = state === null || state === void 0 ? void 0 : state.line_item) === null || _e === void 0 ? void 0 : _e.currency) === null || _f === void 0 ? void 0 : _f.toUpperCase())))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("sc-summary", { key: '747b67d7ad42320d6adb06cc5ae4fe436fe4a235', "open-text": "Total", "closed-text": "Total", collapsible: true, collapsed: true }, !!((_a = state.line_item) === null || _a === void 0 ? void 0 : _a.id) && h("span", { key: '196450bc06fc13b019597a2a43f8f828451a6a48', slot: "price" }, this.renderAmountDue()), h("sc-divider", { key: '75928d2ebbcf0182a73d99bec267a037c74bb735' }), h("sc-line-item", { key: '85ecf7678ac9745cd476a5b5955de119d3d9ffbf' }, h("span", { key: '48b1d5f1e2531fd0063381daab4474d996c6adb2', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), h("span", { key: '9868f8f7e434781799d6efa348843ced7e688d08', slot: "price" }, (_b = state.line_item) === null || _b === void 0 ? void 0 : _b.subtotal_display_amount)), (((_d = (_c = state === null || state === void 0 ? void 0 : state.line_item) === null || _c === void 0 ? void 0 : _c.fees) === null || _d === void 0 ? void 0 : _d.data) || [])
            .filter(fee => fee.fee_type === 'upsell') // only upsell fees.
            .map(fee => {
            return (h("sc-line-item", null, h("span", { slot: "description" }, fee.description, " ", `(${wp.i18n.__('one time', 'surecart')})`), h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount)));
        }), !!((_e = state.line_item) === null || _e === void 0 ? void 0 : _e.tax_amount) && (h("sc-line-item", { key: 'd63bab2a8923f2ca489a06a9de404c212df04664' }, h("span", { key: 'ff98910f35dc395785b8143a5bcda2927c786146', slot: "description" }, wp.i18n.__('Tax', 'surecart')), h("span", { key: '74b6f6a9d2ddeb60c16b9cf0996732e1770e06e9', slot: "price" }, (_f = state.line_item) === null || _f === void 0 ? void 0 : _f.tax_display_amount))), h("sc-divider", { key: 'b2f92fd9d64201ce657af3f19453e08cc09388a3' }), h("sc-line-item", { key: 'b06804f6fea2d1a420ff84996f52fff18fe18ebe', style: { '--price-size': 'var(--sc-font-size-x-large)' } }, h("span", { key: 'fc7f52b8e713f67f465c962642a5053bcbe1b2bd', slot: "title" }, wp.i18n.__('Total', 'surecart')), h("span", { key: '257336b340f5c54be8b442af8653b5a7ce7b5f6a', slot: "price" }, (_g = state.line_item) === null || _g === void 0 ? void 0 : _g.total_display_amount)), this.renderConversion()));
    }
};
ScUpsellTotals.style = ScUpsellTotalsStyle0;

export { ScUpsellTotals as sc_upsell_totals };

//# sourceMappingURL=sc-upsell-totals.entry.js.map