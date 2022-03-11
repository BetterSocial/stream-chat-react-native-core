import React from 'react';
import Animated from 'react-native-reanimated';
import type { Photo } from '../ImageGallery';
import type { DefaultUserType, UnknownType } from '../../../types/types';
export declare type ImageGalleryFooterCustomComponent<Us extends UnknownType = DefaultUserType> = ({ openGridView, photo, share, shareMenuOpen, }: {
    openGridView: () => void;
    share: () => Promise<void>;
    shareMenuOpen: boolean;
    photo?: Photo<Us>;
}) => React.ReactElement | null;
export declare type ImageGalleryFooterCustomComponentProps<Us extends UnknownType = DefaultUserType> = {
    centerElement?: ImageGalleryFooterCustomComponent<Us>;
    GridIcon?: React.ReactElement;
    leftElement?: ImageGalleryFooterCustomComponent<Us>;
    rightElement?: ImageGalleryFooterCustomComponent<Us>;
    ShareIcon?: React.ReactElement;
};
declare type Props<Us extends UnknownType = DefaultUserType> = ImageGalleryFooterCustomComponentProps<Us> & {
    opacity: Animated.SharedValue<number>;
    openGridView: () => void;
    photo: Photo<Us>;
    photoLength: number;
    selectedIndex: number;
    visible: Animated.SharedValue<number>;
};
export declare const ImageGalleryFooter: {
    <Us extends UnknownType = DefaultUserType>(props: Props<Us>): JSX.Element;
    displayName: string;
};
export {};
