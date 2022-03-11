import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { Attachment } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type FileAttachmentPropsWithContext<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps' | 'AttachmentActions' | 'FileAttachmentIcon'> & {
    /** The attachment to render */
    attachment: Attachment<At>;
    attachmentSize?: number;
    styles?: Partial<{
        container: StyleProp<ViewStyle>;
        details: StyleProp<ViewStyle>;
        size: StyleProp<TextStyle>;
        title: StyleProp<TextStyle>;
    }>;
};
export declare type FileAttachmentProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<FileAttachmentPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'attachment'>> & Pick<FileAttachmentPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'attachment'>;
export declare const FileAttachment: {
    <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: FileAttachmentProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
export declare const getFileSizeDisplayText: (size?: string | number | undefined) => string | undefined;
export declare const goToURL: (url?: string | undefined) => void;
