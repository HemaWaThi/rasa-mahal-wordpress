import { r as registerInstance, c as createEvent, h, F as Fragment, a as getElement } from './index-25e5af33.js';
import { b as getLineItemByPriceId } from './index-17aac936.js';
import { s as state } from './mutations-9ffd30f4.js';
import './index-18f5a1bc.js';
import './utils-f84b2118.js';
import './remove-query-args-938c53ea.js';
import './add-query-args-0e2a8393.js';
import './index-c5a96d53.js';
import './google-e9085e27.js';
import './currency-a0c9bff4.js';
import './store-b1758b00.js';
import './price-1ff6aa07.js';

const scPriceChoicesCss = "sc-price-choices{display:block;position:relative}sc-block-ui{z-index:9}";
const ScPriceChoicesStyle0 = scPriceChoicesCss;

const ScPriceChoices = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scRemoveLineItem = createEvent(this, "scRemoveLineItem", 7);
        this.scUpdateLineItem = createEvent(this, "scUpdateLineItem", 7);
        this.label = undefined;
        this.columns = 1;
        this.required = true;
    }
    handleChange() {
        this.el.querySelectorAll('sc-price-choice').forEach(priceChoice => {
            var _a;
            const choice = priceChoice.querySelector('sc-choice') || priceChoice.querySelector('sc-choice-container');
            if (!(choice === null || choice === void 0 ? void 0 : choice.checked)) {
                this.scRemoveLineItem.emit({ price_id: priceChoice.priceId, quantity: priceChoice.quantity });
            }
            else {
                const lineItem = getLineItemByPriceId((_a = state.checkout) === null || _a === void 0 ? void 0 : _a.line_items, choice.value);
                this.scUpdateLineItem.emit({ price_id: priceChoice.priceId, quantity: (lineItem === null || lineItem === void 0 ? void 0 : lineItem.quantity) || (priceChoice === null || priceChoice === void 0 ? void 0 : priceChoice.quantity) || 1 });
            }
        });
    }
    render() {
        return (h(Fragment, { key: '0777df0b6cf3730fc7ff8a21d7edb8282695a248' }, h("sc-choices", { key: 'b7f5c26e41ca1e3c084fc8b6b531923099d00c99', label: this.label, required: this.required, class: "loaded price-selector", style: { '--columns': this.columns.toString() } }, h("slot", { key: 'eb65ff447fc37c960cb74e92e34c22174707477a' }))));
    }
    get el() { return getElement(this); }
};
ScPriceChoices.style = ScPriceChoicesStyle0;

export { ScPriceChoices as sc_price_choices };

//# sourceMappingURL=sc-price-choices.entry.js.map