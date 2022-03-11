import { ImageGalleryContextValue } from '../../contexts/imageGalleryContext/ImageGalleryContext';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type GalleryPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ImageGalleryContextValue, 'setImage' | 'setImages'> & Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'alignment' | 'groupStyles' | 'images' | 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress' | 'threadList'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalTouchableProps' | 'legacyImageViewerSwipeBehaviour'> & Pick<OverlayContextValue, 'setBlurType' | 'setOverlay'> & {
    /**
     * `message` prop has been introduced here as part of `legacyImageViewerSwipeBehaviour` prop.
     * https://github.com/GetStream/stream-chat-react-native/commit/d5eac6193047916f140efe8e396a671675c9a63f
     * messageId and messageText may seem redundant now, but to avoid breaking change as part
     * of minor release, we are keeping those props.
     *
     * Also `message` type should ideally be imported from MessageContextValue and not be explicitely mentioned
     * here, but due to some circular dependencies within the SDK, it causes "exccesive deep nesting" issue with
     * typescript within Channel component. We should take it as a mini-project and resolve all these circular imports.
     *
     * TODO[major]: remove messageId and messageText
     * TODO: Fix circular dependencies of imports
     */
    hasThreadReplies?: boolean;
    message?: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    messageId?: string;
    messageText?: string;
};
export declare type GalleryProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<GalleryPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * UI component for card in attachments.
 */
export declare const Gallery: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<GalleryPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element | null;
    displayName: string;
};
