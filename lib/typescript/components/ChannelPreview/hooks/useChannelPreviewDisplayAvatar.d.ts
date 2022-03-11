import type { Channel, StreamChat } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
export declare const getChannelPreviewDisplayAvatar: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>, client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>) => {
    image: string | undefined;
    name: string | undefined;
    images?: undefined;
    names?: undefined;
} | {
    images: string[];
    names: string[];
    image?: undefined;
    name?: undefined;
} | {
    name: string | undefined;
    image?: undefined;
    images?: undefined;
    names?: undefined;
};
/**
 * Hook to set the display avatar for channel preview
 * @param {*} channel
 *
 * @returns {object} e.g., { image: 'http://dummyurl.com/test.png', name: 'Uhtred Bebbanburg' }
 */
export declare const useChannelPreviewDisplayAvatar: <At extends UnknownType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>) => {
    image: string | undefined;
    name: string | undefined;
    images?: undefined;
    names?: undefined;
} | {
    images: string[];
    names: string[];
    image?: undefined;
    name?: undefined;
} | {
    name: string | undefined;
    image?: undefined;
    images?: undefined;
    names?: undefined;
};
