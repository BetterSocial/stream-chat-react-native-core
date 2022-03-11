import React from 'react';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import { TranslationContextValue } from '../../../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type MessageContentPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'alignment' | 'disabled' | 'goToMessage' | 'groupStyles' | 'hasReactions' | 'isMyMessage' | 'lastGroupMessage' | 'members' | 'message' | 'messageContentOrder' | 'onLongPress' | 'onlyEmojis' | 'onPress' | 'onPressIn' | 'otherAttachments' | 'preventPress' | 'showMessageStatus' | 'threadList'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps' | 'Attachment' | 'FileAttachmentGroup' | 'formatDate' | 'Gallery' | 'MessageFooter' | 'MessageHeader' | 'MessageDeleted' | 'MessageReplies' | 'MessageStatus' | 'onPressInMessage' | 'quotedRepliesEnabled' | 'Reply' | 'threadRepliesEnabled'> & Pick<TranslationContextValue, 't' | 'tDateTimeParser'> & {
    setMessageContentWidth: React.Dispatch<React.SetStateAction<number>>;
};
export declare type MessageContentProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<MessageContentPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'setMessageContentWidth'>> & Pick<MessageContentPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'setMessageContentWidth'>;
/**
 * Child of MessageSimple that displays a message's content
 */
export declare const MessageContent: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: MessageContentProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
