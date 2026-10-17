'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const mutations = require('./mutations-463da571.js');
require('./fetch-5e8dc1d5.js');
require('./index-7ced8198.js');
require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');
require('./store-401bdb4d.js');
require('./utils-a9d13080.js');
require('./index-c3de642f.js');
require('./watchers-b5cd03f1.js');
require('./google-5d965da2.js');
require('./currency-71fce0f0.js');
require('./google-8dbad1a6.js');
require('./util-a15c420c.js');
require('./index-fb76df07.js');
require('./mutations-d5d6ddf1.js');

const scUpsellNoThanksButtonCss = "sc-upsell-no-thanks-button{display:block}sc-upsell-no-thanks-button p{margin-block-start:0;margin-block-end:1em}sc-upsell-no-thanks-button .wp-block-button__link{position:relative;text-decoration:none}";
const ScUpsellNoThanksButtonStyle0 = scUpsellNoThanksButtonCss;

const ScUpsellNoThanksButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'cae2303eaf83b83fb08325f48af721fd35be768c', onClick: () => mutations.decline() }, index.h("slot", { key: '868cb74a34213209c6ca480522bdb64822626aeb' })));
    }
};
ScUpsellNoThanksButton.style = ScUpsellNoThanksButtonStyle0;

exports.sc_upsell_no_thanks_button = ScUpsellNoThanksButton;

//# sourceMappingURL=sc-upsell-no-thanks-button.cjs.entry.js.map