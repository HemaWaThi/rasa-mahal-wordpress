import { r as registerInstance, h, a as getElement } from './index-25e5af33.js';
import { s as state } from './watchers-c7bbc6b2.js';
import './index-18f5a1bc.js';

const scPaymentMethodChoiceCss = ":host{display:block}:slotted([slot=\"summary\"]){line-height:1;display:flex;align-items:center;gap:0.5em}";
const ScPaymentMethodChoiceStyle0 = scPaymentMethodChoiceCss;

const ScPaymentMethodChoice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.methodId = undefined;
        this.processorId = undefined;
        this.isManual = undefined;
        this.card = undefined;
    }
    isSelected() {
        if (this.methodId) {
            return (state === null || state === void 0 ? void 0 : state.id) === this.processorId && (state === null || state === void 0 ? void 0 : state.method) == this.methodId;
        }
        return !(state === null || state === void 0 ? void 0 : state.method) && (state === null || state === void 0 ? void 0 : state.id) === this.processorId;
    }
    getAllOptions() {
        const parentGroup = this.el.closest('sc-payment') || this.el.parentElement;
        if (!parentGroup) {
            return [];
        }
        return [...parentGroup.querySelectorAll(this.el.tagName)];
    }
    getSiblingItems() {
        return this.getAllOptions().filter(choice => choice !== this.el);
    }
    hasOthers() {
        var _a;
        return !!((_a = this.getSiblingItems()) === null || _a === void 0 ? void 0 : _a.length);
    }
    render() {
        const Tag = this.hasOthers() ? 'sc-toggle' : 'div';
        return (h(Tag, { key: '72fbfc1164fe8268f787641961d2ece3bc7a1675', "show-control": true, borderless: true, open: this.isSelected(), onScShow: () => {
                state.id = this.processorId;
                state.manual = !!this.isManual;
                state.method = this.methodId;
            } }, this.hasOthers() && h("slot", { key: 'ab0269d6b1115b0d44fc29ab121796e824cd1195', name: "summary", slot: "summary" }), this.card && !this.hasOthers() ? (h("sc-card", null, h("slot", null))) : (h("slot", null))));
    }
    get el() { return getElement(this); }
};
ScPaymentMethodChoice.style = ScPaymentMethodChoiceStyle0;

const scPaymentSelectedCss = ":host{display:block}::slotted([slot=icon]){display:block;font-size:24px}.payment-selected{display:flex;flex-direction:column;gap:var(--sc-spacing-x-small)}.payment-selected__label{color:var(--sc-input-label-color);line-height:var(--sc-line-height-dense);font-size:var(--sc-font-size-medium)}.payment-selected__instructions{display:flex;justify-content:flex-start;align-items:center;gap:1em}.payment-selected__instructions svg{width:42px;height:42px;flex-shrink:0}.payment-selected__instructions-text{color:var(--sc-input-label-color);font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense)}";
const ScPaymentSelectedStyle0 = scPaymentSelectedCss;

const ScPaymentSelected = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconName = undefined;
        this.label = undefined;
    }
    render() {
        return (h("div", { key: '7ddd74e550b999fa8494c45ca290278c0b47d364', class: "payment-selected", part: "base" }, h("slot", { key: 'f422358779e84de6c05f03992c500d04aebd5079', name: "icon" }), h("div", { key: '17e66ceea20b2ac684c003cd6107304bfd54e337', class: "payment-selected__label" }, this.label), h("sc-divider", { key: '0832cbf39628ca901b543c540530cd938df12a1f', style: { '--spacing': 'var(--sc-spacing-xx-small)' }, exportparts: "base:divider, line:divider__line" }), h("div", { key: '68a34af48ef32a2730697f7d0b8401154d5cdf3c', part: "instructions", class: "payment-selected__instructions" }, h("svg", { key: 'fa68d360ca7f65d2adc55242c2c3b2427adf948d', part: "icon", viewBox: "0 0 48 40", fill: "var(--sc-color-gray-500)", xmlns: "http://www.w3.org/2000/svg", role: "presentation" }, h("path", { key: '13157804814f3bf6cab78451088623673008d2fa', opacity: ".6", "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M43 5a4 4 0 00-4-4H17a4 4 0 00-4 4v11a1 1 0 102 0V5a2 2 0 012-2h22a2 2 0 012 2v30a2 2 0 01-2 2H17a2 2 0 01-2-2v-9a1 1 0 10-2 0v9a4 4 0 004 4h22a4 4 0 004-4V5zM17.992 16.409L21.583 20H6a1 1 0 100 2h15.583l-3.591 3.591a1 1 0 101.415 1.416l5.3-5.3a1 1 0 000-1.414l-5.3-5.3a1 1 0 10-1.415 1.416zM17 6a1 1 0 011-1h15a1 1 0 011 1v2a1 1 0 01-1 1H18a1 1 0 01-1-1V6zm21-1a1 1 0 100 2 1 1 0 000-2z" })), h("div", { key: 'dde2c37b23d6194a485dbd40b3d98ab89170b10d', part: "text", class: "payment-selected__instructions-text" }, h("slot", { key: '83f0dda573eecb19662276f664bc233a07c90327' })))));
    }
};
ScPaymentSelected.style = ScPaymentSelectedStyle0;

export { ScPaymentMethodChoice as sc_payment_method_choice, ScPaymentSelected as sc_payment_selected };

//# sourceMappingURL=sc-payment-method-choice_2.entry.js.map