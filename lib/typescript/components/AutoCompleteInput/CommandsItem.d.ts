import type { SuggestionCommand } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultCommandType } from '../../types/types';
export declare type CommandsItemProps<Co extends string = DefaultCommandType> = {
    /**
     * A CommandResponse of suggested CommandTypes with these properties
     *
     * - args: Arguments which can be passed to the command
     * - name: Name of the command
     */
    item: SuggestionCommand<Co>;
};
export declare const CommandsItem: {
    <Co extends string = import("stream-chat").LiteralStringForUnion>({ item: { args, name }, }: CommandsItemProps<Co>): JSX.Element;
    displayName: string;
};
