import en_us from './en';
import fa_ir from './fa';

const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
export { lang };

const direction = {
  fa: 'rtl',
  en: 'ltr',
};
function getDirection() {
  return direction[lang];
}
export { getDirection };

const fonts = {
  fa: 'IRANSansX',
  en: ['Fauna One', 'sans-serif'].join(','),
};
function getFont() {
  return fonts[lang];
}
export { getFont };

const translates = {
  en: en_us,
  fa: fa_ir,
};
function getTranslate() {
  return translates[lang];
}
export { getTranslate };

function changeLanguage(newLang) {
  if (newLang === lang) {
    return;
  }
  localStorage.setItem('lang', newLang);
  window.location.reload();
}
export { changeLanguage };
