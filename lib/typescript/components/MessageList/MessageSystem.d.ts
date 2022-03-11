import { StyleProp, ViewStyle } from 'react-native';
import { TDateTimeParserInput } from '../../contexts/translationContext/TranslationContext';
import type { MessageType } from './hooks/useMessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type MessageSystemProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /** Current [message object](https://getstream.io/chat/docs/#message_format) */
    message: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Formatter function for date object.
     *
     * @param date TDateTimeParserInput object of message
     * @returns string
     */
    formatDate?: (date: TDateTimeParserInput) => string;
    style?: StyleProp<ViewStyle>;
};
/**
 * A component to display system message. e.g, when someone updates the channel,
 * they can attach a message with that update. That message will be available
 * in message list as (type) system message.
 */
export declare const MessageSystem: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: MessageSystemProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
