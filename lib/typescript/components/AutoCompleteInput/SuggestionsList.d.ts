import React from 'react';
import { SuggestionComponentType, Suggestions } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultCommandType, DefaultUserType, UnknownType } from '../../types/types';
export declare type SuggestionsListProps<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    active: boolean;
    componentType: SuggestionComponentType<Co, Us>;
    suggestions: Suggestions<Co, Us>;
    suggestionsTitle?: React.ReactElement;
};
export declare const SuggestionsList: {
    <Co extends string = import("stream-chat").LiteralStringForUnion, Us extends UnknownType = DefaultUserType>(props: SuggestionsListProps<Co, Us>): JSX.Element | null;
    displayName: string;
};
