import Animated from 'react-native-reanimated';
import { ImageGalleryFooterCustomComponentProps } from './components/ImageGalleryFooter';
import { ImageGalleryHeaderCustomComponentProps } from './components/ImageGalleryHeader';
import { ImageGalleryGridImageComponents } from './components/ImageGrid';
import { ImageGalleryGridHandleCustomComponentProps } from './components/ImageGridHandle';
import type { UserResponse } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../types/types';
export declare enum HasPinched {
    FALSE = 0,
    TRUE = 1
}
export declare enum IsSwiping {
    UNDETERMINED = 0,
    TRUE = 1,
    FALSE = 2
}
export declare type ImageGalleryCustomComponents<Us extends UnknownType = DefaultUserType> = {
    /**
     * Override props for following UI components, which are part of [image gallery](https://github.com/GetStream/stream-chat-react-native/wiki/Cookbook-v3.0#gallery-components).
     *
     * - [ImageGalleryFooter](#ImageGalleryFooter)
     *
     * - [ImageGrid](#ImageGrid)
     *
     * - [ImageGridHandle](#ImageGridHandle)
     *
     * - [ImageGalleryHeader](#ImageGalleryHeader)
     *
     * e.g.,
     *
     * ```js
     * {
     *  footer: {
     *    ShareIcon: CustomShareIconComponent
     *  },
     *  grid: {
     *    avatarComponent: CustomAvatarComponent
     *  },
     *  gridHandle: {
     *    centerComponent: CustomCenterComponent
     *  },
     *  header: {
     *    CloseIcon: CustomCloseButtonComponent
     *  },
     * }
     * ```
     * @overrideType object
     */
    imageGalleryCustomComponents?: {
        footer?: ImageGalleryFooterCustomComponentProps<Us>;
        grid?: ImageGalleryGridImageComponents<Us>;
        gridHandle?: ImageGalleryGridHandleCustomComponentProps;
        header?: ImageGalleryHeaderCustomComponentProps<Us>;
    };
};
declare type Props<Us extends UnknownType = DefaultUserType> = ImageGalleryCustomComponents<Us> & {
    overlayOpacity: Animated.SharedValue<number>;
    visible: boolean;
    imageGalleryGridHandleHeight?: number;
    /**
     * This should be
     */
    imageGalleryGridSnapPoints?: [string | number, string | number];
    numberOfImageGalleryGridColumns?: number;
};
export declare const ImageGallery: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Props<Us>): JSX.Element;
    displayName: string;
};
/**
 * Clamping worklet to clamp the scaling
 */
export declare const clamp: (value: number, lowerBound: number, upperBound: number) => number;
export declare type Photo<Us extends UnknownType = DefaultUserType> = {
    id: string;
    uri: string;
    created_at?: string | Date;
    messageId?: string;
    user?: UserResponse<Us> | null;
    user_id?: string;
};
export {};
