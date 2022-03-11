import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { Attachment } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type CardPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Attachment<At> & Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps' | 'CardCover' | 'CardFooter' | 'CardHeader'> & {
    styles?: Partial<{
        authorName: StyleProp<TextStyle>;
        authorNameContainer: StyleProp<ViewStyle>;
        authorNameFooter: StyleProp<TextStyle>;
        authorNameFooterContainer: StyleProp<ViewStyle>;
        authorNameMask: StyleProp<ViewStyle>;
        cardCover: StyleProp<ImageStyle>;
        cardFooter: StyleProp<ViewStyle>;
        container: StyleProp<ViewStyle>;
        description: StyleProp<TextStyle>;
        title: StyleProp<TextStyle>;
    }>;
};
export declare type CardProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Attachment<At> & Partial<Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'onLongPress' | 'onPress' | 'onPressIn'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps' | 'CardCover' | 'CardFooter' | 'CardHeader'>>;
/**
 * UI component for card in attachments.
 */
export declare const Card: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: CardProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
