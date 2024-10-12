export const api = {
  ALL_COUNTRIES: 'https://restcountries.com/v3.1/all',
  COUNTRIES_BY_NAME: (name: string) => `https://restcountries.com/v3.1/name/${name}`,
} as const;
