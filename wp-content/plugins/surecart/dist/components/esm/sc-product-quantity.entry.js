import { r as registerInstance, h, H as Host } from './index-25e5af33.js';
import { s as state, b as setProduct } from './watchers-81f32d01.js';
import { g as getMaxStockQuantity } from './quantity-5c986f3d.js';
import './index-18f5a1bc.js';
import './google-52867ad8.js';
import './currency-a0c9bff4.js';
import './google-e9085e27.js';
import './utils-f84b2118.js';
import './util-dfbf863e.js';
import './index-c5a96d53.js';

const scProductQuantityCss = ":host{display:block}";
const ScProductQuantityStyle0 = scProductQuantityCss;

let id = 0;
const ScProductQuantity = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const maxStockQuantity = getMaxStockQuantity((_a = state[this.productId]) === null || _a === void 0 ? void 0 : _a.product, (_b = state[this.productId]) === null || _b === void 0 ? void 0 : _b.selectedVariant);
        return (h(Host, { key: 'ff2a3774633b638c6b7403ba90521e336b9fac81' }, h("sc-form-control", { key: '383769eb55826dbacda14146846f338de6a0ce12', exportparts: "label, help-text, form-control", size: this.size, required: this.required, label: this.label, showLabel: this.showLabel, help: this.help, inputId: this.inputId, helpId: this.helpId, labelId: this.labelId, name: this.name }, h("sc-quantity-select", { key: '04d4cc59b21b59ae57839d7aa025f6d4b86349c9', size: this.size, quantity: Math.max(((_d = (_c = state[this.productId]) === null || _c === void 0 ? void 0 : _c.selectedPrice) === null || _d === void 0 ? void 0 : _d.ad_hoc) ? 1 : (_e = state[this.productId]) === null || _e === void 0 ? void 0 : _e.quantity, 1), disabled: (_g = (_f = state[this.productId]) === null || _f === void 0 ? void 0 : _f.selectedPrice) === null || _g === void 0 ? void 0 : _g.ad_hoc, onScInput: e => setProduct(this.productId, { quantity: e.detail }), ...(!!maxStockQuantity ? { max: maxStockQuantity } : {}) }))));
    }
};
ScProductQuantity.style = ScProductQuantityStyle0;

export { ScProductQuantity as sc_product_quantity };

//# sourceMappingURL=sc-product-quantity.entry.js.map