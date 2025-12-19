import { useSettings } from '@/contexts/SettingsContext';
import { translations, TranslationKey } from '@/lib/translations';

export const useTranslation = () => {
  const { settings } = useSettings();
  
  const t = (key: TranslationKey): string => {
    return translations[settings.language][key];
  };
  
  return { t, language: settings.language };
};
