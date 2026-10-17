import { r as registerInstance, h } from './index-25e5af33.js';

const scInvoiceStatusBadgeCss = ":host{display:inline-block;vertical-align:middle}";
const ScInvoiceStatusBadgeStyle0 = scInvoiceStatusBadgeCss;

const ScInvoiceStatusBadge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.status = undefined;
        this.size = 'medium';
        this.pill = false;
        this.clearable = false;
    }
    getType() {
        switch (this.status) {
            case 'paid':
                return 'success';
            case 'open':
                return 'info';
            case 'draft':
                return 'default';
        }
    }
    getText() {
        switch (this.status) {
            case 'paid':
                return wp.i18n.__('Paid', 'surecart');
            case 'open':
                return wp.i18n.__('Open', 'surecart');
            case 'draft':
                return wp.i18n.__('Draft', 'surecart');
            default:
                return this.status;
        }
    }
    render() {
        return (h("sc-tag", { key: '83684cf431b83d2be2847821153fa01eb60d42f9', type: this.getType(), pill: this.pill }, this.getText()));
    }
};
ScInvoiceStatusBadge.style = ScInvoiceStatusBadgeStyle0;

export { ScInvoiceStatusBadge as sc_invoice_status_badge };

//# sourceMappingURL=sc-invoice-status-badge.entry.js.map