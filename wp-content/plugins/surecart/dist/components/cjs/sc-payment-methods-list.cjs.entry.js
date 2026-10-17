'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
require('./fetch-5e8dc1d5.js');
const lazy = require('./lazy-2b509fa7.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
const index$1 = require('./index-7ced8198.js');
require('./remove-query-args-b57e8cd3.js');

const scPaymentMethodsListCss = ":host{display:block;position:relative}.payment-methods-list{display:grid;gap:0.5em}.payment-methods-list sc-heading a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.payment-id{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ScPaymentMethodsListStyle0 = scPaymentMethodsListCss;

const ScPaymentMethodsList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.query = undefined;
        this.heading = undefined;
        this.isCustomer = undefined;
        this.canDetachDefaultPaymentMethod = false;
        this.paymentMethods = [];
        this.loading = undefined;
        this.busy = undefined;
        this.error = undefined;
        this.hasTitleSlot = undefined;
        this.editPaymentMethod = false;
        this.deletePaymentMethod = false;
        this.cascadeDefaultPaymentMethod = false;
    }
    /** Only fetch if visible */
    componentWillLoad() {
        lazy.onFirstVisible(this.el, () => this.getPaymentMethods());
        this.handleSlotChange();
    }
    handleSlotChange() {
        this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
    }
    /**
     * Delete the payment method.
     */
    async deleteMethod() {
        var _a;
        if (!this.deletePaymentMethod)
            return;
        try {
            this.busy = true;
            (await index$1.apiFetch({
                path: `surecart/v1/payment_methods/${(_a = this.deletePaymentMethod) === null || _a === void 0 ? void 0 : _a.id}/detach`,
                method: 'PATCH',
            }));
            // remove from view.
            this.paymentMethods = this.paymentMethods.filter(m => { var _a; return m.id !== ((_a = this.deletePaymentMethod) === null || _a === void 0 ? void 0 : _a.id); });
            this.deletePaymentMethod = false;
        }
        catch (e) {
            alert((e === null || e === void 0 ? void 0 : e.messsage) || wp.i18n.__('Something went wrong', 'surecart'));
        }
        finally {
            this.busy = false;
        }
    }
    /**
     * Set the default payment method.
     */
    async setDefault() {
        var _a, _b, _c;
        if (!this.editPaymentMethod)
            return;
        try {
            this.error = '';
            this.busy = true;
            (await index$1.apiFetch({
                path: `surecart/v1/customers/${(_b = (_a = this.editPaymentMethod) === null || _a === void 0 ? void 0 : _a.customer) === null || _b === void 0 ? void 0 : _b.id}`,
                method: 'PATCH',
                data: {
                    default_payment_method: (_c = this.editPaymentMethod) === null || _c === void 0 ? void 0 : _c.id,
                    cascade_default_payment_method: this.cascadeDefaultPaymentMethod,
                },
            }));
            this.editPaymentMethod = false;
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
        try {
            this.busy = true;
            this.paymentMethods = (await index$1.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/payment_methods/`, {
                    expand: ['card', 'customer', 'billing_agreement', 'paypal_account', 'payment_instrument', 'bank_account'],
                    ...this.query,
                }),
            }));
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
    }
    /** Get all paymentMethods */
    async getPaymentMethods() {
        if (!this.isCustomer) {
            return;
        }
        try {
            this.loading = true;
            this.paymentMethods = (await index$1.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/payment_methods/`, {
                    expand: ['card', 'customer', 'billing_agreement', 'paypal_account', 'payment_instrument', 'bank_account'],
                    ...this.query,
                    per_page: 100,
                }),
            }));
        }
        catch (e) {
            console.error(this.error);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    renderLoading() {
        return (index.h("sc-card", { noPadding: true }, index.h("sc-stacked-list", null, index.h("sc-stacked-list-row", { style: { '--columns': '4' }, "mobile-size": 500 }, [...Array(4)].map(() => (index.h("sc-skeleton", { style: { width: '100px', display: 'inline-block' } })))))));
    }
    renderEmpty() {
        return (index.h("div", null, index.h("sc-divider", { style: { '--spacing': '0' } }), index.h("slot", { name: "empty" }, index.h("sc-empty", { icon: "credit-card" }, wp.i18n.__("You don't have any saved payment methods.", 'surecart')))));
    }
    renderPaymentMethodActions(paymentMethod) {
        const { id, customer } = paymentMethod;
        // If this is a string, don't show the actions.
        if (typeof customer === 'string')
            return;
        // If this is the default payment method and it cannot be detached, don't show the actions.
        if (customer.default_payment_method === id && !this.canDetachDefaultPaymentMethod)
            return;
        return (index.h("sc-dropdown", { placement: "bottom-end", slot: "suffix" }, index.h("sc-icon", { role: "button", tabIndex: 0, name: "more-horizontal", slot: "trigger" }), index.h("sc-menu", null, customer.default_payment_method !== id && index.h("sc-menu-item", { onClick: () => (this.editPaymentMethod = paymentMethod) }, wp.i18n.__('Make Default', 'surecart')), index.h("sc-menu-item", { onClick: () => (this.deletePaymentMethod = paymentMethod) }, wp.i18n.__('Delete', 'surecart')))));
    }
    renderList() {
        return this.paymentMethods.map(paymentMethod => {
            const { id, card, customer, live_mode, billing_agreement, paypal_account } = paymentMethod;
            return (index.h("sc-stacked-list-row", { style: { '--columns': billing_agreement ? '2' : '3' } }, index.h("sc-payment-method", { paymentMethod: paymentMethod }), index.h("div", { class: "payment-id" }, !!(card === null || card === void 0 ? void 0 : card.exp_month) && (index.h("span", null, wp.i18n.__('Exp.', 'surecart'), card === null || card === void 0 ? void 0 :
                card.exp_month, "/", card === null || card === void 0 ? void 0 :
                card.exp_year)), !!paypal_account && (paypal_account === null || paypal_account === void 0 ? void 0 : paypal_account.email)), index.h("sc-flex", { "justify-content": "flex-start", "align-items": "center", style: { '--spacing': '0.5em', 'marginLeft': 'auto' } }, typeof customer !== 'string' && (customer === null || customer === void 0 ? void 0 : customer.default_payment_method) === id && index.h("sc-tag", { type: "info" }, wp.i18n.__('Default', 'surecart')), !live_mode && index.h("sc-tag", { type: "warning" }, wp.i18n.__('Test', 'surecart'))), this.renderPaymentMethodActions(paymentMethod)));
        });
    }
    renderContent() {
        var _a;
        if (!this.isCustomer) {
            return this.renderEmpty();
        }
        if (this.loading) {
            return this.renderLoading();
        }
        if (((_a = this.paymentMethods) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return this.renderEmpty();
        }
        return (index.h("sc-card", { "no-padding": true }, index.h("sc-stacked-list", null, this.renderList())));
    }
    handleEditPaymentMethodChange() {
        // reset when payment method edit changes
        this.cascadeDefaultPaymentMethod = false;
    }
    render() {
        return (index.h("sc-dashboard-module", { key: 'e92209433e067603d41ec2bd9d38e207f96908d4', class: "payment-methods-list", error: this.error }, index.h("span", { key: '4c4d68bb058cf048b29c80a9e9687bb3e92b0947', slot: "heading" }, index.h("slot", { key: '1e7e55cf8b86593f6087438a7eaf8bb27e8395db', name: "heading" }, this.heading || wp.i18n.__('Payment Methods', 'surecart'))), this.isCustomer && (index.h("sc-flex", { key: '3acfe318bd104baa5fd06c94e507ba7aa313571c', slot: "end" }, index.h("sc-button", { key: 'c46d9d3e765b94dd7d26bd1297ca1d6e8fb813fa', type: "link", href: addQueryArgs.addQueryArgs(window.location.href, {
                action: 'index',
                model: 'charge',
            }) }, index.h("sc-icon", { key: '00270e2a2c5c4cb8d3e723c281fb837827d8e1e8', name: "clock", slot: "prefix" }), wp.i18n.__('Payment History', 'surecart')), index.h("sc-button", { key: '0c647fc31489abb3e364cf8bea7ce8b06110a0a9', type: "link", href: addQueryArgs.addQueryArgs(window.location.href, {
                action: 'create',
                model: 'payment_method',
            }) }, index.h("sc-icon", { key: '593e75c55669d2750a7ef61e2a8a1a02ead78b82', name: "plus", slot: "prefix" }), wp.i18n.__('Add', 'surecart')))), this.renderContent(), index.h("sc-dialog", { key: '882ee6772c0e561787101a3b3a0ece4d6aef57d2', open: !!this.editPaymentMethod, label: wp.i18n.__('Update Default Payment Method', 'surecart'), onScRequestClose: () => (this.editPaymentMethod = false) }, index.h("sc-alert", { key: '16b0d67141bacfc6cb628cb612d367e644191529', type: "danger", open: !!this.error }, this.error), index.h("sc-flex", { key: '2444240887770dea937ce21bf6de92e9259a6975', flexDirection: "column", style: { '--sc-flex-column-gap': 'var(--sc-spacing-small)' } }, index.h("sc-alert", { key: 'b7c2dafa9f0686c1d3dadf8fdbd6701396824416', type: "info", open: true }, wp.i18n.__('A default payment method will be used as a fallback in case other payment methods get removed from a subscription.', 'surecart')), index.h("sc-switch", { key: 'db5fff91e517bbc7764010db34ba289970f7b624', checked: this.cascadeDefaultPaymentMethod, onScChange: e => (this.cascadeDefaultPaymentMethod = e.target.checked) }, wp.i18n.__('Update All Subscriptions', 'surecart'), index.h("span", { key: 'dbc1a593179f95dcf2e98036cfea8d7de7802b06', slot: "description" }, wp.i18n.__('Update all existing subscriptions to use this payment method', 'surecart')))), index.h("div", { key: '6f4f58b21e7e1079a69847d4b7cffa91e3720e0a', slot: "footer" }, index.h("sc-button", { key: '60f930412424779b8a26246cc60c68360b4767fb', type: "text", onClick: () => (this.editPaymentMethod = false) }, wp.i18n.__('Cancel', 'surecart')), index.h("sc-button", { key: 'd5e6d1900102d11cb73e28c71acf662e0017f388', type: "primary", onClick: () => this.setDefault() }, wp.i18n.__('Make Default', 'surecart'))), this.busy && index.h("sc-block-ui", { key: 'a809f0aba17df5cc3ee976811d25d406bdc749c9', spinner: true })), index.h("sc-dialog", { key: '6c628650bbc591128e6a5dfb9d7f86d946388527', open: !!this.deletePaymentMethod, label: wp.i18n.__('Delete Payment Method', 'surecart'), onScRequestClose: () => (this.deletePaymentMethod = false) }, index.h("sc-alert", { key: '8c8dfda309f1a43dbe1aaafb09eeb6c7c30775af', type: "danger", open: !!this.error }, this.error), index.h("sc-text", { key: '9bc4429a7b45adf2bc75b0009307cf10287d1eee' }, wp.i18n.__('Are you sure you want to remove this payment method?', 'surecart')), index.h("div", { key: '0cb7e02f9fbe805cdec25eb13f724fd62f83a2d4', slot: "footer" }, index.h("sc-button", { key: '5ba26761ae3bb9ce8f1574fdc88ad49ca48df8e9', type: "text", onClick: () => (this.deletePaymentMethod = false) }, wp.i18n.__('Cancel', 'surecart')), index.h("sc-button", { key: '8221a5fa04757965b6e52137145f79a20fb23807', type: "primary", onClick: () => this.deleteMethod() }, wp.i18n.__('Delete', 'surecart'))), this.busy && index.h("sc-block-ui", { key: 'e572201fdbd3e47860ab55fb1ce3eb0fff45ebe1', spinner: true })), this.busy && index.h("sc-block-ui", { key: '159176572d462ed7db6c8924b99983c18d835a44', spinner: true })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "editPaymentMethod": ["handleEditPaymentMethodChange"]
    }; }
};
ScPaymentMethodsList.style = ScPaymentMethodsListStyle0;

exports.sc_payment_methods_list = ScPaymentMethodsList;

//# sourceMappingURL=sc-payment-methods-list.cjs.entry.js.map