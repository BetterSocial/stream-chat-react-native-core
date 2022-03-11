import { ColorValue } from 'react-native';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import { TranslationContextValue } from '../../../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type MessageRepliesPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'alignment' | 'message' | 'onLongPress' | 'onPress' | 'onPressIn' | 'onOpenThread' | 'preventPress' | 'threadList'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'MessageRepliesAvatars'> & Pick<TranslationContextValue, 't'> & {
    noBorder?: boolean;
    repliesCurveColor?: ColorValue;
};
export declare type MessageRepliesProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<MessageRepliesPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
export declare const MessageReplies: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<MessageRepliesPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
