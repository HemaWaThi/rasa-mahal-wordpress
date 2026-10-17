/**
 * Internal dependencies.
 */
import { Address, GoogleMapAddressComponents } from "../types";
/**
 * Build a street address from address components (street_number + route).
 *
 * Named buildings (common in the UK, e.g. "3 Cambridge House") have no
 * street_number/route — the address lives in subpremise + premise instead.
 */
export declare function getStreetAddress(addressComponents: Array<GoogleMapAddressComponents> | null): string;
/**
 * Transforms the place address components into an address object.
 */
export declare function transformPlaceDetails(addressComponents: Array<GoogleMapAddressComponents>, regions: Array<{
    value: string;
    label: string;
}>): Address;
/**
 * Get the user's country code based on Google Geolocation and GeoCode APIs.
 * Caches the result in sessionStorage to avoid repeat API calls.
 */
export declare function getCurrentUserCountryCode(): Promise<any>;
