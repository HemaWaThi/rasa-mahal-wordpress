import { r as registerInstance, h } from './index-25e5af33.js';

const scVisuallyHiddenCss = ":host(:not(:focus-within)){position:absolute !important;width:1px !important;height:1px !important;clip:rect(0 0 0 0) !important;clip-path:inset(50%) !important;border:none !important;overflow:hidden !important;white-space:nowrap !important;padding:0 !important}";
const ScVisuallyHiddenStyle0 = scVisuallyHiddenCss;

const ScVisuallyHidden = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("slot", { key: '503ce41bdb70a3168563757ace5632fd8f00b4e0' });
    }
};
ScVisuallyHidden.style = ScVisuallyHiddenStyle0;

export { ScVisuallyHidden as sc_visually_hidden };

//# sourceMappingURL=sc-visually-hidden.entry.js.map