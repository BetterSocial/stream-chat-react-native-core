import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type MessageInputPropsWithContext<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'disabled' | 'members' | 'watchers'> & Pick<MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTextInputProps' | 'asyncIds' | 'asyncUploads' | 'clearEditingState' | 'clearQuotedMessageState' | 'closeAttachmentPicker' | 'editing' | 'FileUploadPreview' | 'fileUploads' | 'giphyActive' | 'ImageUploadPreview' | 'imageUploads' | 'Input' | 'inputBoxRef' | 'InputButtons' | 'isValidMessage' | 'maxNumberOfFiles' | 'mentionedUsers' | 'numberOfUploads' | 'quotedMessage' | 'resetInput' | 'SendButton' | 'sending' | 'sendMessageAsync' | 'setShowMoreOptions' | 'setGiphyActive' | 'showMoreOptions' | 'ShowThreadMessageInChannelButton' | 'removeImage' | 'uploadNewImage'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'Reply' | 'quotedRepliesEnabled'> & Pick<SuggestionsContextValue<Co, Us>, 'componentType' | 'suggestions' | 'suggestionsTitle'> & Pick<ThreadContextValue, 'thread'> & Pick<TranslationContextValue, 't'> & {
    threadList?: boolean;
};
export declare type MessageInputProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<MessageInputPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * UI Component for message input
 * It's a consumer of
 * [Channel Context](https://getstream.github.io/stream-chat-react-native/v3/#channelcontext),
 * [Chat Context](https://getstream.github.io/stream-chat-react-native/v3/#chatcontext),
 * [MessageInput Context](https://getstream.github.io/stream-chat-react-native/v3/#messageinputcontext),
 * [Suggestions Context](https://getstream.github.io/stream-chat-react-native/v3/#suggestionscontext), and
 * [Translation Context](https://getstream.github.io/stream-chat-react-native/v3/#translationcontext)
 */
export declare const MessageInput: {
    <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<MessageInputPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
export {};
