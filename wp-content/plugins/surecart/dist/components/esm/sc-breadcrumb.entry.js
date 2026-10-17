import { r as registerInstance, h, a as getElement } from './index-25e5af33.js';

const scBreadcrumbCss = ":host{display:inline-flex}.breadcrumb-item{display:inline-flex;align-items:center;font-family:var(--sc-font-sans);font-size:var(--sc-font-size-small);font-weight:var(--sc-font-weight-semibold);color:var(--sc-breadcrumb-color, var(--sc-color-gray-600));line-height:var(--sc-line-height-normal);white-space:nowrap}.breadcrumb-item__label{display:inline-block;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;text-decoration:none;color:inherit;background:none;border:none;border-radius:var(--sc-border-radius-medium);padding:0;margin:0;cursor:pointer;transition:color var(--sc-transition-fast) ease}:host(:not(:last-of-type)) .breadcrumb-item__label{color:var(--sc-breadcrumb-item-label-color, var(--sc-color-gray-900))}:host(:not(:last-of-type)) .breadcrumb-item__label:hover{color:var(--sc-breadcrumb-item-label-hover-color, var(--sc-color-primary-500))}:host(:not(:last-of-type)) .breadcrumb-item__label:active{color:var(--sc-breadcrumb-item-label-active-color, var(--sc-color-gray-900))}.breadcrumb-item__label:focus{box-shadow:var(--sc-focus-ring)}.breadcrumb-item__prefix,.breadcrumb-item__suffix{display:none;flex:0 0 auto;display:flex;align-items:center}.breadcrumb-item--has-prefix .breadcrumb-item__prefix{display:inline-flex;margin-right:var(--sc-spacing-x-small)}.breadcrumb-item--has-suffix .breadcrumb-item__suffix{display:inline-flex;margin-left:var(--sc-spacing-x-small)}:host(:last-of-type) .breadcrumb-item__separator{display:none}.breadcrumb-item__separator{display:inline-flex;align-items:center;margin:0 var(--sc-spacing-x-small);user-select:none}";
const ScBreadcrumbStyle0 = scBreadcrumbCss;

const ScBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
        this.target = undefined;
        this.rel = 'noreferrer noopener';
        this.hasPrefix = undefined;
        this.hasSuffix = undefined;
    }
    handleSlotChange() {
        this.hasPrefix = !!this.el.querySelector('[slot="prefix"]');
        this.hasSuffix = !!this.el.querySelector('[slot="suffix"]');
    }
    render() {
        const Tag = this.href ? 'a' : 'div';
        return (h("div", { key: 'aa7d27608e2c8a261fc16e93ba30d29be1e940fa', part: "base", class: {
                'breadcrumb-item': true,
                'breadcrumb-item--has-prefix': this.hasPrefix,
                'breadcrumb-item--has-suffix': this.hasSuffix,
            } }, h("span", { key: 'd3acb541f4ad03ad2c05ff1055d7b50c939a0c65', part: "prefix", class: "breadcrumb-item__prefix" }, h("slot", { key: '9511e5c62a62a459b304bd04c3bd6a2ac8beff3d', name: "prefix" })), h(Tag, { key: '87b58f93291ef70118f841c59c914cb4c7718dfa', part: "label", class: "breadcrumb-item__label breadcrumb-item__label--link", href: this.href, target: this.target, rel: this.rel }, h("slot", { key: 'c098ee4f5d3ae2505269facbcfb8a16607e49ed3' })), h("span", { key: '806498ae36575f1dd55ed0b260bfa4c3c469f53b', part: "suffix", class: "breadcrumb-item__suffix" }, h("slot", { key: '644088c3e4a811df41cf1c1756278da444c24ec2', name: "suffix", onSlotchange: () => this.handleSlotChange() })), h("span", { key: '581cba5cafbfb07e135dfa6d072e4a46076f85f6', part: "separator", class: "breadcrumb-item__separator", "aria-hidden": "true" }, h("slot", { key: '25c23f009e8b0accd44900303be754c4976471aa', name: "separator", onSlotchange: () => this.handleSlotChange() }, h("sc-icon", { key: '96afb354c792816f2672de7811cddaf2269d4fc2', name: "chevron-right" })))));
    }
    get el() { return getElement(this); }
};
ScBreadcrumb.style = ScBreadcrumbStyle0;

export { ScBreadcrumb as sc_breadcrumb };

//# sourceMappingURL=sc-breadcrumb.entry.js.map