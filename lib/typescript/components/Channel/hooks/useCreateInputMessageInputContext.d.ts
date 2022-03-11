/// <reference types="react" />
import type { InputMessageInputContextValue } from '../../../contexts/messageInputContext/MessageInputContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
export declare const useCreateInputMessageInputContext: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ additionalTextInputProps, AttachButton, autoCompleteSuggestionsLimit, autoCompleteTriggerSettings, channelId, clearEditingState, clearQuotedMessageState, CommandsButton, compressImageQuality, doDocUploadRequest, doImageUploadRequest, editing, editMessage, FileUploadPreview, hasCommands, hasFilePicker, hasImagePicker, ImageUploadPreview, initialValue, Input, InputButtons, maxMessageLength, maxNumberOfFiles, mentionAllAppUsersEnabled, mentionAllAppUsersQuery, MoreOptionsButton, numberOfLines, onChangeText, quotedMessage, SendButton, sendImageAsync, sendMessage, setInputRef, setQuotedMessageState, ShowThreadMessageInChannelButton, UploadProgressIndicator, uploadsEnabled, }: {
    AttachButton: import("react").ComponentType<Partial<Pick<import("../../..").ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, "disabled"> & {
        handleOnPress?: (((event: import("react-native").GestureResponderEvent) => void) & (() => void)) | undefined;
        selectedPicker?: "images" | undefined;
    }>>;
    clearEditingState: () => void;
    clearQuotedMessageState: () => void;
    CommandsButton: import("react").ComponentType<Partial<Pick<import("../../..").ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, "disabled"> & Pick<import("../../..").SuggestionsContextValue<Co, Us>, "suggestions"> & {
        handleOnPress?: (((event: import("react-native").GestureResponderEvent) => void) & (() => void)) | undefined;
    }>>;
    editing: boolean | import("../..").MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    editMessage: (message: import("stream-chat").UpdatedMessage<At, Ch, Co, Me, Re, Us>, userId?: string | {
        id: string;
    } | undefined) => Promise<import("stream-chat").UpdateMessageAPIResponse<At, Ch, Co, Me, Re, Us>>;
    FileUploadPreview: import("react").ComponentType<Partial<Pick<import("../../../contexts/messageInputContext/MessageInputContext").MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, "fileUploads" | "removeFile" | "uploadFile"> & Pick<import("../../..").MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, "FileAttachmentIcon">>>;
    hasCommands: boolean;
    hasFilePicker: boolean;
    hasImagePicker: boolean;
    ImageUploadPreview: import("react").ComponentType<Partial<{
        imageUploads: import("../../../contexts/messageInputContext/MessageInputContext").ImageUpload[];
        removeImage: (id: string) => void;
        uploadImage: ({ newImage }: {
            newImage: import("../../../contexts/messageInputContext/MessageInputContext").ImageUpload;
        }) => Promise<void>;
    }>>;
    maxNumberOfFiles: number;
    MoreOptionsButton: import("react").ComponentType<Partial<Pick<import("../../..").ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, "disabled"> & {
        handleOnPress?: (((event: import("react-native").GestureResponderEvent) => void) & (() => void)) | undefined;
    }>>;
    numberOfLines: number;
    quotedMessage: boolean | import("../..").MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    SendButton: import("react").ComponentType<Partial<Pick<import("../../../contexts/messageInputContext/MessageInputContext").MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, "sendMessage" | "giphyActive"> & {
        disabled: boolean;
    }>>;
    sendImageAsync: boolean;
    sendMessage: (message: Partial<import("stream-chat").Message<At, Me, Us>>) => Promise<void>;
    setQuotedMessageState: (message: import("../..").MessageType<At, Ch, Co, Ev, Me, Re, Us>) => void;
    ShowThreadMessageInChannelButton: import("react").ComponentType<{
        threadList?: boolean | undefined;
    }>;
    UploadProgressIndicator: import("react").ComponentType<import("../..").UploadProgressIndicatorProps>;
    additionalTextInputProps?: import("react-native").TextInputProps | undefined;
    autoCompleteSuggestionsLimit?: number | undefined;
    autoCompleteTriggerSettings?: ((settings: import("../../..").ACITriggerSettingsParams<At, Ch, Co, Ev, Me, Re, Us>) => import("../../..").TriggerSettings<Co, Us>) | undefined;
    compressImageQuality?: number | undefined;
    doDocUploadRequest?: ((file: {
        name: string;
        size?: string | number | undefined;
        type?: string | undefined;
        uri?: string | undefined;
    }, channel: import("stream-chat").Channel<At, Ch, Co, Ev, Me, Re, Us> | undefined) => Promise<import("stream-chat").SendFileAPIResponse>) | undefined;
    doImageUploadRequest?: ((file: {
        name?: string | undefined;
        uri?: string | undefined;
    }, channel: import("stream-chat").Channel<At, Ch, Co, Ev, Me, Re, Us> | undefined) => Promise<import("stream-chat").SendFileAPIResponse>) | undefined;
    initialValue?: string | undefined;
    Input?: import("react").ComponentType<Omit<Partial<Pick<import("../../..").ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, "disabled" | "members" | "watchers"> & Pick<import("../../../contexts/messageInputContext/MessageInputContext").MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, "clearEditingState" | "clearQuotedMessageState" | "editing" | "FileUploadPreview" | "ImageUploadPreview" | "maxNumberOfFiles" | "quotedMessage" | "SendButton" | "ShowThreadMessageInChannelButton" | "additionalTextInputProps" | "Input" | "InputButtons" | "asyncIds" | "asyncUploads" | "closeAttachmentPicker" | "fileUploads" | "giphyActive" | "imageUploads" | "removeImage" | "inputBoxRef" | "isValidMessage" | "mentionedUsers" | "numberOfUploads" | "resetInput" | "sending" | "sendMessageAsync" | "setShowMoreOptions" | "setGiphyActive" | "showMoreOptions" | "uploadNewImage"> & Pick<import("../../..").MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, "Reply" | "quotedRepliesEnabled"> & Pick<import("../../..").SuggestionsContextValue<Co, Us>, "componentType" | "suggestions" | "suggestionsTitle"> & Pick<import("../../..").ThreadContextValue<DefaultAttachmentType, DefaultChannelType, import("stream-chat").LiteralStringForUnion, UnknownType, UnknownType, UnknownType, DefaultUserType>, "thread"> & Pick<import("../../..").TranslationContextValue, "t"> & {
        threadList?: boolean | undefined;
    }>, "Input"> & Partial<import("../..").InputButtonsWithContextProps<At, Ch, Co, Ev, Me, Re, Us>> & {
        getUsers: () => import("stream-chat").UserResponse<Us>[];
    }> | undefined;
    InputButtons?: import("react").ComponentType<Partial<import("../..").InputButtonsWithContextProps<At, Ch, Co, Ev, Me, Re, Us>>> | undefined;
    mentionAllAppUsersEnabled?: boolean | undefined;
    mentionAllAppUsersQuery?: import("../../../contexts/messageInputContext/MessageInputContext").MentionAllAppUsersQuery<Us> | undefined;
    onChangeText?: ((newText: string) => void) | undefined;
    setInputRef?: ((ref: import("react-native").TextInput | null) => void) | undefined;
} & import("../../../contexts/messageInputContext/MessageInputContext").InputConfig & {
    /**
     * To ensure we allow re-render, when channel is changed
     */
    channelId?: string | undefined;
}) => InputMessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>;
