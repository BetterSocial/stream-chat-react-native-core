import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelListMessengerPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Omit<ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'hasNextPage' | 'HeaderErrorIndicator' | 'HeaderNetworkDownIndicator' | 'maxUnreadCount' | 'numberOfSkeletons' | 'onSelect' | 'Preview' | 'PreviewTitle' | 'PreviewStatus' | 'PreviewAvatar' | 'previewMessage' | 'Skeleton'>;
export declare type ChannelListMessengerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<ChannelListMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * This UI component displays the preview list of channels and handles Channel navigation. It
 * receives all props from the ChannelList component.
 *
 * @example ./ChannelListMessenger.md
 */
export declare const ChannelListMessenger: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<ChannelListMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
