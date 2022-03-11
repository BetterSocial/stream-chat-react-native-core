import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { MessageType } from '../MessageList/hooks/useMessageList';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { KeyboardContextValue } from '../../contexts/keyboardContext/KeyboardContext';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessageOverlayContextValue } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type TouchableHandlerPayload = {
    defaultHandler?: () => void;
    emitter?: 'card' | 'fileAttachment' | 'gallery' | 'giphy' | 'message' | 'messageContent' | 'messageReplies' | 'reactionList' | 'textLink' | 'textMention';
    event?: GestureResponderEvent;
};
export declare type MessageTouchableHandlerPayload<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = TouchableHandlerPayload & {
    actionHandlers?: MessageActionHandlers;
    message?: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
};
export declare type MessageActionHandlers = {
    deleteMessage: () => Promise<void>;
    editMessage: () => void;
    quotedReply: () => void;
    resendMessage: () => Promise<void>;
    showMessageOverlay: () => void;
    toggleBanUser: () => Promise<void>;
    toggleMuteUser: () => Promise<void>;
    toggleReaction: (reactionType: string) => Promise<void>;
};
export declare type MessagePropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'channel' | 'disabled' | 'enforceUniqueReaction' | 'isAdmin' | 'isModerator' | 'members' | 'readEventsEnabled'> & Pick<ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'client' | 'mutedUsers'> & Pick<KeyboardContextValue, 'dismissKeyboard'> & Partial<Omit<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'groupStyles' | 'message'>> & Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'groupStyles' | 'message'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'animatedLongPress' | 'blockUser' | 'copyMessage' | 'deleteMessage' | 'dismissKeyboardOnMessageTouch' | 'editMessage' | 'flagMessage' | 'forceAlignMessages' | 'handleBlock' | 'handleCopy' | 'handleDelete' | 'handleEdit' | 'handleFlag' | 'handleMute' | 'handleQuotedReply' | 'handleReaction' | 'handleRetry' | 'handleThreadReply' | 'messageActions' | 'messageContentOrder' | 'MessageSimple' | 'mutesEnabled' | 'muteUser' | 'onDoubleTapMessage' | 'onLongPressMessage' | 'onPressInMessage' | 'onPressMessage' | 'OverlayReactionList' | 'quotedRepliesEnabled' | 'quotedReply' | 'reactionsEnabled' | 'removeMessage' | 'retry' | 'retrySendMessage' | 'selectReaction' | 'setEditingState' | 'setQuotedMessageState' | 'supportedReactions' | 'threadRepliesEnabled' | 'threadReply' | 'updateMessage'> & Pick<MessageOverlayContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'setData'> & Pick<OverlayContextValue, 'setOverlay'> & Pick<ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'openThread'> & Pick<TranslationContextValue, 't'> & {
    messagesContext: MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Whether or not users are able to long press messages.
     */
    enableLongPress?: boolean;
    goToMessage?: (messageId: string) => void;
    /**
     * Array of allowed actions or null on message, this can also be a function returning the array.
     * If all the actions need to be disabled an empty array should be provided as value of prop
     */
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Message/Message.tsx)
     *
     * By default, we show the overlay with all the message actions on long press.
     *
     * @param message Message object which was long pressed
     * @param event   Event object for onLongPress event
     **/
    onLongPress?: (payload: Partial<MessageTouchableHandlerPayload<At, Ch, Co, Ev, Me, Re, Us>>) => void;
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/Message/Message.tsx)
     *
     * By default, we will dismiss the keyboard on press.
     *
     * @param message Message object which was long pressed
     * @param event   Event object for onLongPress event
     * */
    onPress?: (payload: Partial<MessageTouchableHandlerPayload<At, Ch, Co, Ev, Me, Re, Us>>) => void;
    onPressIn?: (payload: Partial<MessageTouchableHandlerPayload<At, Ch, Co, Ev, Me, Re, Us>>) => void;
    /**
     * Handler to open the thread on message. This is callback for touch event for replies button.
     *
     * @param message A message object to open the thread upon.
     */
    onThreadSelect?: (message: MessageType<At, Ch, Co, Ev, Me, Re, Us>) => void;
    showUnreadUnderlay?: boolean;
    style?: StyleProp<ViewStyle>;
    targetedMessage?: boolean;
};
export declare type MessageProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<MessagePropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'groupStyles' | 'message'>> & Pick<MessagePropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'groupStyles' | 'message'>;
/**
 * Message - A high level component which implements all the logic required for a message.
 * The actual rendering of the message is delegated via the "Message" property
 *
 * @example ./Message.md
 */
export declare const Message: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: MessageProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
