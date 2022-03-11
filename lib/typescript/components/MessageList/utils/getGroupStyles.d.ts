import type { DateSeparators } from './getDateSeparators';
import type { GroupType } from '../hooks/useMessageList';
import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type GetGroupStylesParams<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    dateSeparators: DateSeparators;
    messages: PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us>['messages'] | ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>['threadMessages'];
    hideDateSeparators?: boolean;
    maxTimeBetweenGroupedMessages?: number;
    noGroupByUser?: boolean;
    userId?: string;
};
export declare const getGroupStyles: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(params: GetGroupStylesParams<At, Ch, Co, Ev, Me, Re, Us>) => {
    [key: string]: GroupType[];
};
