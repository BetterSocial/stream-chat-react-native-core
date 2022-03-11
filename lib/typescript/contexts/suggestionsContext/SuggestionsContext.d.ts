import React, { PropsWithChildren } from 'react';
import type { CommandResponse, UserResponse } from 'stream-chat';
import type { Emoji } from '../../emoji-data/compiled';
import type { DefaultCommandType, DefaultUserType, UnknownType } from '../../types/types';
export declare type SuggestionComponentType<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = string | React.ReactElement<{
    item: Suggestion<Co, Us>;
}>;
export declare const isSuggestionCommand: <Co extends string = import("stream-chat").LiteralStringForUnion, Us extends UnknownType = DefaultUserType>(suggestion: Suggestion<Co, Us>) => suggestion is SuggestionCommand<Co>;
export declare const isSuggestionEmoji: <Co extends string = import("stream-chat").LiteralStringForUnion, Us extends UnknownType = DefaultUserType>(suggestion: Suggestion<Co, Us>) => suggestion is Emoji;
export declare const isSuggestionUser: <Co extends string = import("stream-chat").LiteralStringForUnion, Us extends UnknownType = DefaultUserType>(suggestion: Suggestion<Co, Us>) => suggestion is SuggestionUser<Us>;
export declare type Suggestion<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = SuggestionCommand<Co> | SuggestionUser<Us> | Emoji;
export declare type SuggestionCommand<Co extends string = DefaultCommandType> = CommandResponse<Co>;
export declare type SuggestionUser<Us extends UnknownType = DefaultUserType> = UserResponse<Us>;
export declare type Suggestions<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    data: Suggestion<Co, Us>[];
    onSelect: (item: Suggestion<Co, Us>) => void;
};
export declare type SuggestionsContextValue<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    /** Override handler for closing suggestions (mentions, command autocomplete etc) */
    closeSuggestions: () => void;
    /**
     * Override handler for opening suggestions (mentions, command autocomplete etc)
     *
     * @param component {Component|element} UI Component for suggestion item.
     * @param title {string} Title for suggestions box
     *
     * @overrideType Function
     */
    openSuggestions: (component: SuggestionComponentType<Co, Us>, title?: React.ReactElement) => Promise<void>;
    /**
     * Override handler for updating suggestions (mentions, command autocomplete etc)
     *
     * @param newSuggestions {Component|element} UI Component for suggestion item.
     * @param newSuggestionsTitle {string} Title for suggestions box
     *
     * @overrideType Function
     */
    updateSuggestions: (newSuggestions: Suggestions<Co, Us>, newSuggestionsTitle?: React.ReactElement) => void;
    componentType?: SuggestionComponentType<Co, Us>;
    suggestions?: Suggestions<Co, Us>;
    suggestionsTitle?: React.ReactElement;
    suggestionsViewActive?: boolean;
};
export declare const SuggestionsContext: React.Context<SuggestionsContextValue<import("stream-chat").LiteralStringForUnion, DefaultUserType>>;
/**
 * This provider component exposes the properties stored within the SuggestionsContext.
 */
export declare const SuggestionsProvider: <Co extends string = import("stream-chat").LiteralStringForUnion, Us extends UnknownType = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value?: Partial<SuggestionsContextValue<Co, Us>> | undefined;
}>) => JSX.Element;
export declare const useSuggestionsContext: <Co extends string = import("stream-chat").LiteralStringForUnion, Us extends UnknownType = DefaultUserType>() => SuggestionsContextValue<Co, Us>;
export declare const withSuggestionsContext: <P extends UnknownType, Co extends string = import("stream-chat").LiteralStringForUnion, Us extends UnknownType = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof SuggestionsContextValue<Co, Us>>>;
