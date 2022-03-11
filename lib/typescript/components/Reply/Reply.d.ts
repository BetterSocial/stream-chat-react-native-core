import { ImageStyle, ViewStyle } from 'react-native';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type ReplyPropsWithContext<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'quotedMessage'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'FileAttachmentIcon' | 'MessageAvatar'> & Pick<TranslationContextValue, 't'> & {
    attachmentSize?: number;
    styles?: Partial<{
        container: ViewStyle;
        fileAttachmentContainer: ViewStyle;
        imageAttachment: ImageStyle;
        messageContainer: ViewStyle;
        textContainer: ViewStyle;
    }>;
};
export declare type ReplyProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<ReplyPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * UI Component for reply
 */
export declare const Reply: {
    <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<ReplyPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
export {};
