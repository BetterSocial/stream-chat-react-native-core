import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type AutoCompleteInputPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'giphyEnabled'> & Pick<MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTextInputProps' | 'autoCompleteSuggestionsLimit' | 'giphyActive' | 'maxMessageLength' | 'mentionAllAppUsersEnabled' | 'mentionAllAppUsersQuery' | 'numberOfLines' | 'onChange' | 'setGiphyActive' | 'setInputBoxRef' | 'setShowMoreOptions' | 'text' | 'triggerSettings'> & Pick<SuggestionsContextValue<Co, Us>, 'closeSuggestions' | 'openSuggestions' | 'updateSuggestions'> & Pick<TranslationContextValue, 't'>;
export declare type AutoCompleteInputProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<AutoCompleteInputPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
export declare const AutoCompleteInput: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<AutoCompleteInputPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
export {};
