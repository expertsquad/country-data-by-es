import states from "./data/state.json";
import cities from "./data/city.json";
import countries from "./data/country.json";

// Interface Definitions

interface IStates {
  _id: { $oid: string };
  name: string;
  country_name: string;
}

interface ICities {
  _id: { $oid: string };
  name: string;
  state_name: string;
}

interface ITimeZone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

interface ICountry {
  _id: { $oid: string };
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
  region_id: any;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: ITimeZone[];
  translations: { [key: string]: string }; // Changed to an object to allow for multiple language translations
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

// Function Definitions

/**
 * Get all countries.
 * @returns {ICountry[]} List of all countries
 */
export function getAllCountries(): any {
  return countries;
}

/**
 * Get the names of all countries.
 * @returns {string[]} List of country names
 */
export function getAllCountryNames(): string[] {
  return countries.map((country) => country.name);
}

/**
 * Get country details by country name.
 * @param {string} countryName Name of the country
 * @returns {ICountry | undefined} Country details if found, undefined otherwise
 */
export function getCountryDetailsByName(countryName: string) {
  return countries.find(
    (country: any) => country.name.toLowerCase() === countryName.toLowerCase()
  );
}

/**
 * Get cities by state names.
 * @param {string | string[]} stateNames A single state name or a list of state names.
 * @returns {string[]} List of city names
 */
export function getCitiesByStateNames(stateNames: string | string[]): string[] {
  // Ensure stateNames is always an array
  const statesArray = Array.isArray(stateNames) ? stateNames : [stateNames];
  //@ts-ignore
  const citiesByStateName = cities.filter((city: ICities) =>
    statesArray.includes(city.state_name)
  );

  return citiesByStateName.map((city: ICities) => city.name);
}

/**
 * Get states by country name.
 * @param {string} countryName Name of the country
 * @returns {string[]} List of state names in the country
 */
export function getStatesByCountryName(countryName: string): string[] {
  const statesByCountryName = states.filter(
    (state: IStates) => state.country_name === countryName
  );
  return statesByCountryName.map((state: IStates) => state.name);
}
