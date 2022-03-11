import { Emoji } from '../emoji-data/compiled';
import type React from 'react';
import type { DebouncedFunc } from 'lodash';
import type { Channel, StreamChat } from 'stream-chat';
import type { CommandsItemProps } from '../components/AutoCompleteInput/CommandsItem';
import type { EmojisItemProps } from '../components/AutoCompleteInput/EmojisItem';
import type { MentionsItemProps } from '../components/AutoCompleteInput/MentionsItem';
import type { MentionAllAppUsersQuery } from '../contexts/messageInputContext/MessageInputContext';
import type { SuggestionCommand, SuggestionUser } from '../contexts/suggestionsContext/SuggestionsContext';
import type { IconProps } from '../icons/utils/base';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../types/types';
export declare type ReactionData = {
    Icon: React.FC<IconProps>;
    type: string;
};
export declare const FileState: Readonly<{
    FINISHED: string;
    NO_FILE: string;
    UPLOAD_FAILED: string;
    UPLOADED: string;
    UPLOADING: string;
}>;
export declare const ProgressIndicatorTypes: {
    IN_PROGRESS: 'in_progress';
    RETRY: 'retry';
};
export declare const queryMembersDebounced: DebouncedFunc<(<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>, query: SuggestionUser<Us>["name"], onReady?: ((users: SuggestionUser<Us>[]) => void) | undefined, options?: {
    limit?: number;
}) => Promise<void>)>;
export declare const queryUsersDebounced: DebouncedFunc<(<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>, query: SuggestionUser<Us>["name"], onReady?: ((users: SuggestionUser<Us>[]) => void) | undefined, options?: {
    limit?: number | undefined;
    mentionAllAppUsersQuery?: MentionAllAppUsersQuery<Us> | undefined;
}) => Promise<void>)>;
export declare const isCommandTrigger: (trigger: Trigger) => trigger is "/";
export declare const isEmojiTrigger: (trigger: Trigger) => trigger is ":";
export declare const isMentionTrigger: (trigger: Trigger) => trigger is "@";
export declare type Trigger = '/' | '@' | ':';
export declare type TriggerSettings<Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    '/'?: {
        component: string | React.ComponentType<Partial<CommandsItemProps<Co>>>;
        dataProvider: (query: SuggestionCommand<Co>['name'], text: string, onReady?: (data: SuggestionCommand<Co>[], q: SuggestionCommand<Co>['name']) => void, options?: {
            limit?: number;
        }) => SuggestionCommand<Co>[];
        output: (entity: SuggestionCommand<Co>) => {
            caretPosition: string;
            key: string;
            text: string;
        };
    };
    ':'?: {
        component: string | React.ComponentType<Partial<EmojisItemProps>>;
        dataProvider: (query: Emoji['name'], _: string, onReady?: (data: Emoji[], q: Emoji['name']) => void) => Emoji[];
        output: (entity: Emoji) => {
            caretPosition: string;
            key: string;
            text: string;
        };
    };
    '@'?: {
        callback: (item: SuggestionUser<Us>) => void;
        component: string | React.ComponentType<Partial<MentionsItemProps<Us>>>;
        dataProvider: (query: SuggestionUser<Us>['name'], _: string, onReady?: (data: SuggestionUser<Us>[], q: SuggestionUser<Us>['name']) => void, options?: {
            limit?: number;
            mentionAllAppUsersEnabled?: boolean;
            mentionAllAppUsersQuery?: MentionAllAppUsersQuery<Us>;
        }) => SuggestionUser<Us>[] | Promise<void> | void;
        output: (entity: SuggestionUser<Us>) => {
            caretPosition: string;
            key: string;
            text: string;
        };
    };
};
export declare type ACITriggerSettingsParams<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>;
    onMentionSelectItem: (item: SuggestionUser<Us>) => void;
};
export declare type QueryUsersFunction<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = (client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>, query: SuggestionUser<Us>['name'], onReady?: (users: SuggestionUser<Us>[]) => void, options?: {
    limit?: number;
    mentionAllAppUsersQuery?: MentionAllAppUsersQuery<Us>;
}) => Promise<void>;
export declare type QueryMembersFunction<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = (channel: Channel<At, Ch, Co, Ev, Me, Re, Us>, query: SuggestionUser<Us>['name'], onReady?: (users: SuggestionUser<Us>[]) => void, options?: {
    limit?: number;
}) => Promise<void>;
/**
 * ACI = AutoCompleteInput
 *
 * DataProvider accepts `onReady` function, which will execute once the data is ready.
 * Another approach would have been to simply return the data from dataProvider and let the
 * component await for it and then execute the required logic. We are going for callback instead
 * of async-await since we have debounce function in dataProvider. Which will delay the execution
 * of api call on trailing end of debounce (lets call it a1) but will return with result of
 * previous call without waiting for a1. So in this case, we want to execute onReady, when trailing
 * end of debounce executes.
 */
export declare const ACITriggerSettings: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ channel, client, onMentionSelectItem, }: ACITriggerSettingsParams<At, Ch, Co, Ev, Me, Re, Us>) => TriggerSettings<Co, Us>;
export declare const makeImageCompatibleUrl: (url: string) => string;
export declare const getUrlWithoutParams: (url?: string | undefined) => string | undefined;
export declare const vw: (percentageWidth: number, rounded?: boolean) => number;
export declare const vh: (percentageHeight: number, rounded?: boolean) => number;
export declare const generateRandomId: (a?: string) => string;
export declare const emojiRegex: RegExp;
