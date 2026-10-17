'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const pageAlign = require('./page-align-5a2ab493.js');

const scLineItemCss = ":host{display:block;--mobile-size:380px;--price-size:var(--sc-font-size-medium);--line-item-grid-template-columns:auto 1fr 1fr;line-height:var(--sc-line-height-dense)}.item{display:grid;align-items:center;grid-template-columns:var(--line-item-grid-template-columns)}@media screen and (min-width: var(--mobile-size)){.item{flex-wrap:no-wrap}}.item__title{color:var(--sc-line-item-title-color)}.item__price{color:var(--sc-input-label-color)}.item__title,.item__price{font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-semibold)}.item__description,.item__price-description{font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color)}::slotted([slot=price-description]){margin-top:var(--sc-line-item-text-margin, 5px);color:var(--sc-input-label-color);text-decoration:none}.item__end{flex:1;display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;align-self:flex-end;width:100%;margin-top:20px}@media screen and (min-width: 280px){.item__end{width:auto;text-align:right;margin-left:20px;margin-top:0}.item--is-rtl .item__end{margin-left:0;margin-right:20px}.item__price-text{text-align:right;display:flex;flex-direction:column;align-items:flex-end}}.item__price-currency{font-size:var(--sc-font-size-small);color:var(--sc-input-label-color);text-transform:var(--sc-currency-transform, uppercase);margin-right:8px}.item__text{flex:1}.item__price-description{display:-webkit-box}::slotted([slot=image]){margin-right:20px;width:50px;height:50px;object-fit:cover;border-radius:4px;border:1px solid var(--sc-color-gray-200);display:block;box-shadow:var(--sc-input-box-shadow)}::slotted([slot=price-description]){display:inline-block;width:100%;line-height:1}.item__price-layout{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-semibold);display:flex;align-items:center}.item__price{font-size:var(--price-size)}.item_currency{font-weight:var(--sc-font-weight-normal);font-size:var(--sc-font-size-xx-small);color:var(--sc-input-label-color);margin-right:var(--sc-spacing-small);text-transform:var(--sc-currency-text-transform, uppercase)}.item--is-rtl.item__description,.item--is-rtl.item__price-description{text-align:right}.item--is-rtl .item__text{text-align:right}@media screen and (min-width: 280px){.item--is-rtl .item__end{width:auto;text-align:left;margin-left:0;margin-top:0}.item--is-rtl .item__price-text{text-align:left}}";
const ScLineItemStyle0 = scLineItemCss;

const ScLineItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.price = undefined;
        this.currency = undefined;
        this.hasImageSlot = undefined;
        this.hasTitleSlot = undefined;
        this.hasDescriptionSlot = undefined;
        this.hasPriceSlot = undefined;
        this.hasPriceDescriptionSlot = undefined;
        this.hasCurrencySlot = undefined;
    }
    componentWillLoad() {
        this.hasImageSlot = !!this.hostElement.querySelector('[slot="image"]');
        this.hasTitleSlot = !!this.hostElement.querySelector('[slot="title"]');
        this.hasDescriptionSlot = !!this.hostElement.querySelector('[slot="description"]');
        this.hasPriceSlot = !!this.hostElement.querySelector('[slot="price"]');
        this.hasPriceDescriptionSlot = !!this.hostElement.querySelector('[slot="price-description"]');
        this.hasCurrencySlot = !!this.hostElement.querySelector('[slot="currency"]');
    }
    render() {
        return (index.h("div", { key: '104c1c1d3b050628edb9647e0033b77d4322b89a', part: "base", class: {
                'item': true,
                'item--has-image': this.hasImageSlot,
                'item--has-title': this.hasTitleSlot,
                'item--has-description': this.hasDescriptionSlot,
                'item--has-price': this.hasPriceSlot,
                'item--has-price-description': this.hasPriceDescriptionSlot,
                'item--has-price-currency': this.hasCurrencySlot,
                'item--is-rtl': pageAlign.isRtl(),
            } }, index.h("div", { key: '7c72d4706b23066082fecb7310a401a21ddd74ca', class: "item__image", part: "image" }, index.h("slot", { key: '76cceebc566d51fa70e82c67d4adcb60b48b73f4', name: "image" })), index.h("div", { key: '23b7a937508c407a9a1efe9ed73a822ec23bed45', class: "item__text", part: "text" }, index.h("div", { key: '62746c3e5d156b9b0cddbfec991931034b2b8682', class: "item__title", part: "title" }, index.h("slot", { key: '48aa8e729f152c1e54bcd409f02b508a9ab19113', name: "title" })), index.h("div", { key: 'c97a4a132811255a222a5b84f12aa1441298ec8c', class: "item__description", part: "description" }, index.h("slot", { key: '7b20d2e5fcda44e794b1ef79750d1fac268dbfff', name: "description" }))), index.h("div", { key: '16ca774ae64ff85186323ff3938045a00e1d49f1', class: "item__end", part: "price" }, index.h("div", { key: '62e8273d37e78e89d2f1f16750adafad1cd70026', class: "item__price-currency", part: "currency" }, index.h("slot", { key: '5744ecfe2b11ce5c8c113de7645d04c75d191d27', name: "currency" })), index.h("div", { key: '59b7934b5023abb18d655e0fa275c6ba07f8ba2c', class: "item__price-text", part: "price-text" }, index.h("div", { key: '673c6188feddee5b1f73a8d3823188c4c65e69ca', class: "item__price", part: "price" }, index.h("slot", { key: '6f246141467bee4dda3a09c8b21024aa3e178c7b', name: "price" })), index.h("div", { key: '3c2a2fbdb16ac06e8150c8729f6b1c880d03eeda', class: "item__price-description", part: "price-description" }, index.h("slot", { key: '80a8c2fe8e67f419443b8ac34f10c10609451bcc', name: "price-description" }))))));
    }
    get hostElement() { return index.getElement(this); }
};
ScLineItem.style = ScLineItemStyle0;

exports.sc_line_item = ScLineItem;

//# sourceMappingURL=sc-line-item.cjs.entry.js.map