import type { ChannelState, MessageResponse } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type UseMessageListParams = {
    inverted?: boolean;
    noGroupByUser?: boolean;
    threadList?: boolean;
};
export declare type GroupType = 'bottom' | 'middle' | 'single' | 'top';
export declare type MessagesWithStylesReadByAndDateSeparator<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageResponse<At, Ch, Co, Me, Re, Us> & {
    groupStyles: GroupType[];
    readBy: boolean | number;
    dateSeparator?: Date;
};
export declare type MessageType<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = ReturnType<ChannelState<At, Ch, Co, Ev, Me, Re, Us>['formatMessage']> | MessagesWithStylesReadByAndDateSeparator<At, Ch, Co, Me, Re, Us>;
export declare const isMessageWithStylesReadByAndDateSeparator: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(message: MessageType<At, Ch, Co, Ev, Me, Re, Us>) => message is MessagesWithStylesReadByAndDateSeparator<At, Ch, Co, Me, Re, Us>;
export declare const useMessageList: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(params: UseMessageListParams) => MessageType<At, Ch, Co, Ev, Me, Re, Us>[];
