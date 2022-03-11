import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
export declare const getReadStates: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(clientUserId: string | undefined, messages: import("stream-chat").FormatMessageResponse<At, Ch, Co, Me, Re, Us>[], read?: Record<string, {
    last_read: Date;
    user: import("stream-chat").UserResponse<Us>;
}> | undefined) => {
    [key: string]: number | boolean;
};
