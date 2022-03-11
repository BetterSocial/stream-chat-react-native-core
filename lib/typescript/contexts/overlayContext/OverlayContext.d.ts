import React from 'react';
import type { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import type { AttachmentPickerContextValue } from '../attachmentPickerContext/AttachmentPickerContext';
import type { MessageOverlayContextValue } from '../messageOverlayContext/MessageOverlayContext';
import type { DeepPartial } from '../themeContext/ThemeContext';
import type { Theme } from '../themeContext/utils/theme';
import type { AttachmentPickerProps } from '../../components/AttachmentPicker/AttachmentPicker';
import type { ImageGalleryCustomComponents } from '../../components/ImageGallery/ImageGallery';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
import type { Streami18n } from '../../utils/Streami18n';
export declare type BlurType = 'light' | 'dark' | undefined;
export declare type Overlay = 'alert' | 'gallery' | 'message' | 'none';
export declare type OverlayContextValue = {
    overlay: Overlay;
    setBlurType: React.Dispatch<React.SetStateAction<BlurType>>;
    setOverlay: React.Dispatch<React.SetStateAction<Overlay>>;
    style?: DeepPartial<Theme>;
    translucentStatusBar?: boolean;
};
export declare const OverlayContext: React.Context<OverlayContextValue>;
export declare type OverlayProviderProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<AttachmentPickerProps> & Partial<Pick<AttachmentPickerContextValue, 'attachmentPickerBottomSheetHeight' | 'attachmentSelectionBarHeight' | 'bottomInset' | 'CameraSelectorIcon' | 'FileSelectorIcon' | 'ImageSelectorIcon' | 'topInset'>> & ImageGalleryCustomComponents<Us> & Partial<Pick<MessageOverlayContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'MessageActions' | 'OverlayReactionList' | 'OverlayReactions'>> & Pick<OverlayContextValue, 'translucentStatusBar'> & {
    closePicker?: (ref: React.RefObject<BottomSheetMethods>) => void;
    /** https://github.com/GetStream/stream-chat-react-native/wiki/Internationalization-(i18n) */
    i18nInstance?: Streami18n;
    imageGalleryGridHandleHeight?: number;
    imageGalleryGridSnapPoints?: [string | number, string | number];
    numberOfImageGalleryGridColumns?: number;
    openPicker?: (ref: React.RefObject<BottomSheetMethods>) => void;
    value?: Partial<OverlayContextValue>;
};
export declare const useOverlayContext: () => OverlayContextValue;
export declare const withOverlayContext: <P extends UnknownType>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof OverlayContextValue>>;
