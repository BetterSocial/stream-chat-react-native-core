import React from 'react';
import { MessageInputProps } from '../MessageInput/MessageInput';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import type { MessageListProps } from '../MessageList/MessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type ThreadPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'client'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'MessageList'> & Pick<ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'closeThread' | 'loadMoreThread' | 'reloadThread' | 'thread'> & {
    /**
     * Additional props for underlying MessageInput component.
     * Available props - https://getstream.github.io/stream-chat-react-native/v3/#messageinput
     * */
    additionalMessageInputProps?: Partial<MessageInputProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Additional props for underlying MessageList component.
     * Available props - https://getstream.github.io/stream-chat-react-native/v3/#messagelist
     * */
    additionalMessageListProps?: Partial<MessageListProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /** Make input focus on mounting thread */
    autoFocus?: boolean;
    /** Closes thread on dismount, defaults to true */
    closeThreadOnDismount?: boolean;
    /** Disables the thread UI. So MessageInput and MessageList will be disabled. */
    disabled?: boolean;
    /**
     * **Customized MessageInput component to used within Thread instead of default MessageInput
     * **Available from [MessageInput](https://getstream.github.io/stream-chat-react-native/v3/#messageinput)**
     */
    MessageInput?: React.ComponentType<MessageInputProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * Call custom function on closing thread if handling thread state elsewhere
     */
    onThreadDismount?: () => void;
};
export declare type ThreadProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<ThreadPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * Thread - The Thread renders a parent message with a list of replies. Use the standard message list of the main channel's messages.
 * The thread is only used for the list of replies to a message.
 *
 * Thread is a consumer of [channel context](https://getstream.github.io/stream-chat-react-native/v3/#channelcontext)
 * Underlying MessageList, MessageInput and Message components can be customized using props:
 * - additionalMessageListProps
 * - additionalMessageInputProps
 */
export declare const Thread: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<ThreadPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>) => JSX.Element;
export {};
