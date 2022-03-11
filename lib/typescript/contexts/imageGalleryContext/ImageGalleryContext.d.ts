import React, { PropsWithChildren } from 'react';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ImageGalleryContextValue<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    images: MessageType<At, Ch, Co, Ev, Me, Re, Us>[];
    setImage: React.Dispatch<React.SetStateAction<{
        messageId?: string;
        url?: string;
    } | undefined>>;
    setImages: React.Dispatch<React.SetStateAction<MessageType<At, Ch, Co, Ev, Me, Re, Us>[]>>;
    image?: {
        messageId?: string;
        url?: string;
    };
};
export declare const ImageGalleryContext: React.Context<ImageGalleryContextValue<DefaultAttachmentType, DefaultChannelType, import("stream-chat").LiteralStringForUnion, UnknownType, UnknownType, UnknownType, DefaultUserType>>;
export declare const ImageGalleryProvider: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ children, }: PropsWithChildren<UnknownType>) => JSX.Element;
export declare const useImageGalleryContext: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => ImageGalleryContextValue<At, Ch, Co, Ev, Me, Re, Us>;
export declare const withImageGalleryContext: <P extends UnknownType, At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(Component: React.ComponentType<P>) => React.FC<Omit<P, keyof ImageGalleryContextValue<At, Ch, Co, Ev, Me, Re, Us>>>;
