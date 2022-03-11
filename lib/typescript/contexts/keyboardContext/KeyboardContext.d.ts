import React from 'react';
import type { UnknownType } from '../../types/types';
export declare type KeyboardContextValue = {
    dismissKeyboard: () => void;
};
export declare const KeyboardContext: React.Context<KeyboardContextValue>;
export declare const KeyboardProvider: React.FC<{
    value: KeyboardContextValue;
}>;
export declare const useKeyboardContext: () => KeyboardContextValue;
export declare const withKeyboardContext: <P extends UnknownType>(Component: React.ComponentType<P>) => React.FC<Omit<P, "dismissKeyboard">>;
