/// <reference types="react" />
import type { Channel, ChannelFilters, ChannelOptions, ChannelSort } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultUserType, UnknownType } from '../../../types/types';
declare type Parameters<Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    filters: ChannelFilters<Ch, Co, Us>;
    options: ChannelOptions;
    sort: ChannelSort<Ch>;
};
export declare const usePaginatedChannels: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ filters, options, sort, }: Parameters<Ch, Co, Us>) => {
    channels: Channel<At, Ch, Co, Ev, Me, Re, Us>[];
    error: boolean;
    hasNextPage: boolean;
    loadingChannels: boolean;
    loadingNextPage: boolean;
    loadNextPage: ((queryType?: string, retryCount?: number) => Promise<void>) | undefined;
    refreshing: boolean;
    refreshList: () => Promise<void> | undefined;
    reloadList: () => Promise<void>;
    setChannels: import("react").Dispatch<import("react").SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>;
};
export {};
