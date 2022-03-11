import React from 'react';
import Animated from 'react-native-reanimated';
import { FillProps } from 'react-native-svg';
import { MessageOverlayData } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import { IconProps } from '../../icons';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type ReactionButtonProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Pick<OverlayReactionListPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'ownReactionTypes' | 'handleReaction' | 'setOverlay'> & {
    Icon: React.FC<IconProps>;
    index: number;
    numberOfReactions: number;
    showScreen: Animated.SharedValue<number>;
    type: string;
};
export declare const ReactionButton: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(props: ReactionButtonProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
export declare type OverlayReactionListPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Pick<MessageOverlayData<At, Ch, Co, Ev, Me, Re, Us>, 'alignment' | 'handleReaction' | 'messagesContext'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'supportedReactions'> & Pick<OverlayContextValue, 'setOverlay'> & {
    messageLayout: Animated.SharedValue<{
        x: number;
        y: number;
    }>;
    ownReactionTypes: string[];
    setReactionListHeight: React.Dispatch<React.SetStateAction<number>>;
    showScreen: Animated.SharedValue<number>;
    fill?: FillProps['fill'];
};
export declare type OverlayReactionListProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Omit<OverlayReactionListPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'setOverlay' | 'supportedReactions'> & Partial<Pick<OverlayReactionListPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'setOverlay' | 'supportedReactions'>>;
/**
 * OverlayReactionList - A high level component which implements all the logic required for a message overlay reaction list
 */
export declare const OverlayReactionList: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(props: OverlayReactionListProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
export {};
