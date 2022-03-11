import { AvatarProps } from '../../Avatar/Avatar';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type MessageAvatarPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'alignment' | 'lastGroupMessage' | 'message' | 'showAvatar'> & Partial<Pick<AvatarProps, 'size'>>;
export declare type MessageAvatarProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Partial<MessageAvatarPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
export declare const MessageAvatar: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(props: Partial<MessageAvatarPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
