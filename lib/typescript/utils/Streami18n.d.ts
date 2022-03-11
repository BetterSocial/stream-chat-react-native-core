import Dayjs from 'dayjs';
import { FallbackLng, TFunction } from 'i18next';
import enTranslations from '../i18n/en.json';
import 'dayjs/locale/fr';
import 'dayjs/locale/hi';
import 'dayjs/locale/it';
import 'dayjs/locale/ja';
import 'dayjs/locale/ko';
import 'dayjs/locale/nl';
import 'dayjs/locale/ru';
import 'dayjs/locale/tr';
/**
 * These locale imports also set these locales globally.
 * So as a last step we import the english locale to make
 * sure we don't mess up languages in other places in the app.
 */
import 'dayjs/locale/en';
import type moment from 'moment';
import type { TDateTimeParser } from '../contexts/translationContext/TranslationContext';
import type { UnknownType } from '../types/types';
declare type Options = {
    DateTimeParser?: typeof Dayjs | typeof moment;
    dayjsLocaleConfigForLanguage?: Partial<ILocale>;
    debug?: boolean;
    disableDateTimeTranslations?: boolean;
    language?: string;
    logger?: (msg?: string) => void;
    translationsForLanguage?: Partial<typeof enTranslations>;
};
declare type I18NextConfig = {
    debug: boolean;
    fallbackLng: false | FallbackLng;
    interpolation: {
        escapeValue: boolean;
    };
    keySeparator: false | string;
    lng: string;
    nsSeparator: false | string;
    parseMissingKeyHandler: (key: string) => string;
};
export declare class Streami18n {
    i18nInstance: import("i18next").i18n;
    Dayjs: null;
    setLanguageCallback: (t: TFunction) => void;
    initialized: boolean;
    t: TFunction;
    tDateTimeParser: TDateTimeParser;
    translations: {
        [key: string]: {
            [key: string]: Partial<typeof enTranslations> | UnknownType;
        };
    };
    /**
     * dayjs.defineLanguage('nl') also changes the global locale. We don't want to do that
     * when a user calls the registerTranslation() function. So instead we will store the
     * locale configs given to the registerTranslation() function in `dayjsLocales` object,
     * and register the required locale with moment when setLanguage is called.
     */
    dayjsLocales: {
        [key: string]: Partial<ILocale>;
    };
    /**
     * Initialize properties used in constructor
     */
    logger: (msg?: string) => void;
    currentLanguage: string;
    DateTimeParser: typeof Dayjs | typeof moment;
    isCustomDateTimeParser: boolean;
    i18nextConfig: I18NextConfig;
    /**
     * Constructor accepts following options:
     *  - language (String) default: 'en'
     *    Language code e.g., en, tr
     *
     *  - translationsForLanguage (object)
     *    Translations object. Please check src/i18n/en.json for example.
     *
     *  - disableDateTimeTranslations (boolean) default: false
     *    Disable translations for date-times
     *
     *  - debug (boolean) default: false
     *    Enable debug mode in internal i18n class
     *
     *  - logger (function) default: () => {}
     *    Logger function to log warnings/errors from this class
     *
     *  - dayjsLocaleConfigForLanguage (object) default: 'enConfig'
     *    [Config object](https://momentjs.com/docs/#/i18n/changing-locale/) for internal moment object,
     *    corresponding to language (param)
     *
     *  - DateTimeParser (function) Moment or Dayjs instance/function.
     *    Make sure to load all the required locales in this Moment or Dayjs instance that you will be provide to Streami18n
     *
     * @param {*} options
     */
    constructor(options?: Options, i18nextConfig?: Partial<I18NextConfig>);
    /**
     * Initializes the i18next instance with configuration (which enables natural language as default keys)
     */
    init(): Promise<{
        t: TFunction;
        tDateTimeParser: TDateTimeParser;
    }>;
    localeExists: (language: string) => boolean;
    validateCurrentLanguage: () => void;
    /** Returns an instance of i18next used within this class instance */
    geti18Instance: () => import("i18next").i18n;
    /** Returns list of available languages. */
    getAvailableLanguages: () => string[];
    /** Returns all the translation dictionary for all inbuilt-languages */
    getTranslations: () => {
        [key: string]: {
            [key: string]: UnknownType | Partial<{
                "1 Reply": string;
                "1 Thread Reply": string;
                "Allow access to your Gallery": string;
                "Also send to channel": string;
                "Are you sure you want to permanently delete this message?": string;
                "Block User": string;
                Cancel: string;
                "Copy Message": string;
                Delete: string;
                "Delete Message": string;
                Dismiss: string;
                "Do you want to send a copy of this message to a moderator for further investigation?": string;
                "Edit Message": string;
                "Editing Message": string;
                "Emoji matching": string;
                "Empty message...": string;
                "Error loading": string;
                "Error loading channel list...": string;
                "Error loading messages for this channel...": string;
                "Error while loading, please reload/refresh": string;
                Flag: string;
                "Flag Message": string;
                "Instant Commands": string;
                "Loading channels...": string;
                "Loading messages...": string;
                "Loading...": string;
                "Message Reactions": string;
                "Message deleted": string;
                "Message flagged": string;
                "Mute User": string;
                "Nothing yet...": string;
                "Only visible to you": string;
                Photo: string;
                Photos: string;
                "Please enable access to your photos and videos so you can share them.": string;
                "Please select a channel first": string;
                "Reconnecting...": string;
                Reply: string;
                "Reply to Message": string;
                Resend: string;
                "Search GIFs": string;
                "Send a message": string;
                "Something went wrong": string;
                "The message has been reported to a moderator.": string;
                "The operation couldn't be completed.": string; /**
                 * Hindi notation for meridiems are quite fuzzy in practice. While there exists
                 * a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
                 */
                "Thread Reply": string;
                "Unblock User": string;
                "Unknown User": string;
                "Unmute User": string;
                "Unread Messages": string;
                You: string;
                "{{ firstUser }} and {{ nonSelfUserLength }} more are typing": string;
                "{{ index }} of {{ photoLength }}": string;
                "{{ replyCount }} Replies": string;
                "{{ replyCount }} Thread Replies": string;
                "{{ user }} is typing": string;
                "\uD83C\uDFD9 Attachment...": string;
            }>;
        };
    };
    /**
     * Returns current version translator function.
     */
    getTranslators(): Promise<{
        t: TFunction;
        tDateTimeParser: TDateTimeParser;
    }>;
    /**
     * Register translation
     */
    registerTranslation(language: string, translation: Partial<typeof enTranslations> | UnknownType, customDayjsLocale?: Partial<ILocale>): void;
    addOrUpdateLocale(key: string, config: Partial<ILocale>): void;
    /**
     * Changes the language.
     */
    setLanguage(language: string): Promise<TFunction | undefined>;
    registerSetLanguageCallback(callback: (t: TFunction) => void): void;
}
export {};
