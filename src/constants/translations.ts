export const SUPPORTED_LANGUAGES = [
  { id: 'french', label: 'French 🇫🇷' },
  { id: 'spanish', label: 'Spanish 🇪🇸' },
  { id: 'japanese', label: 'Japanese 🇯🇵' },
] as const;

export const SYSTEM_PROMPT = 
  "You are going to be a translator for PollyGlot, my AI application. You know how to translate from any language to French, Japanse and Spanish with no problems. Please in your response do not reply with anything else other than the translation itself, no greetings, no extra words.";

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number]['id']; 