import Animated from 'react-native-reanimated';
import { MessageOverlayContextValue, MessageOverlayData } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type MessageOverlayPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Pick<MessageOverlayContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'MessageActions' | 'OverlayReactionList' | 'OverlayReactions' | 'reset'> & Omit<MessageOverlayData<At, Ch, Co, Ev, Me, Re, Us>, 'supportedReactions'> & Pick<OverlayContextValue, 'overlay' | 'setOverlay'> & {
    overlayOpacity: Animated.SharedValue<number>;
    visible?: boolean;
};
export declare type MessageOverlayProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Partial<Omit<MessageOverlayPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'overlayOpacity'>> & Pick<MessageOverlayPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'overlayOpacity'>;
/**
 * MessageOverlay - A high level component which implements all the logic required for a message overlay
 */
export declare const MessageOverlay: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(props: MessageOverlayProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
