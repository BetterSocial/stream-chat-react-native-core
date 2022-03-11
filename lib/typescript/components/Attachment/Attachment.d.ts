import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { Attachment as AttachmentType } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ActionHandler = (name: string, value: string) => void;
export declare type AttachmentPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'AttachmentActions' | 'Card' | 'FileAttachment' | 'Gallery' | 'Giphy' | 'UrlPreview'> & {
    /**
     * The attachment to render
     */
    attachment: AttachmentType<At>;
};
export declare type AttachmentProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'AttachmentActions' | 'Card' | 'FileAttachment' | 'Gallery' | 'Giphy' | 'UrlPreview'>> & Pick<AttachmentPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'attachment'>;
/**
 * Attachment - The message attachment
 */
export declare const Attachment: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: AttachmentProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
