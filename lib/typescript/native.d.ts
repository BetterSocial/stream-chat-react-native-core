/// <reference types="react" />
import { FlatList as DefaultFlatList, StyleProp, ViewStyle } from 'react-native';
import type { NetInfoSubscription } from '@react-native-community/netinfo';
declare type BlurView = React.ComponentType<{
    blurAmount?: number;
    blurType?: string;
    style?: StyleProp<ViewStyle>;
}>;
export declare let BlurView: BlurView;
declare type CompressImage = ({ compressImageQuality, height, uri, width, }: {
    compressImageQuality: number;
    height: number;
    uri: string;
    width: number;
}) => Promise<string> | never;
export declare let compressImage: CompressImage;
declare type DeleteFile = ({ uri }: {
    uri: string;
}) => Promise<boolean> | never;
export declare let deleteFile: DeleteFile;
declare type GetLocalAssetUri = (uriOrAssetId: string) => Promise<string> | never;
export declare let getLocalAssetUri: GetLocalAssetUri;
export declare type Asset = {
    height: number;
    source: 'camera' | 'picker';
    uri: string;
    width: number;
    id?: string;
};
declare type GetPhotos = ({ after, first }: {
    first: number;
    after?: string;
}) => Promise<{
    assets: Array<Omit<Asset, 'source'> & {
        source: 'picker';
    }>;
    endCursor: string;
    hasNextPage: boolean;
}> | never;
export declare let getPhotos: GetPhotos;
declare type NetInfo = {
    addEventListener: (listener: (isConnected: boolean) => void) => NetInfoSubscription | never;
    fetch: (requestedInterface?: string | undefined) => Promise<boolean> | never;
};
export declare let FlatList: typeof DefaultFlatList;
export declare let NetInfo: NetInfo;
declare type PickDocument = ({ maxNumberOfFiles }: {
    maxNumberOfFiles?: number;
}) => Promise<{
    cancelled: boolean;
    docs?: {
        name: string;
        size?: number | string;
        type?: string;
        uri?: string;
    }[];
}> | never;
export declare let pickDocument: PickDocument;
declare type SaveFileOptions = {
    fileName: string;
    fromUrl: string;
};
declare type SaveFile = (options: SaveFileOptions) => Promise<string> | never;
export declare let saveFile: SaveFile;
declare type ShareOptions = {
    type?: string;
    url?: string;
};
declare type ShareImage = (options: ShareOptions) => Promise<boolean> | never;
export declare let shareImage: ShareImage;
declare type Photo = (Omit<Asset, 'source'> & {
    cancelled: false;
    source: 'camera';
}) | {
    cancelled: true;
};
declare type TakePhoto = (options: {
    compressImageQuality?: number;
}) => Promise<Photo> | never;
export declare let takePhoto: TakePhoto;
declare type HapticFeedbackMethod = 'impactHeavy' | 'impactLight' | 'impactMedium' | 'notificationError' | 'notificationSuccess' | 'notificationWarning' | 'selection';
declare type TriggerHaptic = (method: HapticFeedbackMethod) => void | never;
export declare let triggerHaptic: TriggerHaptic;
export declare let SDK: string;
declare type Handlers = {
    BlurView?: BlurView;
    compressImage?: CompressImage;
    deleteFile?: DeleteFile;
    FlatList?: typeof DefaultFlatList;
    getLocalAssetUri?: GetLocalAssetUri;
    getPhotos?: GetPhotos;
    NetInfo?: NetInfo;
    pickDocument?: PickDocument;
    saveFile?: SaveFile;
    SDK?: string;
    shareImage?: ShareImage;
    takePhoto?: TakePhoto;
    triggerHaptic?: TriggerHaptic;
};
export declare const registerNativeHandlers: (handlers: Handlers) => void;
export {};
