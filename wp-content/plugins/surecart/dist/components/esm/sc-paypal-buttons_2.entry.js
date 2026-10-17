import { r as registerInstance, c as createEvent, h, a as getElement } from './index-25e5af33.js';
import { l as loadScript, g as getScriptLoadParams } from './functions-4f009ce1.js';
import './fetch-cdff67be.js';
import { g as fetchCheckout } from './index-a786f689.js';
import { c as createErrorNotice } from './mutations-7458343f.js';
import { a as apiFetch } from './index-824c562b.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './mutations-9ffd30f4.js';
import './index-18f5a1bc.js';
import './utils-f84b2118.js';
import './index-c5a96d53.js';
import './google-e9085e27.js';
import './currency-a0c9bff4.js';
import './store-b1758b00.js';
import './price-1ff6aa07.js';

const paypalButtonsCss = ":host{display:block}.paypal-buttons{position:relative;line-height:0;text-align:center}.paypal-buttons:not(.paypal-buttons--busy):after{content:\" \";border-bottom:1px solid var(--sc-input-border-color);width:100%;height:0;top:50%;left:0;right:0;position:absolute}";
const ScPaypalButtonsStyle0 = paypalButtonsCss;

const ScPaypalButtons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scSetState = createEvent(this, "scSetState", 7);
        this.scPaid = createEvent(this, "scPaid", 7);
        this.clientId = undefined;
        this.busy = false;
        this.merchantId = undefined;
        this.merchantInitiated = undefined;
        this.mode = undefined;
        this.order = undefined;
        this.buttons = ['paypal', 'card'];
        this.label = 'paypal';
        this.color = 'gold';
        this.loaded = undefined;
    }
    handleOrderChange(val, prev) {
        if ((val === null || val === void 0 ? void 0 : val.updated_at) === (prev === null || prev === void 0 ? void 0 : prev.updated_at)) {
            return;
        }
        this.cardContainer.innerHTML = '';
        this.paypalContainer.innerHTML = '';
        this.loadScript();
    }
    /** Load the script */
    async loadScript() {
        var _a, _b, _c;
        if (!this.clientId || !this.merchantId)
            return;
        try {
            const paypal = await loadScript(getScriptLoadParams({
                clientId: this.clientId,
                merchantId: this.merchantId,
                merchantInitiated: this.merchantInitiated,
                reusable: (_a = this.order) === null || _a === void 0 ? void 0 : _a.reusable_payment_method_required,
                currency: (_b = this.order) === null || _b === void 0 ? void 0 : _b.currency,
                locale: (_c = window.scData) === null || _c === void 0 ? void 0 : _c.locale,
            }));
            this.renderButtons(paypal);
        }
        catch (err) {
            console.error('failed to load the PayPal JS SDK script', err);
        }
    }
    /** Load the script on component load. */
    componentDidLoad() {
        this.loadScript();
    }
    /** Render the buttons. */
    renderButtons(paypal) {
        const createFunc = this.order.reusable_payment_method_required ? 'createBillingAgreement' : 'createOrder';
        const config = {
            /**
             * Validate the form, client-side when the button is clicked.
             */
            onClick: async (_, actions) => {
                const form = this.el.closest('sc-checkout');
                const isValid = await form.validate();
                return isValid ? actions.resolve() : actions.reject();
            },
            onInit: () => {
                this.loaded = true;
            },
            onCancel: () => {
                this.scSetState.emit('REJECT');
            },
            /**
             * The transaction has been approved.
             * We can capture it.
             */
            onApprove: async () => {
                var _a, _b, _c, _d;
                try {
                    this.order = (await fetchCheckout({ id: (_a = this.order) === null || _a === void 0 ? void 0 : _a.id }));
                }
                catch (e) {
                    console.error(e);
                    createErrorNotice({ code: 'could_not_capture', message: wp.i18n.__('The payment did not process. Please try again.', 'surecart') });
                    this.scSetState.emit('REJECT');
                }
                try {
                    this.scSetState.emit('PAYING');
                    const intent = (await apiFetch({
                        method: 'PATCH',
                        path: `surecart/v1/payment_intents/${((_c = (_b = this.order) === null || _b === void 0 ? void 0 : _b.payment_intent) === null || _c === void 0 ? void 0 : _c.id) || ((_d = this.order) === null || _d === void 0 ? void 0 : _d.payment_intent)}/capture`,
                    }));
                    if (['succeeded', 'processing'].includes(intent === null || intent === void 0 ? void 0 : intent.status)) {
                        this.scSetState.emit('PAID');
                        this.scPaid.emit();
                    }
                    else {
                        createErrorNotice({ code: 'could_not_capture', message: wp.i18n.__('Payment processing failed. Kindly attempt the transaction once more.', 'surecart') });
                        this.scSetState.emit('REJECT');
                    }
                }
                catch (err) {
                    console.error(err);
                    createErrorNotice({ code: 'could_not_capture', message: wp.i18n.__('Payment processing failed. Kindly attempt the transaction once more.', 'surecart') });
                    this.scSetState.emit('REJECT');
                }
            },
            /**
             * Transaction errored.
             * @param err
             */
            onError: err => {
                console.error(err);
                createErrorNotice(err);
                this.scSetState.emit('REJECT');
            },
        };
        config[createFunc] = async () => {
            return new Promise(async (resolve, reject) => {
                var _a, _b;
                // get the checkout component.
                const checkout = this.el.closest('sc-checkout');
                // submit and get the finalized order
                const order = (await checkout.submit());
                // an error occurred. reject with the error.
                if (order instanceof Error) {
                    return reject(order);
                }
                // assume there was a validation issue here.
                // that is handled by our fetch function.
                if ((order === null || order === void 0 ? void 0 : order.status) !== 'finalized') {
                    return reject(new Error('Something went wrong. Please try again.'));
                }
                // resolve the payment intent id.
                if ((_a = order === null || order === void 0 ? void 0 : order.payment_intent) === null || _a === void 0 ? void 0 : _a.external_intent_id) {
                    return resolve((_b = order === null || order === void 0 ? void 0 : order.payment_intent) === null || _b === void 0 ? void 0 : _b.external_intent_id);
                }
                // we don't have the correct payment intent for some reason.
                createErrorNotice({ code: 'missing_payment_intent', message: wp.i18n.__('Something went wrong. Please contact us for payment.', 'surecart') });
                return reject();
            });
        };
        if (paypal.FUNDING.PAYPAL) {
            const paypalButton = paypal.Buttons({
                fundingSource: paypal.FUNDING.PAYPAL,
                style: {
                    label: this.label,
                    color: this.color,
                },
                ...config,
            });
            if (paypalButton.isEligible()) {
                paypalButton.render(this.paypalContainer);
            }
        }
        if (paypal.FUNDING.CARD) {
            const cardButton = paypal.Buttons({
                fundingSource: paypal.FUNDING.CARD,
                style: {
                    color: 'black',
                },
                ...config,
            });
            if (cardButton.isEligible()) {
                cardButton.render(this.cardContainer);
            }
        }
    }
    render() {
        return (h("div", { key: 'aa9f35be95907fdb4a81cd100bc2b7bfea61e36d', part: `base ${this.busy || (!this.loaded && 'base--busy')}`, class: { 'paypal-buttons': true, 'paypal-buttons--busy': this.busy || !this.loaded } }, (!this.loaded || this.busy) && h("sc-skeleton", { key: '33d621f25ffe2b9cdc9ad0718082c18f0b35e178', style: { 'height': '55px', '--border-radius': '4px', 'cursor': 'wait' } }), h("div", { key: 'c0f9dfbfda3e1a461ae4c77544a443fb76a47664', class: "sc-paypal-button-container", hidden: !this.loaded || this.busy }, h("div", { key: 'b081f2f9b8c4fa8a86fd5a1c8ebfc1b3fddf3287', part: "paypal-card-button", hidden: !this.buttons.includes('card'), class: "sc-paypal-card-button", ref: el => (this.cardContainer = el) }), h("div", { key: '28ed4cf0b8f36f0be7b4a167c6f577eaea8e5f63', part: "paypal-button", hidden: !this.buttons.includes('paypal'), class: "sc-paypal-button", ref: el => (this.paypalContainer = el) }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "order": ["handleOrderChange"]
    }; }
};
ScPaypalButtons.style = ScPaypalButtonsStyle0;

const scSecureNoticeCss = ":host{display:block;--sc-secure-notice-icon-color:var(--sc-color-gray-300);--sc-secure-notice-font-size:var(--sc-font-size-small);--sc-secure-notice-color:var(--sc-color-gray-500)}.notice{color:var(--sc-secure-notice-color);font-size:var(--sc-secure-notice-font-size);display:flex;align-items:center;gap:5px}.notice__text{flex:1;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.notice__icon{color:var(--sc-secure-notice-icon-color);margin-right:5px}";
const ScSecureNoticeStyle0 = scSecureNoticeCss;

const ScSecureNotice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'ae73fd89aad081ab32ba575f9e9116226cbcf855', class: "notice", part: "base" }, h("svg", { key: '34b1bd815392d7d9b6aae77574f6a2575b4c55ef', class: "notice__icon", part: "icon", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 512 512", fill: "currentColor" }, h("path", { key: '7d3085568edf591f6fb6e43aeebd78aa8a82379a', d: "M368,192H352V112a96,96,0,1,0-192,0v80H144a64.07,64.07,0,0,0-64,64V432a64.07,64.07,0,0,0,64,64H368a64.07,64.07,0,0,0,64-64V256A64.07,64.07,0,0,0,368,192Zm-48,0H192V112a64,64,0,1,1,128,0Z" })), h("span", { key: '32127abd73cbd43f720161ee8d789377019969cb', class: "notice__text", part: "text" }, h("slot", { key: 'e05ebd2f3a873185072cb40577f4bcf4e4e6716f', name: "prefix" }), h("slot", { key: 'cf1333caa00bdc4402e1efa96f0cecb8fa905c4a' }), h("slot", { key: 'dcbc649f7f642a189afbc54064a8ceb5de914d2e', name: "suffix" }))));
    }
};
ScSecureNotice.style = ScSecureNoticeStyle0;

export { ScPaypalButtons as sc_paypal_buttons, ScSecureNotice as sc_secure_notice };

//# sourceMappingURL=sc-paypal-buttons_2.entry.js.map