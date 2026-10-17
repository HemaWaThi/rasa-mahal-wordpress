'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const getters = require('./getters-bc65a40b.js');
require('./store-401bdb4d.js');
require('./utils-a9d13080.js');
require('./index-c3de642f.js');

const scUpsellCountdownTimerCss = ":host{display:flex;justify-content:var(--sc-upsell-countdown-timer-justify-content, center);align-items:var(--sc-upsell-countdown-timer-align-items, center);text-align:var(--sc-upsell-countdown-timer-text-align, center);flex-wrap:wrap;gap:var(--sc-upsell-countdown-timer-gap, 0.5em);line-height:1;padding:var(--sc-upsell-countdown-timer-padding, var(--sc-spacing-medium));border-radius:var(--sc-upsell-countdown-timer-border-radius, var(--sc-border-radius-pill));background-color:var(--sc-upsell-countdown-timer-background-color, rgb(226, 249, 235));color:var(--sc-upsell-countdown-timer-color, rgb(71, 91, 80))}";
const ScUpsellCountdownTimerStyle0 = scUpsellCountdownTimerCss;

const ScUpsellCountdownTimer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.timeRemaining = Infinity;
        this.formattedTime = undefined;
        this.showIcon = true;
    }
    componentDidLoad() {
        this.updateCountdown();
    }
    updateCountdown() {
        this.formattedTime = getters.getFormattedRemainingTime();
        setInterval(() => {
            this.formattedTime = getters.getFormattedRemainingTime();
        }, 1000);
    }
    render() {
        return (index.h(index.Host, { key: '3494bf984bd24e5fac3d8d2c30cb88ac225a36ca', role: "timer", class: {
                'sc-upsell-countdown-timer': true,
            } }, this.showIcon && index.h("sc-icon", { key: 'cbc5fab4d5152f10a549ac869cfa8e36f42bbe0c', name: "clock" }), index.h("span", { key: '6341a0a1df3542dc60b973b06c8ebe2b0f8df13e' }, index.h("slot", { key: '6e9d40ed94611a86810ba6c1fee82eb512a566ee', name: "offer-expire-text" }), " ", index.h("strong", { key: '6690bdd080931561c855d508d311f0e27660322a' }, this.formattedTime))));
    }
};
ScUpsellCountdownTimer.style = ScUpsellCountdownTimerStyle0;

exports.sc_upsell_countdown_timer = ScUpsellCountdownTimer;

//# sourceMappingURL=sc-upsell-countdown-timer.cjs.entry.js.map