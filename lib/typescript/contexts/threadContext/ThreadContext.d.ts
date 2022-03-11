import React, { PropsWithChildren } from 'react';
import type { ChannelState } from 'stream-chat';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ThreadContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    allowThreadMessagesInChannel: boolean;
    closeThread: () => void;
    loadMoreThread: () => Promise<void>;
    openThread: (message: MessageType<At, Ch, Co, Ev, Me, Re, Us>) => void;
    reloadThread: () => void;
    setThreadLoadingMore: React.Dispatch<React.SetStateAction<boolean>>;
    thread: MessageType<At, Ch, Co, Ev, Me, Re, Us> | null;
    threadHasMore: boolean;
    threadLoadingMore: boolean;
    threadMessages: ChannelState<At, Ch, Co, Ev, Me, Re, Us>['threads'][string];
};
export declare const ThreadContext: React.Context<ThreadContextValue<DefaultAttachmentType, DefaultChannelType, import("stream-chat").LiteralStringForUnion, UnknownType, UnknownType, UnknownType, DefaultUserType>>;
export declare const ThreadProvider: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value: ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>;
}>) => JSX.Element;
export declare const useThreadContext: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if ThreadContext
 * typing is desired while using the HOC withThreadContextContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withThreadContext: <P extends UnknownType, At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>>>;
