import React, { PropsWithChildren } from 'react';
import { KeyboardAvoidingViewProps } from 'react-native';
import { Channel as ChannelType, SendMessageAPIResponse, StreamChat, Message as StreamMessage } from 'stream-chat';
import { LoadingErrorProps } from '../Indicators/LoadingErrorIndicator';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { InputMessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { PaginatedMessageListContextValue } from '../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import { ReactionData } from '../../utils/utils';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare const reactionData: ReactionData[];
export declare type ChannelPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'channel' | 'EmptyStateIndicator' | 'enableMessageGroupingByUser' | 'enforceUniqueReaction' | 'giphyEnabled' | 'hideStickyDateHeader' | 'hideDateSeparators' | 'LoadingIndicator' | 'maxTimeBetweenGroupedMessages' | 'NetworkDownIndicator' | 'StickyHeader'>> & Pick<ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'client'> & Partial<Omit<InputMessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'quotedMessage' | 'editing' | 'clearEditingState' | 'clearQuotedMessageState' | 'sendMessage'>> & Partial<SuggestionsContextValue<Co, Us>> & Pick<TranslationContextValue, 't'> & Partial<Pick<PaginatedMessageListContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'messages' | 'loadingMore' | 'loadingMoreRecent'>> & Partial<Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps' | 'animatedLongPress' | 'Attachment' | 'AttachmentActions' | 'blockUser' | 'Card' | 'CardCover' | 'CardFooter' | 'CardHeader' | 'copyMessage' | 'DateHeader' | 'deleteMessage' | 'disableTypingIndicator' | 'dismissKeyboardOnMessageTouch' | 'editMessage' | 'FileAttachment' | 'FileAttachmentIcon' | 'FileAttachmentGroup' | 'flagMessage' | 'FlatList' | 'forceAlignMessages' | 'formatDate' | 'Gallery' | 'Giphy' | 'handleBlock' | 'handleCopy' | 'handleDelete' | 'handleEdit' | 'handleFlag' | 'handleMute' | 'handleReaction' | 'handleQuotedReply' | 'handleRetry' | 'handleThreadReply' | 'InlineDateSeparator' | 'InlineUnreadIndicator' | 'legacyImageViewerSwipeBehaviour' | 'markdownRules' | 'Message' | 'messageActions' | 'MessageAvatar' | 'MessageContent' | 'messageContentOrder' | 'MessageDeleted' | 'MessageFooter' | 'MessageHeader' | 'MessageList' | 'MessageReplies' | 'MessageRepliesAvatars' | 'MessageSimple' | 'MessageStatus' | 'MessageSystem' | 'MessageText' | 'muteUser' | 'myMessageTheme' | 'onDoubleTapMessage' | 'onLongPressMessage' | 'onPressInMessage' | 'onPressMessage' | 'OverlayReactionList' | 'quotedReply' | 'ReactionList' | 'Reply' | 'retry' | 'ScrollToBottomButton' | 'selectReaction' | 'supportedReactions' | 'threadReply' | 'TypingIndicator' | 'TypingIndicatorContainer' | 'UrlPreview'>> & Partial<Pick<ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'allowThreadMessagesInChannel' | 'thread'>> & {
    /**
     * Additional props passed to keyboard avoiding view
     */
    additionalKeyboardAvoidingViewProps?: Partial<KeyboardAvoidingViewProps>;
    /**
     * Disables the channel UI if the channel is frozen
     */
    disableIfFrozenChannel?: boolean;
    /**
     * When true, disables the KeyboardCompatibleView wrapper
     *
     * Channel internally uses the [KeyboardCompatibleView](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx)
     * component to adjust the height of Channel when the keyboard is opened or dismissed. This prop provides the ability to disable this functionality in case you
     * want to use [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview) or handle dismissal yourself.
     * KeyboardAvoidingView works well when your component occupies 100% of screen height, otherwise it may raise some issues.
     */
    disableKeyboardCompatibleView?: boolean;
    /**
     * Overrides the Stream default mark channel read request (Advanced usage only)
     * @param channel Channel object
     */
    doMarkReadRequest?: (channel: ChannelType<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Overrides the Stream default send message request (Advanced usage only)
     * @param channelId
     * @param messageData Message object
     */
    doSendMessageRequest?: (channelId: string, messageData: StreamMessage<At, Me, Us>) => Promise<SendMessageAPIResponse<At, Ch, Co, Me, Re, Us>>;
    /**
     * Overrides the Stream default update message request (Advanced usage only)
     * @param channelId
     * @param updatedMessage UpdatedMessage object
     */
    doUpdateMessageRequest?: (channelId: string, updatedMessage: Parameters<StreamChat<At, Ch, Co, Ev, Me, Re, Us>['updateMessage']>[0]) => ReturnType<StreamChat<At, Ch, Co, Ev, Me, Re, Us>['updateMessage']>;
    /**
     * E.g. Once unread count exceeds 255, display unread count as 255+ instead of actual count.
     * Also 255 is the limit per Stream chat channel for unread count.
     */
    globalUnreadCountLimit?: number;
    /**
     * When true, messageList will be scrolled at first unread message, when opened.
     */
    initialScrollToFirstUnreadMessage?: boolean;
    keyboardBehavior?: KeyboardAvoidingViewProps['behavior'];
    /**
     * Custom wrapper component that handles height adjustment of Channel component when keyboard is opened or dismissed
     * Default component (accepts the same props): [KeyboardCompatibleView](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/KeyboardCompatibleView/KeyboardCompatibleView.tsx)
     *
     * **Example:**
     *
     * ```
     * <Channel
     *  channel={channel}
     *  KeyboardCompatibleView={(props) => {
     *    return (
     *      <KeyboardCompatibleView>
     *        {props.children}
     *      </KeyboardCompatibleView>
     *    )
     *  }}
     * />
     * ```
     */
    KeyboardCompatibleView?: React.ComponentType<KeyboardAvoidingViewProps>;
    keyboardVerticalOffset?: number;
    /**
     * Custom loading error indicator to override the Stream default
     */
    LoadingErrorIndicator?: React.ComponentType<LoadingErrorProps>;
    maxMessageLength?: number;
    messageId?: string;
    mutesEnabled?: boolean;
    newMessageStateUpdateThrottleInterval?: number;
    quotedRepliesEnabled?: boolean;
    reactionsEnabled?: boolean;
    readEventsEnabled?: boolean;
    stateUpdateThrottleInterval?: number;
    threadRepliesEnabled?: boolean;
    typingEventsEnabled?: boolean;
    uploadsEnabled?: boolean;
};
export declare type ChannelProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<ChannelPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 *
 * The wrapper component for a chat channel. Channel needs to be placed inside a Chat component
 * to receive the StreamChat client instance. MessageList, Thread, and MessageInput must be
 * children of the Channel component to receive the ChannelContext.
 *
 * @example ./Channel.md
 */
export declare const Channel: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: React.PropsWithChildren<Partial<ChannelPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>>) => JSX.Element;
