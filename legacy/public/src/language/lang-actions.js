import { SETLANGUAGE } from './lang-actions-type';
import Languages from 'language/';

export const setLanguage = ( lang ) => {
  return { type: SETLANGUAGE, payload: Languages[lang] };
};