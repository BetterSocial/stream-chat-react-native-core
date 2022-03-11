import React from 'react';
import Animated from 'react-native-reanimated';
import type { ImageStyle, StyleProp } from 'react-native';
declare type Props = {
    index: number;
    offsetScale: Animated.SharedValue<number>;
    photo: {
        uri: string;
    };
    previous: boolean;
    scale: Animated.SharedValue<number>;
    screenHeight: number;
    selected: boolean;
    shouldRender: boolean;
    translateX: Animated.SharedValue<number>;
    translateY: Animated.SharedValue<number>;
    style?: StyleProp<ImageStyle>;
};
export declare const AnimatedGalleryImage: React.FC<Props>;
export {};
