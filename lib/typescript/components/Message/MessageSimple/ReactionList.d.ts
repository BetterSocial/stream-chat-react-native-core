import { MessageContextValue, Reactions } from '../../../contexts/messageContext/MessageContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
import type { ReactionData } from '../../../utils/utils';
export declare type MessageReactions = {
    reactions: Reactions;
    supportedReactions?: ReactionData[];
};
export declare type ReactionListPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'alignment' | 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress' | 'reactions' | 'showMessageOverlay'> & {
    messageContentWidth: number;
    supportedReactions: ReactionData[];
    fill?: string;
    radius?: number;
    reactionSize?: number;
    stroke?: string;
    strokeSize?: number;
};
export declare type ReactionListProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<ReactionListPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'messageContentWidth'>> & Pick<ReactionListPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'messageContentWidth'>;
/**
 * ReactionList - A high level component which implements all the logic required for a message reaction list
 */
export declare const ReactionList: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: ReactionListProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
