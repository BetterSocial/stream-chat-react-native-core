import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { ChannelPreviewProps } from './ChannelPreview';
import type { LatestMessagePreview } from './hooks/useLatestMessagePreview';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelPreviewMessengerPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChannelPreviewProps<At, Ch, Co, Ev, Me, Re, Us>, 'channel'> & Pick<ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'maxUnreadCount' | 'onSelect' | 'PreviewAvatar' | 'PreviewMessage' | 'PreviewStatus' | 'PreviewTitle' | 'PreviewUnreadCount'> & {
    /**
     * Latest message on a channel, formatted for preview
     *
     * e.g.,
     *
     * ```json
     * {
     *  created_at: '' ,
     *  messageObject: { ... },
     *  previews: {
     *    bold: true,
     *    text: 'This is the message preview text'
     *  },
     *  status: 0 | 1 | 2 // read states of latest message.
     * }
     * ```
     *
     * @overrideType object
     */
    latestMessagePreview: LatestMessagePreview<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Formatter function for date of latest message.
     * @param date Message date
     * @returns Formatted date string
     *
     * By default today's date is shown in 'HH:mm A' format and other dates
     * are displayed in 'DD/MM/YY' format. props.latestMessage.created_at is the
     * default formatted date. This default logic is part of ChannelPreview component.
     */
    formatLatestMessageDate?: (date: Date) => string;
    /** Number of unread messages on the channel */
    unread?: number;
};
export declare type ChannelPreviewMessengerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<ChannelPreviewMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'channel' | 'latestMessagePreview'>> & Pick<ChannelPreviewMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'channel' | 'latestMessagePreview'>;
/**
 * This UI component displays an individual preview item for each channel in a list. It also receives all props
 * from the ChannelPreview component.
 */
export declare const ChannelPreviewMessenger: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: ChannelPreviewMessengerProps<At, Ch, Co, Ev, Me, Re, Us>): JSX.Element;
    displayName: string;
};
