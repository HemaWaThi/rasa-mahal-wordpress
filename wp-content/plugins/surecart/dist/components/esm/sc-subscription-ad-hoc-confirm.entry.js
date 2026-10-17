import { r as registerInstance, h } from './index-25e5af33.js';
import { i as intervalString } from './price-1ff6aa07.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './currency-a0c9bff4.js';

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.currencyCode = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (h("sc-dashboard-module", { key: 'da83e00c7cd3bf2ee128f8a93a4529c055492c25', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, h("sc-card", { key: '5bebb597b231cfb2902b414cc85e6d5ac10d37bf' }, h("sc-form", { key: '7fcc7104b0df71156d9b2e154098e4619cf0d39d', onScSubmit: e => this.handleSubmit(e) }, h("sc-price-input", { key: '0a9ac97efa255d8ab6f3ad05343814681a63a4d5', label: "Amount", name: "ad_hoc_amount", currencyCode: this.currencyCode, autofocus: true, required: true }, h("span", { key: 'f6508d8acb67b8a76d3c472194eb51cb3a816618', slot: "suffix", style: { opacity: '0.75' } }, intervalString(this.price))), h("sc-button", { key: '1aca8cefb2c5bb70455fba2d7c196760be563c6e', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", h("sc-icon", { key: 'f1f747f9b880d98cc95692d7cc6a659d6e3422c9', name: "arrow-right", slot: "suffix" })))), this.busy && h("sc-block-ui", { key: '469340f496da0a5bb3cdfad2678cc4a0885b0a0a', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

export { ScSubscriptionAdHocConfirm as sc_subscription_ad_hoc_confirm };

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.entry.js.map