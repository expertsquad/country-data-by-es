"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = getAllCountries;
exports.getAllCountryNames = getAllCountryNames;
exports.getCountryDetailsByName = getCountryDetailsByName;
exports.getCitiesByStateNames = getCitiesByStateNames;
exports.getStatesByCountryName = getStatesByCountryName;
const state_json_1 = __importDefault(require("./data/state.json"));
const city_json_1 = __importDefault(require("./data/city.json"));
const country_json_1 = __importDefault(require("./data/country.json"));
// Function Definitions
/**
 * Get all countries.
 * @returns {ICountry[]} List of all countries
 */
function getAllCountries() {
    return country_json_1.default;
}
/**
 * Get the names of all countries.
 * @returns {string[]} List of country names
 */
function getAllCountryNames() {
    return country_json_1.default.map((country) => country.name);
}
/**
 * Get country details by country name.
 * @param {string} countryName Name of the country
 * @returns {ICountry | undefined} Country details if found, undefined otherwise
 */
function getCountryDetailsByName(countryName) {
    return country_json_1.default.find((country) => country.name.toLowerCase() === countryName.toLowerCase());
}
/**
 * Get cities by state names.
 * @param {string | string[]} stateNames A single state name or a list of state names.
 * @returns {string[]} List of city names
 */
function getCitiesByStateNames(stateNames) {
    // Ensure stateNames is always an array
    const statesArray = Array.isArray(stateNames) ? stateNames : [stateNames];
    //@ts-ignore
    const citiesByStateName = city_json_1.default.filter((city) => statesArray.includes(city.state_name));
    return citiesByStateName.map((city) => city.name);
}
/**
 * Get states by country name.
 * @param {string} countryName Name of the country
 * @returns {string[]} List of state names in the country
 */
function getStatesByCountryName(countryName) {
    const statesByCountryName = state_json_1.default.filter((state) => state.country_name === countryName);
    return statesByCountryName.map((state) => state.name);
}
