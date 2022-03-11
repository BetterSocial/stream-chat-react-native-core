import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import type { Attachment } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type AttachmentActionsPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<Attachment<At>, 'actions'> & Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'handleAction'> & {
    styles?: Partial<{
        actionButton: StyleProp<ViewStyle>;
        buttonText: StyleProp<TextStyle>;
        container: StyleProp<ViewStyle>;
    }>;
};
export declare type AttachmentActionsProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Attachment<At> & Partial<Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'handleAction'>>;
/**
 * AttachmentActions - The actions you can take on an attachment.
 * Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
 */
export declare const AttachmentActions: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: AttachmentActionsProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
