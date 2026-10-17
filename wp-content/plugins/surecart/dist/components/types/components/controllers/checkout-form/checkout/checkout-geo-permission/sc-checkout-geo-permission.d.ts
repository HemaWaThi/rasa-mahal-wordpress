/**
 * Explains why location is requested (e.g. regional / purchasing-power-parity pricing) and gates
 * the browser geolocation prompt behind an explicit opt-in when capture is enabled by the merchant.
 */
export declare class ScCheckoutGeoPermission {
    /** Whether the explainer dialog is open. */
    open: boolean;
    /** Disposer for the checkout store subscription while we wait for the cart to load. */
    private removeCartListener?;
    /** Whether the cart currently has at least one line item. */
    cartHasItems(): boolean;
    /** Whether the customer dismissed our explainer ("Not now") on a previous visit. */
    wasDismissed(): boolean;
    /** Remember a dismissal so we don't re-show the explainer on every visit. */
    rememberDismissed(): void;
    /**
     * The browser's current geolocation permission, or null if the Permissions API is
     * unavailable (e.g. older Safari). Lets us avoid showing an explainer whose Allow
     * button can't actually trigger a prompt.
     */
    getPermissionState(): Promise<PermissionState | null>;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    /** Decide, based on the browser permission, whether to capture silently, explain, or do nothing. */
    maybePromptForLocation(): Promise<void>;
    /** Capture coordinates into the checkout store. They ride along on the next update/finalize. */
    capture(): Promise<void>;
    /** Customer opted in — close and fire the native browser prompt. */
    onAllow(): void;
    /** Customer dismissed — remember it and close. Checkout continues with no capture. */
    onDecline(): void;
    render(): any;
}
