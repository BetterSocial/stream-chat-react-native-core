import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Alignment } from '../../../contexts/messageContext/MessageContext';
import type { MessageFooterProps } from './MessageFooter';
import type { MessageType } from '../../MessageList/hooks/useMessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
declare type MessageDeletedComponentProps = {
    formattedDate: string | Date;
    groupStyle: string;
    noBorder: boolean;
    onLayout: (event: LayoutChangeEvent) => void;
};
export declare type MessageDeletedProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = MessageDeletedComponentProps & {
    alignment?: Alignment;
    message?: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    MessageFooter?: React.ComponentType<MessageFooterProps<At, Ch, Co, Ev, Me, Re, Us>>;
};
export declare const MessageDeleted: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(props: MessageDeletedProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
export {};
