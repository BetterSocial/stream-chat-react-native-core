import React from 'react';
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet';
import type { AttachmentPickerErrorProps } from './components/AttachmentPickerError';
export declare type AttachmentPickerProps = {
    /**
     * Custom UI component to render [draggable handle](https://github.com/GetStream/stream-chat-react-native/blob/master/screenshots/docs/1.png) of attachment picker.
     *
     * **Default** [AttachmentPickerBottomSheetHandle](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AttachmentPicker/components/AttachmentPickerBottomSheetHandle.tsx)
     */
    AttachmentPickerBottomSheetHandle: React.FC<BottomSheetHandleProps>;
    /**
     * Custom UI component to render error component while opening attachment picker.
     *
     * **Default** [AttachmentPickerError](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AttachmentPicker/components/AttachmentPickerError.tsx)
     */
    AttachmentPickerError: React.ComponentType<AttachmentPickerErrorProps>;
    /**
     * Custom UI component to render error image for attachment picker
     *
     * **Default** [AttachmentPickerErrorImage](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AttachmentPicker/components/AttachmentPickerErrorImage.tsx)
     */
    AttachmentPickerErrorImage: React.ComponentType;
    /**
     * Custom UI component to render overlay component, that shows up on top of [selected image](https://github.com/GetStream/stream-chat-react-native/blob/master/screenshots/docs/1.png) (with tick mark)
     *
     * **Default** [ImageOverlaySelectedComponent](https://github.com/GetStream/stream-chat-react-native/blob/master/src/components/AttachmentPicker/components/ImageOverlaySelectedComponent.tsx)
     */
    ImageOverlaySelectedComponent: React.ComponentType;
    attachmentPickerBottomSheetHandleHeight?: number;
    attachmentPickerBottomSheetHeight?: number;
    attachmentPickerErrorButtonText?: string;
    attachmentPickerErrorText?: string;
    numberOfAttachmentImagesToLoadPerCall?: number;
    numberOfAttachmentPickerImageColumns?: number;
    translucentStatusBar?: boolean;
};
export declare const AttachmentPicker: React.ForwardRefExoticComponent<AttachmentPickerProps & React.RefAttributes<import("@gorhom/bottom-sheet/lib/typescript/types").BottomSheetMethods>>;
