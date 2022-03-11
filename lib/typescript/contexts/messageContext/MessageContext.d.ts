import React, { PropsWithChildren } from 'react';
import type { Attachment } from 'stream-chat';
import type { ActionHandler } from '../../components/Attachment/Attachment';
import type { TouchableHandlerPayload } from '../../components/Message/Message';
import type { GroupType, MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import type { MessageContentType } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type Alignment = 'right' | 'left';
export declare type Reactions = {
    own: boolean;
    type: string;
}[];
export declare type MessageContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /** Whether or not actions can be performed on message */
    actionsEnabled: boolean;
    /** Position of the message, either 'right' or 'left' */
    alignment: Alignment;
    /**
     * Function that returns a boolean indicating whether or not the user can edit/delete the message.
     */
    canModifyMessage: boolean;
    /** The files attached to a message */
    files: Attachment<At>[];
    /**
     * Position of message in group - top, bottom, middle, single.
     *
     * Message group is a group of consecutive messages from same user. groupStyles can be used to style message as per their position in message group
     * e.g., user avatar (to which message belongs to) is only showed for last (bottom) message in group.
     */
    groupStyles: GroupType[];
    /** Handler for actions. Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands). */
    handleAction: ActionHandler;
    handleDeleteMessage: () => Promise<void>;
    handleEditMessage: () => void;
    handleQuotedReplyMessage: () => void;
    handleResendMessage: () => Promise<void>;
    handleToggleBanUser: () => Promise<void>;
    handleToggleMuteUser: () => Promise<void>;
    handleToggleReaction: (reactionType: string) => Promise<void>;
    /** Whether or not message has reactions */
    hasReactions: boolean;
    /** The images attached to a message */
    images: Attachment<At>[];
    /** Whether or not this is the active user's message */
    isMyMessage: boolean;
    /** Whether or not this is the last message in a group of messages */
    lastGroupMessage: boolean;
    /** Current [message object](https://getstream.io/chat/docs/#message_format) */
    message: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    /** Order to render the message content */
    messageContentOrder: MessageContentType[];
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Message/Message.tsx)
     *
     * By default, we show the overlay with all the message actions on long press.
     *
     * @param event   Event object for onLongPress event
     */
    onLongPress: (payload: TouchableHandlerPayload) => void;
    /** Whether the message is only text and the text is only emojis */
    onlyEmojis: boolean;
    /** Handler to open a thread on a message */
    onOpenThread: () => void;
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Message/Message.tsx)
     *
     * By default, we will dismiss the keyboard on press.
     *
     * @param event   Event object for onPress event
     */
    onPress: (payload: TouchableHandlerPayload) => void;
    onPressIn: ((payload: TouchableHandlerPayload) => void) | null;
    /** The images attached to a message */
    otherAttachments: Attachment<At>[];
    reactions: Reactions;
    showMessageOverlay: (messageReactions?: boolean) => void;
    showMessageStatus: boolean;
    /** Whether or not the Message is part of a Thread */
    threadList: boolean;
    goToMessage?: (messageId: string) => void;
    /** Latest message id on current channel */
    lastReceivedId?: string;
    /** Prevent message being pressed for image viewer view */
    preventPress?: boolean;
    /** Whether or not the avatar show show next to Message */
    showAvatar?: boolean;
} & Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'channel' | 'disabled' | 'members' | 'readEventsEnabled'>;
export declare const MessageContext: React.Context<MessageContextValue<DefaultAttachmentType, DefaultChannelType, import("stream-chat").LiteralStringForUnion, UnknownType, UnknownType, UnknownType, DefaultUserType>>;
export declare const MessageProvider: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value?: MessageContextValue<At, Ch, Co, Ev, Me, Re, Us> | undefined;
}>) => JSX.Element;
export declare const useMessageContext: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if MessageContext
 * typing is desired while using the HOC withMessageContextContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withMessageContext: <P extends UnknownType, At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Omit<P, "channel" | "disabled" | "message" | "onPress" | "onPressIn" | "onLongPress" | "members" | "threadList" | "images" | "readEventsEnabled" | "alignment" | "files" | "groupStyles" | "onlyEmojis" | "otherAttachments" | "messageContentOrder" | "handleAction" | "preventPress" | "actionsEnabled" | "canModifyMessage" | "handleDeleteMessage" | "handleEditMessage" | "handleQuotedReplyMessage" | "handleResendMessage" | "handleToggleBanUser" | "handleToggleMuteUser" | "handleToggleReaction" | "hasReactions" | "isMyMessage" | "lastGroupMessage" | "onOpenThread" | "reactions" | "showMessageOverlay" | "showMessageStatus" | "goToMessage" | "lastReceivedId" | "showAvatar">>;
