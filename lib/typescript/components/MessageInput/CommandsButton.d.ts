import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { GestureResponderEvent } from 'react-native';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type CommandsButtonPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'disabled'> & Pick<SuggestionsContextValue<Co, Us>, 'suggestions'> & {
    /** Function that opens commands selector */
    handleOnPress?: ((event: GestureResponderEvent) => void) & (() => void);
};
export declare type CommandsButtonProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<CommandsButtonPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * UI Component for attach button in MessageInput component.
 */
export declare const CommandsButton: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<CommandsButtonPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
export {};
