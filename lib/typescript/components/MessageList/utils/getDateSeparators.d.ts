import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type GetDateSeparatorsParams<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    messages: PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us>['messages'] | ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>['threadMessages'];
    hideDateSeparators?: boolean;
    userId?: string;
};
export declare type DateSeparators = {
    [key: string]: Date;
};
export declare const getDateSeparators: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(params: GetDateSeparatorsParams<At, Ch, Co, Ev, Me, Re, Us>) => DateSeparators;
