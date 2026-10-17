import { r as registerInstance, h, H as Host } from './index-25e5af33.js';
import { d as decline } from './mutations-b310b068.js';
import './fetch-cdff67be.js';
import './index-824c562b.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './store-289e460c.js';
import './utils-f84b2118.js';
import './index-18f5a1bc.js';
import './watchers-81f32d01.js';
import './google-52867ad8.js';
import './currency-a0c9bff4.js';
import './google-e9085e27.js';
import './util-dfbf863e.js';
import './index-c5a96d53.js';
import './mutations-7458343f.js';

const scUpsellNoThanksButtonCss = "sc-upsell-no-thanks-button{display:block}sc-upsell-no-thanks-button p{margin-block-start:0;margin-block-end:1em}sc-upsell-no-thanks-button .wp-block-button__link{position:relative;text-decoration:none}";
const ScUpsellNoThanksButtonStyle0 = scUpsellNoThanksButtonCss;

const ScUpsellNoThanksButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'cae2303eaf83b83fb08325f48af721fd35be768c', onClick: () => decline() }, h("slot", { key: '868cb74a34213209c6ca480522bdb64822626aeb' })));
    }
};
ScUpsellNoThanksButton.style = ScUpsellNoThanksButtonStyle0;

export { ScUpsellNoThanksButton as sc_upsell_no_thanks_button };

//# sourceMappingURL=sc-upsell-no-thanks-button.entry.js.map