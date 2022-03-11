import React from 'react';
import Animated from 'react-native-reanimated';
import type { Photo } from '../ImageGallery';
import type { DefaultUserType, UnknownType } from '../../../types/types';
export declare type ImageGalleryHeaderCustomComponent<Us extends UnknownType = DefaultUserType> = ({ hideOverlay, photo, }: {
    hideOverlay: () => void;
    photo?: Photo<Us>;
}) => React.ReactElement | null;
export declare type ImageGalleryHeaderCustomComponentProps<Us extends UnknownType = DefaultUserType> = {
    centerElement?: ImageGalleryHeaderCustomComponent<Us>;
    CloseIcon?: React.ReactElement;
    leftElement?: ImageGalleryHeaderCustomComponent<Us>;
    rightElement?: ImageGalleryHeaderCustomComponent<Us>;
};
declare type Props<Us extends UnknownType = DefaultUserType> = ImageGalleryHeaderCustomComponentProps<Us> & {
    opacity: Animated.SharedValue<number>;
    visible: Animated.SharedValue<number>;
    photo?: Photo<Us>;
};
export declare const ImageGalleryHeader: {
    <Us extends UnknownType = DefaultUserType>(props: Props<Us>): JSX.Element;
    displayName: string;
};
export {};
