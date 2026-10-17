import { r as registerInstance, h } from './index-25e5af33.js';
import './fetch-cdff67be.js';
import { a as apiFetch } from './index-824c562b.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scWordpressPasswordEditCss = ":host{display:block;position:relative}";
const ScWordpressPasswordEditStyle0 = scWordpressPasswordEditCss;

const ScWordPressPasswordEdit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.successUrl = undefined;
        this.user = undefined;
        this.loading = undefined;
        this.error = undefined;
        this.enableValidation = true;
    }
    renderEmpty() {
        return h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    validatePassword(password) {
        const regex = new RegExp('^(?=.*?[#?!@$%^&*-]).{6,}$');
        if (regex.test(password))
            return true;
        return false;
    }
    async handleSubmit(e) {
        this.loading = true;
        this.error = '';
        try {
            const { password } = await e.target.getFormJson();
            await apiFetch({
                path: `wp/v2/users/me`,
                method: 'PATCH',
                data: {
                    password,
                    meta: {
                        default_password_nag: false,
                    },
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
        return (h("sc-dashboard-module", { key: '80a8850fea9289b4c16b600306b2aa4f5f8f15c1', class: "customer-details", error: this.error }, h("span", { key: 'cd870cbc7ca801165348ee71c081658f1b30984f', slot: "heading" }, this.heading || wp.i18n.__('Update Password', 'surecart'), " "), h("slot", { key: '1a5232527dedea4752ed8406e0e79986c3d74e9d', name: "end", slot: "end" }), h("sc-card", { key: '9310479d09f84888372215b4c429996c88112b55' }, h("sc-form", { key: '0fbf23d8819217a2b110d887d68a3ec292f22265', onScFormSubmit: e => this.handleSubmit(e) }, h("sc-password", { key: '0a7abe48376ff6fb2c6d4a4670e0602e2414f190', enableValidation: this.enableValidation, label: wp.i18n.__('New Password', 'surecart'), name: "password", confirmation: true, required: true }), h("div", { key: 'a60991a7c92cdd3a878bf093d12f632d3165c8cf' }, h("sc-button", { key: '6cc665a455feb190b20c233c0749fbe08b1c7be8', type: "primary", full: true, submit: true }, wp.i18n.__('Update Password', 'surecart'))))), this.loading && h("sc-block-ui", { key: 'ff4d5d400264d671446f502c353e11030196ba3f', spinner: true })));
    }
};
ScWordPressPasswordEdit.style = ScWordpressPasswordEditStyle0;

export { ScWordPressPasswordEdit as sc_wordpress_password_edit };

//# sourceMappingURL=sc-wordpress-password-edit.entry.js.map