/// <reference types="react" />
import type { FileUpload, ImageUpload, MessageInputContextValue } from '../MessageInputContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
export declare const isEditingBoolean: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(editing: boolean | import("../../..").MessageType<At, Ch, Co, Ev, Me, Re, Us>) => editing is boolean;
export declare const useMessageDetailsForState: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(message: boolean | import("../../..").MessageType<At, Ch, Co, Ev, Me, Re, Us>, initialValue?: string | undefined) => {
    fileUploads: FileUpload[];
    imageUploads: ImageUpload[];
    mentionedUsers: string[];
    numberOfUploads: number;
    setFileUploads: import("react").Dispatch<import("react").SetStateAction<FileUpload[]>>;
    setImageUploads: import("react").Dispatch<import("react").SetStateAction<ImageUpload[]>>;
    setMentionedUsers: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    setNumberOfUploads: import("react").Dispatch<import("react").SetStateAction<number>>;
    setShowMoreOptions: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setText: import("react").Dispatch<import("react").SetStateAction<string>>;
    showMoreOptions: boolean;
    text: string;
};
