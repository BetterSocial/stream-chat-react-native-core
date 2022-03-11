import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type FileUploadPreviewPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageInputContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'fileUploads' | 'removeFile' | 'uploadFile'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'FileAttachmentIcon'>;
export declare type FileUploadPreviewProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<FileUploadPreviewPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * FileUploadPreview
 * UI Component to preview the files set for upload
 */
export declare const FileUploadPreview: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<FileUploadPreviewPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
export {};
