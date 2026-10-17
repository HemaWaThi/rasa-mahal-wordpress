'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
require('./fetch-5e8dc1d5.js');
const index$1 = require('./index-7ced8198.js');
require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');

const scWordpressUserEditCss = ":host{display:block;position:relative}.customer-details{display:grid;gap:0.75em}";
const ScWordpressUserEditStyle0 = scWordpressUserEditCss;

const ScWordPressUserEdit = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.successUrl = undefined;
        this.user = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    renderEmpty() {
        return index.h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    async handleSubmit(e) {
        this.loading = true;
        try {
            const { email, first_name, last_name, name } = await e.target.getFormJson();
            await index$1.apiFetch({
                path: `wp/v2/users/me`,
                method: 'PATCH',
                data: {
                    first_name,
                    last_name,
                    email,
                    name,
                },
            });
            if (this.successUrl) {
                window.location.assign(this.successUrl);
            }
            else {
                this.loading = false;
            }
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        var _a, _b, _c, _d;
        return (index.h("sc-dashboard-module", { key: '63b10a42189403935ed2d149f6432b7c215b5411', class: "account-details", error: this.error }, index.h("span", { key: '0a2f72f909d54fafafb40db7e07ab8c1d8e9f642', slot: "heading" }, this.heading || wp.i18n.__('Account Details', 'surecart'), " "), index.h("sc-card", { key: '43a45982cf08116e2a46be04b0d210719e467200' }, index.h("sc-form", { key: '80cc9132b372b9a3523b13a506040061e9d59a7c', onScFormSubmit: e => this.handleSubmit(e) }, index.h("sc-input", { key: '0ffee3c9051bae7d5693c315a829132f273c752b', label: wp.i18n.__('Account Email', 'surecart'), name: "email", value: (_a = this.user) === null || _a === void 0 ? void 0 : _a.email, required: true }), index.h("sc-columns", { key: '807cdcf2de0971480f39d59b97aef3f06a35500e', style: { '--sc-column-spacing': 'var(--sc-spacing-medium)' } }, index.h("sc-column", { key: '598ff340ee9c3b4a8a08519e2c1604f1b8fd34d7' }, index.h("sc-input", { key: '846b10eb01fed727e6640b1759bdd0e41866d555', label: wp.i18n.__('First Name', 'surecart'), name: "first_name", value: (_b = this.user) === null || _b === void 0 ? void 0 : _b.first_name })), index.h("sc-column", { key: 'de088f871fd1dab740212dffa36207a033b564b8' }, index.h("sc-input", { key: '19783e82994bd63868e6881c09ac3a18490193d2', label: wp.i18n.__('Last Name', 'surecart'), name: "last_name", value: (_c = this.user) === null || _c === void 0 ? void 0 : _c.last_name }))), index.h("sc-input", { key: '6816098890f6ffae8a32f1c330cf7446b15da828', label: wp.i18n.__('Display Name', 'surecart'), name: "name", value: (_d = this.user) === null || _d === void 0 ? void 0 : _d.display_name }), index.h("div", { key: '4fccddd3a12d41cdaa6d407dee0fbc109a4c62eb' }, index.h("sc-button", { key: '4bd7fea0b6fb5cd1a3ba7eb3760ee1fe48051fee', type: "primary", full: true, submit: true }, wp.i18n.__('Save', 'surecart'))))), this.loading && index.h("sc-block-ui", { key: '643c26d7c3e844769fcbf992cf4d37ba769ff4e3', spinner: true })));
    }
};
ScWordPressUserEdit.style = ScWordpressUserEditStyle0;

exports.sc_wordpress_user_edit = ScWordPressUserEdit;

//# sourceMappingURL=sc-wordpress-user-edit.cjs.entry.js.map