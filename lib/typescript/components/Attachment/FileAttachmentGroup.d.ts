import { StyleProp, ViewStyle } from 'react-native';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type FileAttachmentGroupPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'files'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'Attachment'> & {
    /**
     * The unique id for the message with file attachments
     */
    messageId: string;
    styles?: Partial<{
        attachmentContainer: StyleProp<ViewStyle>;
        container: StyleProp<ViewStyle>;
    }>;
};
export declare type FileAttachmentGroupProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<FileAttachmentGroupPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'messageId'>> & Pick<FileAttachmentGroupPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'messageId'>;
export declare const FileAttachmentGroup: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: FileAttachmentGroupProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element | null;
    displayName: string;
};
