import { r as registerInstance, h } from './index-25e5af33.js';

const ScPremiumTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'small';
    }
    render() {
        return (h("sc-tag", { key: '8e623c9716c40ee3c1b86906d8bf8c691d8185d3', type: "success", size: this.size }, wp.i18n.__('Premium', 'surecart')));
    }
};

export { ScPremiumTag as sc_premium_tag };

//# sourceMappingURL=sc-premium-tag.entry.js.map