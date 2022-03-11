import React, { PropsWithChildren } from 'react';
import type { ChannelState } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type PaginatedMessageListContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Has more messages to load
     */
    hasMore: boolean;
    /**
     * Is loading more messages
     */
    loadingMore: boolean;
    /**
     * Is loading more recent messages
     */
    loadingMoreRecent: boolean;
    /**
     * Load more messages
     */
    loadMore: (limit?: number) => Promise<void>;
    /**
     * Load more recent messages
     */
    loadMoreRecent: (limit?: number) => Promise<void>;
    /**
     * Messages from client state
     */
    messages: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['messages'];
    /**
     * Set loadingMore
     */
    setLoadingMore: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Set loadingMoreRecent
     */
    setLoadingMoreRecent: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const PaginatedMessageListContext: React.Context<PaginatedMessageListContextValue<DefaultAttachmentType, DefaultChannelType, import("stream-chat").LiteralStringForUnion, UnknownType, UnknownType, UnknownType, DefaultUserType>>;
export declare const PaginatedMessageListProvider: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value?: PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us> | undefined;
}>) => JSX.Element;
export declare const usePaginatedMessageListContext: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if MessageListContextValue
 * typing is desired while using the HOC withMessageListContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withPaginatedMessageListContext: <P extends UnknownType, At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us>>>;
