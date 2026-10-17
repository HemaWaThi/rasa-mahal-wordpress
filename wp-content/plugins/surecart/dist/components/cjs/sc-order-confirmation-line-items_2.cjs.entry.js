'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const consumer = require('./consumer-b58230e6.js');
const index$1 = require('./index-f3933112.js');
const price = require('./price-da3cab3d.js');
const tax = require('./tax-a4582e73.js');
require('./currency-71fce0f0.js');

const scOrderConfirmationLineItemsCss = ":host{display:block}.line-items{display:grid;gap:var(--sc-spacing-small)}.line-item{display:grid;gap:var(--sc-spacing-small)}.fee__description{opacity:0.75}";
const ScOrderConfirmationLineItemsStyle0 = scOrderConfirmationLineItemsCss;

const ScOrderConfirmationLineItems = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.order = undefined;
        this.loading = undefined;
    }
    render() {
        var _a, _b;
        if (!!this.loading) {
            return (index.h("sc-line-item", null, index.h("sc-skeleton", { style: { 'width': '50px', 'height': '50px', '--border-radius': '0' }, slot: "image" }), index.h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), index.h("sc-skeleton", { slot: "description", style: { width: '60px', display: 'inline-block' } }), index.h("sc-skeleton", { style: { width: '120px', display: 'inline-block' }, slot: "price" }), index.h("sc-skeleton", { style: { width: '60px', display: 'inline-block' }, slot: "price-description" })));
        }
        const items = (((_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data) || []);
        const { regular, bundleParents, componentsByParent } = index$1.groupBundleLineItems(items);
        const orderedItems = [...bundleParents, ...regular];
        return (index.h("div", { class: { 'confirmation-summary': true } }, index.h("div", { class: "line-items", part: "line-items" }, orderedItems.map(item => {
            var _a, _b, _c, _d, _e, _f;
            const product = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product;
            const isBundle = !!(product === null || product === void 0 ? void 0 : product.bundle);
            return (index.h("div", { class: "line-item", key: item.id }, index.h("sc-product-line-item", { image: product === null || product === void 0 ? void 0 : product.line_item_image, name: product === null || product === void 0 ? void 0 : product.name, price: (_b = item === null || item === void 0 ? void 0 : item.price) === null || _b === void 0 ? void 0 : _b.name, variant: item === null || item === void 0 ? void 0 : item.variant_display_options, editable: false, removable: false, quantity: item.quantity, fees: (_c = item === null || item === void 0 ? void 0 : item.fees) === null || _c === void 0 ? void 0 : _c.data, note: item === null || item === void 0 ? void 0 : item.display_note, amount: item.ad_hoc_display_amount ? item.ad_hoc_display_amount : item.subtotal_display_amount, scratch: !item.ad_hoc_display_amount && (item === null || item === void 0 ? void 0 : item.scratch_display_amount), trial: (_d = item === null || item === void 0 ? void 0 : item.price) === null || _d === void 0 ? void 0 : _d.trial_text, interval: `${(_e = item === null || item === void 0 ? void 0 : item.price) === null || _e === void 0 ? void 0 : _e.short_interval_text} ${(_f = item === null || item === void 0 ? void 0 : item.price) === null || _f === void 0 ? void 0 : _f.short_interval_count_text}`, purchasableStatus: item === null || item === void 0 ? void 0 : item.purchasable_status_display, sku: item === null || item === void 0 ? void 0 : item.sku, bundleComponents: isBundle ? componentsByParent[item.id] || [] : [] })));
        }))));
    }
};
consumer.openWormhole(ScOrderConfirmationLineItems, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationLineItems.style = ScOrderConfirmationLineItemsStyle0;

const scOrderConfirmationTotalsCss = ":host{display:block}";
const ScOrderConfirmationTotalsStyle0 = scOrderConfirmationTotalsCss;

const ScOrderConfirmationTotals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.order = undefined;
    }
    renderDiscountLine() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (!((_c = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.discount) === null || _b === void 0 ? void 0 : _b.promotion) === null || _c === void 0 ? void 0 : _c.code)) {
            return null;
        }
        let humanDiscount = '';
        if ((_e = (_d = this.order) === null || _d === void 0 ? void 0 : _d.discount) === null || _e === void 0 ? void 0 : _e.coupon) {
            humanDiscount = price.getHumanDiscount((_g = (_f = this.order) === null || _f === void 0 ? void 0 : _f.discount) === null || _g === void 0 ? void 0 : _g.coupon);
        }
        return (index.h("sc-line-item", { style: { marginTop: 'var(--sc-spacing-small)' } }, index.h("span", { slot: "description" }, wp.i18n.__('Discount', 'surecart'), index.h("br", null), ((_k = (_j = (_h = this.order) === null || _h === void 0 ? void 0 : _h.discount) === null || _j === void 0 ? void 0 : _j.promotion) === null || _k === void 0 ? void 0 : _k.code) && (index.h("sc-tag", { type: "success", size: "small" }, (_o = (_m = (_l = this.order) === null || _l === void 0 ? void 0 : _l.discount) === null || _m === void 0 ? void 0 : _m.promotion) === null || _o === void 0 ? void 0 : _o.code))), humanDiscount && (index.h("span", { class: "coupon-human-discount", slot: "price-description" }, "(", humanDiscount, ")")), index.h("span", { slot: "price" }, (_p = this.order) === null || _p === void 0 ? void 0 : _p.discounts_display_amount)));
    }
    renderCheckoutFees(checkout) {
        var _a, _b, _c, _d;
        if (!((_b = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.checkout_fees) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length)) {
            return null;
        }
        return (index.h(index.Fragment, null, (_d = (_c = checkout === null || checkout === void 0 ? void 0 : checkout.checkout_fees) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.map(fee => (index.h("sc-line-item", { key: fee === null || fee === void 0 ? void 0 : fee.id }, index.h("span", { slot: "description" }, fee === null || fee === void 0 ? void 0 : fee.description), index.h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount))))));
    }
    renderShippingFees(checkout) {
        var _a, _b, _c, _d;
        if (!((_b = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.shipping_fees) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length)) {
            return null;
        }
        return (index.h(index.Fragment, null, (_d = (_c = checkout === null || checkout === void 0 ? void 0 : checkout.shipping_fees) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.map(fee => (index.h("sc-line-item", { key: fee === null || fee === void 0 ? void 0 : fee.id }, index.h("span", { slot: "description" }, fee === null || fee === void 0 ? void 0 : fee.description), index.h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount))))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
        const shippingMethod = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.selected_shipping_choice) === null || _b === void 0 ? void 0 : _b.shipping_method;
        const shippingMethodName = shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.name;
        return (index.h("div", { key: '3d51dff5f50a0156d5cd3b718e184799ac4d6aea', class: { 'line-item-totals': true } }, ((_c = this.order) === null || _c === void 0 ? void 0 : _c.subtotal_amount) !== ((_d = this.order) === null || _d === void 0 ? void 0 : _d.total_amount) && (index.h(index.Fragment, { key: 'aa5aa12268fe52f0677a16bd276fe0365aa736c3' }, index.h("sc-line-item", { key: '20c31d3288ac886ed8a1a86e617371b3625a5345' }, index.h("span", { key: '6f4a95226349d648a5161dd8b413b9f0b94025b2', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), index.h("span", { key: '7cba2aa13135c52ca27c5baecbd45886531dfd88', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_e = this.order) === null || _e === void 0 ? void 0 : _e.subtotal_display_amount)), this.renderCheckoutFees(this.order))), !!((_f = this.order) === null || _f === void 0 ? void 0 : _f.trial_amount) && (index.h("sc-line-item", { key: '60576f66cfcdbd78c8048761cc20da043fb45d0a' }, index.h("span", { key: 'e86e7d1320db8ed0635ebd7ba65dfbd35bb3a0f8', slot: "description" }, wp.i18n.__('Trial', 'surecart')), index.h("span", { key: '53bb2bcf01e41684e29a0b1f9e685c98a6d4b675', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_g = this.order) === null || _g === void 0 ? void 0 : _g.trial_display_amount))), !!((_h = this.order) === null || _h === void 0 ? void 0 : _h.discounts) && (index.h("sc-line-item", { key: '5d401992646d257736444307576dcddb968ea48d' }, index.h("span", { key: 'f38f177547c3a8b6d86747fc0c62b6ef06ac3a27', slot: "description" }, wp.i18n.__('Discounts', 'surecart')), index.h("span", { key: '48c58acd38a309fc877de67c94023235afab7a68', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_j = this.order) === null || _j === void 0 ? void 0 : _j.discounts_display))), !!((_m = (_l = (_k = this.order) === null || _k === void 0 ? void 0 : _k.discount) === null || _l === void 0 ? void 0 : _l.promotion) === null || _m === void 0 ? void 0 : _m.code) && (index.h("sc-line-item", { key: '3d74dc005bd4cef69659323a08615f61666c5554' }, index.h("span", { key: '0bcb84c3a2de2a4834e7020967cd65d3d5e58441', slot: "description" }, wp.i18n.__('Discount', 'surecart'), index.h("br", { key: 'ba0255c726780c480bad908e353f3052a6723418' }), index.h("sc-tag", { key: '693895c38ad0e7a0daddc6a8db337f34a62de353', type: "success" }, wp.i18n.__('Coupon:', 'surecart'), " ", (_q = (_p = (_o = this.order) === null || _o === void 0 ? void 0 : _o.discount) === null || _p === void 0 ? void 0 : _p.promotion) === null || _q === void 0 ? void 0 :
            _q.code)), index.h("span", { key: 'c47be1b86f340f5292c133da4d5e3b8ce00ab2c5', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_r = this.order) === null || _r === void 0 ? void 0 : _r.discounts_display_amount))), !!((_s = this.order) === null || _s === void 0 ? void 0 : _s.shipping_amount) && (index.h(index.Fragment, { key: '3cf7899a67612e08fc19d133210a0d944a1b4fde' }, index.h("sc-line-item", { key: 'c6249962d6fa1f47fc910e1dac9829a511388a17' }, index.h("span", { key: '82fb6275abfb7c1f6f652c8d9482182c2dfb4be5', slot: "description" }, `${wp.i18n.__('Shipping', 'surecart')} ${shippingMethodName ? `(${shippingMethodName})` : ''}`), index.h("span", { key: 'f82a79978ccb568a28b7b21f8c9f80b5768f9c52', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_t = this.order) === null || _t === void 0 ? void 0 : _t.shipping_display_amount)), this.renderShippingFees(this.order))), !!((_u = this.order) === null || _u === void 0 ? void 0 : _u.tax_amount) && (index.h("sc-line-item", { key: '33966cb1cec28226824e8514ba9c2f7e3fc5927b' }, index.h("span", { key: '6a6d918077f1b6d99fd03d611868d881d634e280', slot: "description" }, `${tax.formatTaxDisplay((_v = this.order) === null || _v === void 0 ? void 0 : _v.tax_label, ((_w = this.order) === null || _w === void 0 ? void 0 : _w.tax_status) === 'estimated')} (${(_x = this.order) === null || _x === void 0 ? void 0 : _x.tax_percent}%)`), index.h("span", { key: '398d69ce69ab60446e55f9583a82f2ec79fe465e', slot: "price" }, (_y = this.order) === null || _y === void 0 ? void 0 : _y.tax_display_amount), !!((_z = this.order) === null || _z === void 0 ? void 0 : _z.tax_inclusive_amount) && index.h("span", { key: '1e113bd159de07af7e97926dbed226b3f1f4dcee', slot: "price-description" }, `(${wp.i18n.__('included', 'surecart')})`))), index.h("sc-divider", { key: '4a48337b33fd456fd9620aa2c6b5d15a3ae429ac', style: { '--spacing': 'var(--sc-spacing-x-small)' } }), index.h("sc-line-item", { key: 'e98dc0c688e9529389ff5052c56c53db79f37b4f', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, index.h("span", { key: 'ebe7644ea216f080cbcd27a502c5d49acce965f2', slot: "title" }, wp.i18n.__('Total', 'surecart')), index.h("span", { key: '6856d7dfe3c510a027556c3138d3dd9e49cacd5c', slot: "price" }, (_0 = this.order) === null || _0 === void 0 ? void 0 : _0.total_display_amount), index.h("span", { key: 'dd6241b9e2539e2d73d9c8948ebb9d0487affe5f', slot: "currency" }, (_1 = this.order) === null || _1 === void 0 ? void 0 : _1.currency)), !!((_2 = this.order) === null || _2 === void 0 ? void 0 : _2.proration_amount) && (index.h("sc-line-item", { key: 'ec73eb49f952152ef4c00e40c3ac56d250c65124' }, index.h("span", { key: '1540e6365c07b918cc8b698349f7d0b8e4c1a215', slot: "description" }, wp.i18n.__('Proration', 'surecart')), index.h("span", { key: '4145ab74f11fc47b8f738ebdbba3b45a9f616045', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_3 = this.order) === null || _3 === void 0 ? void 0 : _3.proration_display_amount))), !!((_4 = this.order) === null || _4 === void 0 ? void 0 : _4.applied_balance_amount) && (index.h("sc-line-item", { key: 'ec30c49e9fc5d406b71a5b63a9d77253852406d4' }, index.h("span", { key: '5e6de9421f25501efd1861657200e9b1bbb45157', slot: "description" }, wp.i18n.__('Applied Balance', 'surecart')), index.h("span", { key: '4ce6d749ee86107a0a506c876cf556af5744c06c', style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, slot: "price" }, (_5 = this.order) === null || _5 === void 0 ? void 0 : _5.applied_balance_display_amount))), !!((_6 = this.order) === null || _6 === void 0 ? void 0 : _6.credited_balance_amount) && (index.h("sc-line-item", { key: '1f602620bbae03992dfc72ff3b0e6c8ee9549775' }, index.h("span", { key: '87d0cfa04a4c71a22e93a773007a335196bc3203', slot: "description" }, wp.i18n.__('Credited Balance', 'surecart')), index.h("span", { key: '9cbf2e9072834158ef8ab40d383e10fc7c6ab840', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_7 = this.order) === null || _7 === void 0 ? void 0 : _7.credited_balance_display_amount))), ((_8 = this.order) === null || _8 === void 0 ? void 0 : _8.amount_due) !== ((_9 = this.order) === null || _9 === void 0 ? void 0 : _9.total_amount) && (index.h("sc-line-item", { key: '22c16ffabf3bf021c9547367773311053753241c', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, index.h("span", { key: 'dbf3f96253f5bdff9d070bfb92398798ddbc0723', slot: "title" }, wp.i18n.__('Amount Due', 'surecart')), index.h("span", { key: 'd5b09afb390a0b0c92c7e5f34f24f8d98c47c7d1', slot: "price" }, (_10 = this.order) === null || _10 === void 0 ? void 0 : _10.amount_due_display_amount), index.h("span", { key: 'd1a5e772da170608dab6d92b8cdbe0fd118dc067', slot: "currency" }, (_11 = this.order) === null || _11 === void 0 ? void 0 : _11.currency))), index.h("sc-divider", { key: 'd5a6c9e8b0dc1602ddeb06096d02a562c02d1617', style: { '--spacing': 'var(--sc-spacing-x-small)' } }), !!((_12 = this.order) === null || _12 === void 0 ? void 0 : _12.paid_amount) && (index.h("sc-line-item", { key: '3f77283d0336cc25bd0e22faa512a927fd378b90', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, index.h("span", { key: '51f735abe8a5219f0330c7dd7bfb66f51e517fcb', slot: "title" }, wp.i18n.__('Paid', 'surecart')), index.h("span", { key: '2d667f17951cdcc1d4f0d6d3cc76f1b813c9a622', slot: "price" }, (_13 = this.order) === null || _13 === void 0 ? void 0 : _13.paid_display_amount), index.h("span", { key: 'c5c42cd4f4a1f95af2e1627332ba13cc856a2fc2', slot: "currency" }, (_14 = this.order) === null || _14 === void 0 ? void 0 : _14.currency))), !!((_15 = this.order) === null || _15 === void 0 ? void 0 : _15.refunded_amount) && (index.h(index.Fragment, { key: '982ed7afdd0ca75d9d60a48a668060576de3cff9' }, index.h("sc-line-item", { key: '4ac1fc05e2acb32791acc9b72591b01c6b85a4cd', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, index.h("span", { key: '81d8c755b25042d1371374860886154faa32e04e', slot: "description" }, wp.i18n.__('Refunded', 'surecart')), index.h("span", { key: '1e34dc493441e97bfcd1585aa40b26bf9369447f', slot: "price" }, (_16 = this.order) === null || _16 === void 0 ? void 0 : _16.refunded_display_amount)), index.h("sc-line-item", { key: '9fea3f77a3d6f4631993b26bb1dbd8092e942440', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, index.h("span", { key: '15ce160d7b63585d012300abf8da3e8bda5ad946', slot: "title" }, wp.i18n.__('Net Payment', 'surecart')), index.h("span", { key: '59487504e0def2acaaa7e4fcf9757af7dfa5757d', slot: "price" }, (_17 = this.order) === null || _17 === void 0 ? void 0 : _17.net_paid_display_amount)))), ((_18 = this.order) === null || _18 === void 0 ? void 0 : _18.tax_reverse_charged_amount) > 0 && (index.h("sc-line-item", { key: '094bcd469599fea1191945f354fb0d0e99dc5175' }, index.h("span", { key: 'd08faa20a9fb417fefe0e1755e2320f951bc3429', slot: "description" }, wp.i18n.__('*Tax to be paid on reverse charge basis', 'surecart'))))));
    }
};
consumer.openWormhole(ScOrderConfirmationTotals, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationTotals.style = ScOrderConfirmationTotalsStyle0;

exports.sc_order_confirmation_line_items = ScOrderConfirmationLineItems;
exports.sc_order_confirmation_totals = ScOrderConfirmationTotals;

//# sourceMappingURL=sc-order-confirmation-line-items_2.cjs.entry.js.map