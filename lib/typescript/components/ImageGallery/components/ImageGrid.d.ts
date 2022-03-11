import React from 'react';
import type { Photo } from '../ImageGallery';
import type { DefaultUserType, UnknownType } from '../../../types/types';
export declare type ImageGalleryGridImageComponent<Us extends UnknownType = DefaultUserType> = ({ item, }: {
    item: Photo<Us> & {
        selectAndClose: () => void;
        numberOfImageGalleryGridColumns?: number;
    };
}) => React.ReactElement | null;
export declare type ImageGalleryGridImageComponents<Us extends UnknownType = DefaultUserType> = {
    avatarComponent?: ImageGalleryGridImageComponent<Us>;
    imageComponent?: ImageGalleryGridImageComponent<Us>;
};
export declare type GridImageItem<Us extends DefaultUserType = DefaultUserType> = Photo<Us> & ImageGalleryGridImageComponents<Us> & {
    selectAndClose: () => void;
    numberOfImageGalleryGridColumns?: number;
};
declare type Props<Us extends UnknownType = DefaultUserType> = ImageGalleryGridImageComponents<Us> & {
    closeGridView: () => void;
    photos: Photo<Us>[];
    resetVisibleValues: () => void;
    setImage: React.Dispatch<React.SetStateAction<{
        messageId?: string | undefined;
        url?: string | undefined;
    } | undefined>>;
    numberOfImageGalleryGridColumns?: number;
};
export declare const ImageGrid: {
    <Us extends UnknownType = DefaultUserType>(props: Props<Us>): JSX.Element;
    displayName: string;
};
export {};
