/**
 * Default copy for the checkout location permission modal — the single source
 * shared by the dialog (sc-checkout-geo-permission) and the admin placeholders.
 *
 * Keep it accurate and neutral: the location IS stored on the order, and a rule
 * may surcharge as well as discount — so no "never stored" or "fairer" framing.
 */
export declare const getGeoPermissionDefaults: () => {
    title: string;
    content: string;
    allowLabel: string;
    declineLabel: string;
};
