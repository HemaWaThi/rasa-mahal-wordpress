import { r as registerInstance, h, a as getElement } from './index-25e5af33.js';

const scCardCss = ":host{display:block;--overflow:visible}.card{font-family:var(--sc-font-sans);overflow:var(--overflow);display:block}.card:not(.card--borderless){padding:var(--sc-card-padding, var(--sc-spacing-large));background:var(--sc-card-background-color, var(--sc-color-white));border:1px solid var(--sc-card-border-color, var(--sc-color-gray-300));border-radius:var(--sc-card-border-radius, var(--sc-input-border-radius-medium));box-shadow:var(--sc-shadow-small)}.card:not(.card--borderless).card--no-padding{padding:0}.title--divider{display:none}.card--has-title-slot .card--title{font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.card--has-title-slot .title--divider{display:block}::slotted(*){margin-bottom:var(--sc-form-row-spacing)}::slotted(*:first-child){margin-top:0}::slotted(*:last-child){margin-bottom:0 !important}";
const ScCardStyle0 = scCardCss;

const ScCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noDivider = undefined;
        this.borderless = undefined;
        this.noPadding = undefined;
        this.href = undefined;
        this.loading = undefined;
        this.hasTitleSlot = undefined;
    }
    componentWillLoad() {
        this.handleSlotChange();
    }
    handleSlotChange() {
        this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
    }
    render() {
        const Tag = this.href ? 'a' : 'div';
        return (h(Tag, { key: 'f5480a7dd271fe64655f3071f3e4fef1a36bd63a', part: "base", class: {
                'card': true,
                'card--borderless': this.borderless,
                'card--no-padding': this.noPadding,
            } }, h("slot", { key: '00f3f41675775d47e2ec25718a1ac4e097598f17' })));
    }
    get el() { return getElement(this); }
};
ScCard.style = ScCardStyle0;

const scDashboardModuleCss = ":host{display:block;position:relative}.dashboard-module{display:grid;gap:var(--sc-dashboard-module-spacing, 1em)}.dashboard-module>*,.dashboard-module ::slotted(*){min-width:0}.heading{font-family:var(--sc-font-sans);display:flex;flex-wrap:wrap;gap:1em;align-items:center;justify-content:space-between}.heading__text{display:grid;flex:1;gap:calc(var(--sc-dashboard-module-spacing, 1em) / 2)}@media screen and (min-width: 720px){.heading{gap:2em}}.heading__title{font-size:var(--sc-dashbaord-module-heading-size, var(--sc-font-size-x-large));font-weight:var(--sc-dashbaord-module-heading-weight, var(--sc-font-weight-bold));line-height:var(--sc-dashbaord-module-heading-line-height, var(--sc-line-height-dense));white-space:nowrap}.heading__description{font-size:var(--sc-font-size-normal);line-height:var(--sc-line-height-dense);opacity:0.85}";
const ScDashboardModuleStyle0 = scDashboardModuleCss;

const ScDashboardModule = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.error = undefined;
        this.loading = undefined;
    }
    render() {
        return (h("div", { key: '9b503da887d9c2d70bf23af7e7cbc485ccee6ac1', class: "dashboard-module", part: "base" }, !!this.error && (h("sc-alert", { key: 'a83bfc549e284a9b99b2b15bbda956865c14bded', exportparts: "base:error__base, icon:error__icon, text:error__text, title:error__title, message:error__message", open: !!this.error, type: "danger" }, h("span", { key: 'bb7b5547a705e8d96993f654e64bd3859ea3aa73', slot: "title" }, wp.i18n.__('Error', 'surecart')), this.error)), h("div", { key: '6d7e70f079c94e78f901751e110073d6d8802363', class: "heading", part: "heading" }, h("div", { key: '60a9749ba081861b52eb9deb70416c30d42833ed', class: "heading__text", part: "heading-text" }, h("div", { key: 'f9ce06fddaae61a78708775f4bb6eb6241d2e7f4', class: "heading__title", part: "heading-title" }, h("slot", { key: '4b40299e832fe01ac38f401412e609066aef810b', name: "heading", "aria-label": this.heading }, this.heading)), h("div", { key: '25c78c8d6ef94f8b0b0e208dbc53c1e885b2701e', class: "heading__description", part: "heading-description" }, h("slot", { key: 'e7c34fdeabd76feb9d69604c1bc827b79b0e5169', name: "description" }))), h("slot", { key: '51c0236c0a5e56b5bd0e206b51c32c7f2500d2d9', name: "end" })), h("slot", { key: 'cdee456ddef8eb23b4b10631d68bde7379b75142' })));
    }
};
ScDashboardModule.style = ScDashboardModuleStyle0;

export { ScCard as sc_card, ScDashboardModule as sc_dashboard_module };

//# sourceMappingURL=sc-card_2.entry.js.map