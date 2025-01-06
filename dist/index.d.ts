/**
 * Get all countries.
 * @returns {ICountry[]} List of all countries
 */
export declare function getAllCountries(): any;
/**
 * Get the names of all countries.
 * @returns {string[]} List of country names
 */
export declare function getAllCountryNames(): string[];
/**
 * Get country details by country name.
 * @param {string} countryName Name of the country
 * @returns {ICountry | undefined} Country details if found, undefined otherwise
 */
export declare function getCountryDetailsByName(countryName: string): {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: null;
    subregion: string;
    subregion_id: null;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: null;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        fa: string;
        de: string;
        fr: string;
        it: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
        nl?: undefined;
        hr?: undefined;
        es?: undefined;
        ja?: undefined;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: null;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        nl: string;
        fa: string;
        de: string;
        fr: string;
        it: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
        hr?: undefined;
        es?: undefined;
        ja?: undefined;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
        "pt-BR"?: undefined;
        pt?: undefined;
        nl?: undefined;
        hr?: undefined;
        fa?: undefined;
        de?: undefined;
        es?: undefined;
        fr?: undefined;
        ja?: undefined;
        it?: undefined;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
        it?: undefined;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | {
    _id: {
        $oid: string;
    };
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital: string;
    currency: string;
    currency_name: string;
    currency_symbol: string;
    tld: string;
    native: string;
    region: string;
    region_id: string;
    subregion: string;
    subregion_id: string;
    nationality: string;
    timezones: {
        zoneName: string;
        gmtOffset: number;
        gmtOffsetName: string;
        abbreviation: string;
        tzName: string;
    }[];
    translations: {
        ko: string;
        "pt-BR": string;
        pt: string;
        nl: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        "zh-CN": string;
        tr: string;
        ru: string;
        uk: string;
        pl: string;
        hr?: undefined;
    };
    latitude: string;
    longitude: string;
    emoji: string;
    emojiU: string;
} | undefined;
/**
 * Get cities by state names.
 * @param {string | string[]} stateNames A single state name or a list of state names.
 * @returns {string[]} List of city names
 */
export declare function getCitiesByStateNames(stateNames: string | string[]): string[];
/**
 * Get states by country name.
 * @param {string} countryName Name of the country
 * @returns {string[]} List of state names in the country
 */
export declare function getStatesByCountryName(countryName: string): string[];
