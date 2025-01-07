const en = require('./translations.en.json');
const pl = require('./translations.pl.json');

const i18n = {
  translations: {
    en,
    pl,
  },
  defaultLang: 'pl',
  useBrowserDefault: true,
  languageDataStore: 'localStorage',
};

module.exports = i18n;
