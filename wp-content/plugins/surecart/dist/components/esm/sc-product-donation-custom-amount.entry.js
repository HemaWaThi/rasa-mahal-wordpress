import { r as registerInstance, h, H as Host, a as getElement } from './index-25e5af33.js';
import { s as state } from './watchers-df374a91.js';
import './index-18f5a1bc.js';
import './utils-f84b2118.js';
import './getters-7090a9c1.js';
import './mutations-9ffd30f4.js';
import './remove-query-args-938c53ea.js';
import './add-query-args-0e2a8393.js';
import './index-c5a96d53.js';
import './google-e9085e27.js';
import './currency-a0c9bff4.js';
import './store-b1758b00.js';
import './price-1ff6aa07.js';
import './store-ac90a769.js';
import './address-b8e2e4c8.js';
import './util-dfbf863e.js';
import './mutations-ae7167ad.js';
import './mutations-7458343f.js';
import './index-a786f689.js';
import './fetch-cdff67be.js';
import './index-824c562b.js';

const scProductDonationCustomAmountCss = "sc-product-donation-custom-amount sc-price-input sc-button{margin-right:-10px !important}.sc-product-donation-custom-amount sc-button{opacity:0;visibility:hidden;transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}.sc-product-donation-custom-amount--has-value sc-button{opacity:1;visibility:visible}";
const ScProductDonationCustomAmountStyle0 = scProductDonationCustomAmountCss;

const ScProductDonationCustomAmount = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.productId = undefined;
        this.value = undefined;
    }
    state() {
        return state[this.productId];
    }
    updateState(data) {
        state[this.productId] = {
            ...state[this.productId],
            ...data,
        };
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const checked = !!((_a = this.state()) === null || _a === void 0 ? void 0 : _a.custom_amount);
        return (h(Host, { key: '015a29b7e1b5527e24acfe6e4364c4a27257aee5', class: { 'sc-product-donation-custom-amount': true, 'sc-product-donation-custom-amount--has-value': !!this.value } }, h("sc-choice-container", { key: 'f674a889e7f90d4a7fc98c0165c65ae93b03902e', value: `${(_b = this.state()) === null || _b === void 0 ? void 0 : _b.custom_amount}`, "show-control": "false", checked: checked, onClick: () => this.priceInput.triggerFocus(), onKeyDown: () => {
                this.priceInput.triggerFocus();
            }, role: "button" }, h("sc-visually-hidden", { key: '2af6694f96eb5e490b076522b7f50561bd667271' }, wp.i18n.__('Enter a custom amount.', 'surecart')), h("sc-price-input", { key: '0a22f2caa43754ae4d3f65e28a2310fb7be506bb', ref: el => (this.priceInput = el), currencyCode: ((_d = (_c = this.state()) === null || _c === void 0 ? void 0 : _c.selectedPrice) === null || _d === void 0 ? void 0 : _d.currency) || ((_e = window === null || window === void 0 ? void 0 : window.scData) === null || _e === void 0 ? void 0 : _e.currency) || 'usd', showCode: false, showLabel: false, value: `${((_f = this.state()) === null || _f === void 0 ? void 0 : _f.custom_amount) || ''}`, onScChange: e => this.updateState({
                ad_hoc_amount: null,
                custom_amount: e.target.value,
            }), min: (_h = (_g = this.state()) === null || _g === void 0 ? void 0 : _g.selectedPrice) === null || _h === void 0 ? void 0 : _h.ad_hoc_min_amount, max: (_k = (_j = this.state()) === null || _j === void 0 ? void 0 : _j.selectedPrice) === null || _k === void 0 ? void 0 : _k.ad_hoc_max_amount, style: { '--sc-input-border-color-focus': 'var(--sc-input-border-color-hover)', '--sc-focus-ring-color-primary': 'transparent' } }))));
    }
    get el() { return getElement(this); }
};
ScProductDonationCustomAmount.style = ScProductDonationCustomAmountStyle0;

export { ScProductDonationCustomAmount as sc_product_donation_custom_amount };

//# sourceMappingURL=sc-product-donation-custom-amount.entry.js.map