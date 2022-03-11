import React, { PropsWithChildren } from 'react';
import { Attachment, SendFileAPIResponse, StreamChat, Message as StreamMessage, UserFilters, UserOptions, UserResponse, UserSort } from 'stream-chat';
import { ChannelContextValue } from '../channelContext/ChannelContext';
import { ACITriggerSettingsParams, TriggerSettings } from '../../utils/utils';
import { Asset } from '../../native';
import type { TextInput, TextInputProps } from 'react-native';
import type { AttachButtonProps } from '../../components/MessageInput/AttachButton';
import type { CommandsButtonProps } from '../../components/MessageInput/CommandsButton';
import type { FileUploadPreviewProps } from '../../components/MessageInput/FileUploadPreview';
import type { ImageUploadPreviewProps } from '../../components/MessageInput/ImageUploadPreview';
import type { InputButtonsProps } from '../../components/MessageInput/InputButtons';
import type { MessageInputProps } from '../../components/MessageInput/MessageInput';
import type { MoreOptionsButtonProps } from '../../components/MessageInput/MoreOptionsButton';
import type { SendButtonProps } from '../../components/MessageInput/SendButton';
import type { UploadProgressIndicatorProps } from '../../components/MessageInput/UploadProgressIndicator';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type FileUpload = {
    file: {
        name: string;
        size?: number | string;
        type?: string;
        uri?: string;
    };
    id: string;
    state: string;
    url?: string;
};
export declare type ImageUpload = {
    file: Partial<Asset> & {
        name?: string;
    };
    id: string;
    state: string;
    url?: string;
};
export declare type InputConfig = {
    maxMessageLength?: number;
    uploadsEnabled?: boolean;
};
export declare type MentionAllAppUsersQuery<Us extends DefaultUserType> = {
    filters?: UserFilters<Us>;
    options?: UserOptions;
    sort?: UserSort<Us>;
};
export declare type LocalMessageInputContext<At extends UnknownType = DefaultAttachmentType, Co extends string = DefaultCommandType, Us extends UnknownType = DefaultUserType> = {
    appendText: (newText: string) => void;
    asyncIds: string[];
    asyncUploads: {
        [key: string]: {
            state: string;
            url: string;
        };
    };
    closeAttachmentPicker: () => void;
    /**
     * An array of file objects which are set for upload. It has the following structure:
     *
     * ```json
     *  [
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_1",
     *      "state": "uploading" // or "finished",
     *      "url": "https://url1.com",
     *    },
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_2",
     *      "state": "uploading" // or "finished",
     *      "url": "https://url1.com",
     *    },
     *  ]
     * ```
     *
     */
    fileUploads: FileUpload[];
    giphyActive: boolean;
    /**
     * An array of image objects which are set for upload. It has the following structure:
     *
     * ```json
     *  [
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_1",
     *      "state": "uploading" // or "finished",
     *    },
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_2",
     *      "state": "uploading" // or "finished",
     *    },
     *  ]
     * ```
     *
     */
    imageUploads: ImageUpload[];
    inputBoxRef: React.MutableRefObject<TextInput | null>;
    isValidMessage: () => boolean;
    mentionedUsers: string[];
    numberOfUploads: number;
    onChange: (newText: string) => void;
    onSelectItem: (item: UserResponse<Us>) => void;
    openAttachmentPicker: () => void;
    openCommandsPicker: () => void;
    openFilePicker: () => void;
    openMentionsPicker: () => void;
    pickFile: () => Promise<void>;
    /**
     * Function for removing a file from the upload preview
     *
     * @param id string ID of file in `fileUploads` object in state of MessageInput
     */
    removeFile: (id: string) => void;
    /**
     * Function for removing an image from the upload preview
     *
     * @param id string ID of image in `imageUploads` object in state of MessageInput
     */
    removeImage: (id: string) => void;
    resetInput: (pendingAttachments?: Attachment<At>[]) => void;
    selectedPicker: string | undefined;
    sending: React.MutableRefObject<boolean>;
    sendMessage: () => Promise<void>;
    sendMessageAsync: (id: string) => void;
    sendThreadMessageInChannel: boolean;
    setAsyncIds: React.Dispatch<React.SetStateAction<string[]>>;
    setAsyncUploads: React.Dispatch<React.SetStateAction<{
        [key: string]: {
            state: string;
            url: string;
        };
    }>>;
    setFileUploads: React.Dispatch<React.SetStateAction<FileUpload[]>>;
    setGiphyActive: React.Dispatch<React.SetStateAction<boolean>>;
    setImageUploads: React.Dispatch<React.SetStateAction<ImageUpload[]>>;
    /**
     * Ref callback to set reference on input box
     */
    setInputBoxRef: (ref: TextInput | null) => void;
    setMentionedUsers: React.Dispatch<React.SetStateAction<string[]>>;
    setNumberOfUploads: React.Dispatch<React.SetStateAction<number>>;
    setSendThreadMessageInChannel: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMoreOptions: React.Dispatch<React.SetStateAction<boolean>>;
    setText: React.Dispatch<React.SetStateAction<string>>;
    showMoreOptions: boolean;
    /**
     * Text value of the TextInput
     */
    text: string;
    toggleAttachmentPicker: () => void;
    /**
     * Mapping of input triggers to the outputs to be displayed by the AutoCompleteInput
     */
    triggerSettings: TriggerSettings<Co, Us>;
    updateMessage: () => Promise<void>;
    /** Function for attempting to upload a file */
    uploadFile: ({ newFile }: {
        newFile: FileUpload;
    }) => Promise<void>;
    /** Function for attempting to upload an image */
    uploadImage: ({ newImage }: {
        newImage: ImageUpload;
    }) => Promise<void>;
    uploadNewFile: (file: {
        name: string;
        size?: number | string;
        type?: string;
        uri?: string;
    }) => Promise<void>;
    uploadNewImage: (image: Partial<Asset>) => Promise<void>;
};
export declare type InputMessageInputContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    /**
     * Custom UI component for attach button.
     *
     * Defaults to and accepts same props as: [AttachButton](https://getstream.github.io/stream-chat-react-native/v3/#attachbutton)
     */
    AttachButton: React.ComponentType<AttachButtonProps<At, Ch, Co, Ev, Me, Re, Us>>;
    clearEditingState: () => void;
    clearQuotedMessageState: () => void;
    /**
     * Custom UI component for commands button.
     *
     * Defaults to and accepts same props as: [CommandsButton](https://getstream.github.io/stream-chat-react-native/v3/#commandsbutton)
     */
    CommandsButton: React.ComponentType<CommandsButtonProps<At, Ch, Co, Ev, Me, Re, Us>>;
    editing: boolean | MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    editMessage: StreamChat<At, Ch, Co, Ev, Me, Re, Us>['updateMessage'];
    /**
     * Custom UI component for FileUploadPreview.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/MessageInput/FileUploadPreview.tsx
     */
    FileUploadPreview: React.ComponentType<FileUploadPreviewProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /** When false, CommandsButton will be hidden */
    hasCommands: boolean;
    /** When false, FileSelectorIcon will be hidden */
    hasFilePicker: boolean;
    /** When false, ImageSelectorIcon will be hidden */
    hasImagePicker: boolean;
    /**
     * Custom UI component for ImageUploadPreview.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/MessageInput/ImageUploadPreview.tsx
     */
    ImageUploadPreview: React.ComponentType<ImageUploadPreviewProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /** Limit on allowed number of files to attach at a time. */
    maxNumberOfFiles: number;
    /**
     * Custom UI component for more options button.
     *
     * Defaults to and accepts same props as: [MoreOptionsButton](https://getstream.github.io/stream-chat-react-native/v3/#moreoptionsbutton)
     */
    MoreOptionsButton: React.ComponentType<MoreOptionsButtonProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /** Limit on the number of lines in the text input before scrolling */
    numberOfLines: number;
    quotedMessage: boolean | MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Custom UI component for send button.
     *
     * Defaults to and accepts same props as: [SendButton](https://getstream.github.io/stream-chat-react-native/v3/#sendbutton)
     */
    SendButton: React.ComponentType<SendButtonProps<At, Ch, Co, Ev, Me, Re, Us>>;
    sendImageAsync: boolean;
    sendMessage: (message: Partial<StreamMessage<At, Me, Us>>) => Promise<void>;
    setQuotedMessageState: (message: MessageType<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Custom UI component to render checkbox with text ("Also send to channel") in Thread's input box.
     * When ticked, message will also be sent in parent channel.
     */
    ShowThreadMessageInChannelButton: React.ComponentType<{
        threadList?: boolean;
    }>;
    /**
     * Custom UI component to render upload progress indicator on attachment preview.
     *
     * **Default** [UploadProgressIndicator](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/MessageInput/UploadProgressIndicator.tsx)
     */
    UploadProgressIndicator: React.ComponentType<UploadProgressIndicatorProps>;
    /**
     * Additional props for underlying TextInput component. These props will be forwarded as it is to TextInput component.
     *
     * @see See https://reactnative.dev/docs/textinput#reference
     */
    additionalTextInputProps?: TextInputProps;
    /** Max number of suggestions to display in autocomplete list. Defaults to 10. */
    autoCompleteSuggestionsLimit?: number;
    /**
     * Mapping of input triggers to the outputs to be displayed by the AutoCompleteInput
     */
    autoCompleteTriggerSettings?: (settings: ACITriggerSettingsParams<At, Ch, Co, Ev, Me, Re, Us>) => TriggerSettings<Co, Us>;
    /**
     * Compress image with quality (from 0 to 1, where 1 is best quality).
     * On iOS, values larger than 0.8 don't produce a noticeable quality increase in most images,
     * while a value of 0.8 will reduce the file size by about half or less compared to a value of 1.
     * Image picker defaults to 0.8 for iOS and 1 for Android
     */
    compressImageQuality?: number;
    /**
     * Override file upload request
     *
     * @param file    File object - { uri: '', name: '' }
     * @param channel Current channel object
     *
     * @overrideType Function
     */
    doDocUploadRequest?: (file: {
        name: string;
        size?: string | number;
        type?: string;
        uri?: string;
    }, channel: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['channel']) => Promise<SendFileAPIResponse>;
    /**
     * Override image upload request
     *
     * @param file    File object - { uri: '' }
     * @param channel Current channel object
     *
     * @overrideType Function
     */
    doImageUploadRequest?: (file: {
        name?: string;
        uri?: string;
    }, channel: ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>['channel']) => Promise<SendFileAPIResponse>;
    /** Initial value to set on input */
    initialValue?: string;
    /**
     * Custom UI component for AutoCompleteInput.
     * Has access to all of [MessageInputContext](https://github.com/GetStream/stream-chat-react-native/blob/master/src/contexts/messageInputContext/MessageInputContext.tsx)
     */
    Input?: React.ComponentType<Omit<MessageInputProps<At, Ch, Co, Ev, Me, Re, Us>, 'Input'> & InputButtonsProps<At, Ch, Co, Ev, Me, Re, Us> & {
        getUsers: () => UserResponse<Us>[];
    }>;
    /**
     * Custom UI component to override buttons on left side of input box
     * Defaults to [InputButtons](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/MessageInput/InputButtons.tsx),
     * which contain following components/buttons:
     *
     *  - AttachButton
     *  - CommandsButtom
     *
     * You have access to following prop functions:
     *
     * - closeAttachmentPicker
     * - openAttachmentPicker
     * - openCommandsPicker
     * - toggleAttachmentPicker
     */
    InputButtons?: React.ComponentType<InputButtonsProps<At, Ch, Co, Ev, Me, Re, Us>>;
    mentionAllAppUsersEnabled?: boolean;
    /** Object containing filters/sort/options overrides for an @mention user query */
    mentionAllAppUsersQuery?: MentionAllAppUsersQuery<Us>;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.
     */
    onChangeText?: (newText: string) => void;
    /**
     * ref for input setter function
     *
     * @param ref [Ref object](https://reactjs.org/docs/refs-and-the-dom.html) for underling `TextInput` component.
     *
     * @overrideType Function
     */
    setInputRef?: (ref: TextInput | null) => void;
} & InputConfig;
export declare type MessageInputContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = LocalMessageInputContext<At, Co, Us> & Omit<InputMessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'sendMessage'>;
export declare const MessageInputContext: React.Context<MessageInputContextValue<DefaultAttachmentType, DefaultChannelType, import("stream-chat").LiteralStringForUnion, UnknownType, UnknownType, UnknownType, DefaultUserType>>;
export declare const MessageInputProvider: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ children, value, }: React.PropsWithChildren<{
    value: InputMessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>;
}>) => JSX.Element;
export declare const useMessageInputContext: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>;
/**
 * Typescript currently does not support partial inference so if MessageInputContext
 * typing is desired while using the HOC withMessageInputContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withMessageInputContext: <P extends UnknownType, At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Omit<P, "numberOfLines" | "AttachButton" | "clearEditingState" | "clearQuotedMessageState" | "CommandsButton" | "editing" | "editMessage" | "FileUploadPreview" | "hasCommands" | "hasFilePicker" | "hasImagePicker" | "ImageUploadPreview" | "maxNumberOfFiles" | "MoreOptionsButton" | "quotedMessage" | "SendButton" | "sendImageAsync" | "setQuotedMessageState" | "ShowThreadMessageInChannelButton" | "UploadProgressIndicator" | "additionalTextInputProps" | "autoCompleteSuggestionsLimit" | "autoCompleteTriggerSettings" | "compressImageQuality" | "doDocUploadRequest" | "doImageUploadRequest" | "initialValue" | "Input" | "InputButtons" | "mentionAllAppUsersEnabled" | "mentionAllAppUsersQuery" | "onChangeText" | "setInputRef" | keyof InputConfig | keyof LocalMessageInputContext<At, Co, Us>>>;
