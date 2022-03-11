import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
export declare const useCreatePaginatedMessageListContext: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ channelId, hasMore, loadingMore, loadingMoreRecent, loadMore, loadMoreRecent, messages, setLoadingMore, setLoadingMoreRecent, }: PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us> & {
    channelId?: string | undefined;
}) => PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us>;
