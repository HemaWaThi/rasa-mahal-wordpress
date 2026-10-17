'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const watchers = require('./watchers-b5cd03f1.js');
const quantity = require('./quantity-aa458329.js');
require('./index-c3de642f.js');
require('./google-5d965da2.js');
require('./currency-71fce0f0.js');
require('./google-8dbad1a6.js');
require('./utils-a9d13080.js');
require('./util-a15c420c.js');
require('./index-fb76df07.js');

const scProductQuantityCss = ":host{display:block}";
const ScProductQuantityStyle0 = scProductQuantityCss;

let id = 0;
const ScProductQuantity = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.inputId = `sc-quantity-${++id}`;
        this.helpId = `sc-quantity-help-text-${id}`;
        this.labelId = `sc-quantity-label-${id}`;
        this.size = 'medium';
        this.name = undefined;
        this.errors = undefined;
        this.showLabel = true;
        this.label = undefined;
        this.required = false;
        this.help = undefined;
        this.productId = undefined;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        const maxStockQuantity = quantity.getMaxStockQuantity((_a = watchers.state[this.productId]) === null || _a === void 0 ? void 0 : _a.product, (_b = watchers.state[this.productId]) === null || _b === void 0 ? void 0 : _b.selectedVariant);
        return (index.h(index.Host, { key: 'ff2a3774633b638c6b7403ba90521e336b9fac81' }, index.h("sc-form-control", { key: '383769eb55826dbacda14146846f338de6a0ce12', exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, index.h("sc-quantity-select", { key: '04d4cc59b21b59ae57839d7aa025f6d4b86349c9', size: this.size, quantity: Math.max(((_d = (_c = watchers.state[this.productId]) === null || _c === void 0 ? void 0 : _c.selectedPrice) === null || _d === void 0 ? void 0 : _d.ad_hoc) ? 1 : (_e = watchers.state[this.productId]) === null || _e === void 0 ? void 0 : _e.quantity, 1), disabled: (_g = (_f = watchers.state[this.productId]) === null || _f === void 0 ? void 0 : _f.selectedPrice) === null || _g === void 0 ? void 0 : _g.ad_hoc, onScInput: e => watchers.setProduct(this.productId, { quantity: e.detail }), ...(!!maxStockQuantity ? { max: maxStockQuantity } : {}) }))));
    }
};
ScProductQuantity.style = ScProductQuantityStyle0;

exports.sc_product_quantity = ScProductQuantity;

//# sourceMappingURL=sc-product-quantity.cjs.entry.js.map