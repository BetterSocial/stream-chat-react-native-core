import React from 'react';
import { Alignment } from '../../../contexts/messageContext/MessageContext';
import type { Attachment } from 'stream-chat';
import type { MessageStatusProps } from './MessageStatus';
import type { MessageType } from '../../MessageList/hooks/useMessageList';
import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
declare type MessageFooterComponentProps = {
    formattedDate: string | Date;
    isDeleted?: boolean;
};
export declare type MessageFooterProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Partial<Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'members'>> & MessageFooterComponentProps & {
    alignment?: Alignment;
    lastGroupMessage?: boolean;
    message?: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    MessageStatus?: React.ComponentType<MessageStatusProps<At, Ch, Co, Ev, Me, Re, Us>>;
    otherAttachments?: Attachment<At>[];
    showMessageStatus?: boolean;
};
export declare const MessageFooter: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(props: MessageFooterProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
export {};
