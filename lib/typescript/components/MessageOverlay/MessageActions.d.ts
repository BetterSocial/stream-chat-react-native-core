import Animated from 'react-native-reanimated';
import { MessageOverlayData } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type MessageActionsPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageOverlayData<At, Ch, Co, Ev, Me, Re, Us>, 'alignment' | 'messageActions'> & {
    showScreen: Animated.SharedValue<number>;
};
export declare type MessageActionsProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<MessageActionsPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'showScreen'>> & Pick<MessageActionsPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'showScreen'>;
/**
 * MessageActions - A high level component which implements all the logic required for MessageActions
 */
export declare const MessageActions: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: MessageActionsProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
