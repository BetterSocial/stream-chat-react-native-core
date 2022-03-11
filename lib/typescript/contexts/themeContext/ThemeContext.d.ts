import React from 'react';
import { Theme } from './utils/theme';
export declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export declare type ThemeProviderInputValue = {
    mergedStyle?: Theme;
    style?: DeepPartial<Theme>;
};
export declare type MergedThemesParams = {
    style?: DeepPartial<Theme>;
    theme?: Theme;
};
export declare const mergeThemes: (params: MergedThemesParams) => Theme;
export declare const ThemeContext: React.Context<Theme>;
export declare const ThemeProvider: React.FC<ThemeProviderInputValue>;
export declare const useTheme: () => {
    theme: Theme;
};
