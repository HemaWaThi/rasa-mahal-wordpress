'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const watchers = require('./watchers-a136c7bc.js');
require('./index-c3de642f.js');
require('./utils-a9d13080.js');
require('./getters-c3cd6c93.js');
require('./mutations-98f05402.js');
require('./remove-query-args-b57e8cd3.js');
require('./add-query-args-49dcb630.js');
require('./index-fb76df07.js');
require('./google-8dbad1a6.js');
require('./currency-71fce0f0.js');
require('./store-01e8edc2.js');
require('./price-da3cab3d.js');
require('./store-9c215436.js');
require('./address-7404695f.js');
require('./util-a15c420c.js');
require('./mutations-627c79a0.js');
require('./mutations-d5d6ddf1.js');
require('./index-c2d0eb49.js');
require('./fetch-5e8dc1d5.js');
require('./index-7ced8198.js');

const scProductDonationCustomAmountCss = "sc-product-donation-custom-amount sc-price-input sc-button{margin-right:-10px !important}.sc-product-donation-custom-amount sc-button{opacity:0;visibility:hidden;transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}.sc-product-donation-custom-amount--has-value sc-button{opacity:1;visibility:visible}";
const ScProductDonationCustomAmountStyle0 = scProductDonationCustomAmountCss;

const ScProductDonationCustomAmount = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.productId = undefined;
        this.value = undefined;
    }
    state() {
        return watchers.state[this.productId];
    }
    updateState(data) {
        watchers.state[this.productId] = {
            ...watchers.state[this.productId],
            ...data,
        };
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const checked = !!((_a = this.state()) === null || _a === void 0 ? void 0 : _a.custom_amount);
        return (index.h(index.Host, { key: '015a29b7e1b5527e24acfe6e4364c4a27257aee5', class: { 'sc-product-donation-custom-amount': true, 'sc-product-donation-custom-amount--has-value': !!this.value } }, index.h("sc-choice-container", { key: 'f674a889e7f90d4a7fc98c0165c65ae93b03902e', value: `${(_b = this.state()) === null || _b === void 0 ? void 0 : _b.custom_amount}`, "show-control": "false", checked: checked, onClick: () => this.priceInput.triggerFocus(), onKeyDown: () => {
                this.priceInput.triggerFocus();
            }, role: "button" }, index.h("sc-visually-hidden", { key: '2af6694f96eb5e490b076522b7f50561bd667271' }, wp.i18n.__('Enter a custom amount.', 'surecart')), index.h("sc-price-input", { key: '0a22f2caa43754ae4d3f65e28a2310fb7be506bb', ref: el => (this.priceInput = el), currencyCode: ((_d = (_c = this.state()) === null || _c === void 0 ? void 0 : _c.selectedPrice) === null || _d === void 0 ? void 0 : _d.currency) || ((_e = window === null || window === void 0 ? void 0 : window.scData) === null || _e === void 0 ? void 0 : _e.currency) || 'usd', showCode: false, showLabel: false, value: `${((_f = this.state()) === null || _f === void 0 ? void 0 : _f.custom_amount) || ''}`, onScChange: e => this.updateState({
                ad_hoc_amount: null,
                custom_amount: e.target.value,
            }), min: (_h = (_g = this.state()) === null || _g === void 0 ? void 0 : _g.selectedPrice) === null || _h === void 0 ? void 0 : _h.ad_hoc_min_amount, max: (_k = (_j = this.state()) === null || _j === void 0 ? void 0 : _j.selectedPrice) === null || _k === void 0 ? void 0 : _k.ad_hoc_max_amount, style: { '--sc-input-border-color-focus': 'var(--sc-input-border-color-hover)', '--sc-focus-ring-color-primary': 'transparent' } }))));
    }
    get el() { return index.getElement(this); }
};
ScProductDonationCustomAmount.style = ScProductDonationCustomAmountStyle0;

exports.sc_product_donation_custom_amount = ScProductDonationCustomAmount;

//# sourceMappingURL=sc-product-donation-custom-amount.cjs.entry.js.map