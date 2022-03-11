import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { CircleProps } from 'react-native-svg';
export declare type AvatarProps = {
    /** size in pixels */
    size: number;
    containerStyle?: StyleProp<ViewStyle>;
    /** image url */
    image?: string;
    /** name of the picture, used for fallback */
    imageStyle?: StyleProp<ImageStyle>;
    name?: string;
    online?: boolean;
    presenceIndicator?: CircleProps;
    presenceIndicatorContainerStyle?: StyleProp<ViewStyle>;
    testID?: string;
};
/**
 * Avatar - A round avatar image with fallback to user's initials
 */
export declare const Avatar: React.FC<AvatarProps>;
