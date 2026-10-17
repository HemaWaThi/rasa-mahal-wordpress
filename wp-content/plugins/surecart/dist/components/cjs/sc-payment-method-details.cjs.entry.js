'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const ScPaymentMethodDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.paymentMethod = undefined;
        this.editHandler = undefined;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (index.h("sc-card", { key: 'c1a547159f611ebb0036be1cae0e516d69af3dfa' }, index.h("sc-flex", { key: '6af0f5ad82a2a49534627b3f22e471b9a15b2e09', alignItems: "center", justifyContent: "flex-start", style: { gap: '0.5em' } }, index.h("sc-payment-method", { key: '967b33a85f1280debb62be93b4c40c377b6bc561', paymentMethod: this.paymentMethod }), index.h("div", { key: '769e4c0b5352ea3a925cb808fd066aea97aa433d' }, !!((_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.exp_month) && (index.h("span", { key: '80305bc8a62bdf5e55a1880caa8585e3f77d9986' }, 
        // Translators: %d/%d is month and year of expiration.
        wp.i18n.sprintf(wp.i18n.__('Exp. %d/%d', 'surecart'), (_d = (_c = this.paymentMethod) === null || _c === void 0 ? void 0 : _c.card) === null || _d === void 0 ? void 0 : _d.exp_month, (_f = (_e = this.paymentMethod) === null || _e === void 0 ? void 0 : _e.card) === null || _f === void 0 ? void 0 : _f.exp_year))), !!((_h = (_g = this.paymentMethod) === null || _g === void 0 ? void 0 : _g.paypal_account) === null || _h === void 0 ? void 0 : _h.email) && ((_k = (_j = this.paymentMethod) === null || _j === void 0 ? void 0 : _j.paypal_account) === null || _k === void 0 ? void 0 : _k.email)), index.h("sc-button", { key: 'a885d5f8e08cfbf6c7d9a015c2c970436dff9f27', type: "text", circle: true, onClick: this.editHandler }, index.h("sc-icon", { key: '2512d4c3b4b8310b424d151f2bf74d16a414725d', name: "edit-2" })))));
    }
};

exports.sc_payment_method_details = ScPaymentMethodDetails;

//# sourceMappingURL=sc-payment-method-details.cjs.entry.js.map