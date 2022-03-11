import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { Attachment } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type GiphyPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'handleAction' | 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps'> & {
    attachment: Attachment<At>;
};
export declare type GiphyProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'onLongPress' | 'onPressIn'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps'>> & {
    attachment: Attachment<At>;
};
/**
 * UI component for card in attachments.
 */
export declare const Giphy: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: GiphyProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
