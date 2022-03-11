import React from 'react';
import Animated from 'react-native-reanimated';
import type { Alignment } from '../../contexts/messageContext/MessageContext';
import type { ReactionData } from '../../utils/utils';
export declare type Reaction = {
    alignment: Alignment;
    name: string;
    type: string;
    image?: string;
};
export declare type OverlayReactionsProps = {
    reactions: Reaction[];
    showScreen: Animated.SharedValue<number>;
    title: string;
    alignment?: Alignment;
    supportedReactions?: ReactionData[];
};
/**
 * OverlayReactions - A high level component which implements all the logic required for message overlay reactions
 */
export declare const OverlayReactions: React.FC<OverlayReactionsProps>;
