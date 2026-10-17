import { r as registerInstance, h, F as Fragment, a as getElement } from './index-25e5af33.js';

const scBreadcrumbsCss = ":host{display:block}.breadcrumb{display:flex;align-items:center;flex-wrap:wrap}";
const ScBreadcrumbsStyle0 = scBreadcrumbsCss;

const ScBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = 'Breadcrumb';
    }
    // Generates a clone of the separator element to use for each breadcrumb item
    getSeparator() {
        const slotted = this.el.shadowRoot.querySelector('slot[name=separator]');
        const separator = slotted.assignedElements({ flatten: true })[0];
        // Clone it, remove ids, and slot it
        const clone = separator.cloneNode(true);
        [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
        clone.slot = 'separator';
        return clone;
    }
    handleSlotChange() {
        const slotted = this.el.shadowRoot.querySelector('.breadcrumb slot');
        const items = slotted.assignedElements().filter(node => {
            return node.nodeName === 'CE-BREADCRUMB';
        });
        items.forEach((item, index) => {
            // Append separators to each item if they don't already have one
            const separator = item.querySelector('[slot="separator"]');
            if (separator === null) {
                item.append(this.getSeparator());
            }
            // The last breadcrumb item is the "current page"
            if (index === items.length - 1) {
                item.setAttribute('aria-current', 'page');
            }
            else {
                item.removeAttribute('aria-current');
            }
        });
    }
    render() {
        return (h(Fragment, { key: 'd06e34fd092616580595553ad370322bcc0a2af8' }, h("nav", { key: 'c8b85c6dd6ba1a2cf4e220ead2b4287e5595e3ae', part: "base", class: "breadcrumb", "aria-label": this.label }, h("slot", { key: 'd29471f6a52e24fcc980f24a783eed6bd74bbdbe', onSlotchange: () => this.handleSlotChange() })), h("div", { key: '2d92d9a2715dffa22c85591b95f482c8f870bfdd', part: "separator", hidden: true, "aria-hidden": "true" }, h("slot", { key: '2e7f25418cc36d5199826d1263bf6fa430cb1ac0', name: "separator" }, h("sc-icon", { key: 'f73ddbf8ab67935bef34933f5ddaf4eb4b612291', name: "chevron-right" })))));
    }
    get el() { return getElement(this); }
};
ScBreadcrumbs.style = ScBreadcrumbsStyle0;

export { ScBreadcrumbs as sc_breadcrumbs };

//# sourceMappingURL=sc-breadcrumbs.entry.js.map