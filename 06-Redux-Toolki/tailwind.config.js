/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",

  // Path to the Tremor module
  "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')];