import React from 'react';
import { ChannelListMessengerProps } from './ChannelListMessenger';
import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { Channel, ChannelFilters, ChannelOptions, ChannelSort, Event } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelListProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Pick<ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'additionalFlatListProps' | 'EmptyStateIndicator' | 'FooterLoadingIndicator' | 'HeaderErrorIndicator' | 'HeaderNetworkDownIndicator' | 'LoadingErrorIndicator' | 'LoadingIndicator' | 'Preview' | 'setFlatListRef' | 'ListHeaderComponent' | 'onSelect' | 'PreviewAvatar' | 'PreviewMessage' | 'PreviewStatus' | 'PreviewTitle' | 'PreviewUnreadCount' | 'loadMoreThreshold' | 'Skeleton' | 'maxUnreadCount' | 'numberOfSkeletons'>> & {
    /**
     * Object containing channel query filters
     *
     * @see See [Channel query documentation](https://getstream.io/chat/docs/query_channels) for a list of available filter fields
     *
     * @overrideType object
     * */
    filters?: ChannelFilters<Ch, Co, Us>;
    /**
     * Custom UI component to display the list of channels
     *
     * Default: [ChannelListMessenger](https://getstream.github.io/stream-chat-react-native/v3/#channellistmessenger)
     */
    List?: React.ComponentType<ChannelListMessengerProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /**
     * If set to true, channels won't dynamically sort by most recent message, defaults to false
     */
    lockChannelOrder?: boolean;
    /**
     * Function that overrides default behavior when a user gets added to a channel
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event Object](https://getstream.io/chat/docs/event_object) corresponding to `notification.added_to_channel` event
     *
     * @overrideType Function
     * */
    onAddedToChannel?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Function that overrides default behavior when a channel gets deleted. In absence of this prop, the channel will be removed from the list.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.deleted` event
     *
     * @overrideType Function
     * */
    onChannelDeleted?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Function that overrides default behavior when a channel gets hidden. In absence of this prop, the channel will be removed from the list.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.hidden` event
     *
     * @overrideType Function
     * */
    onChannelHidden?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Function to customize behavior when a channel gets truncated
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.truncated` event
     *
     * @overrideType Function
     * */
    onChannelTruncated?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Function that overrides default behavior when a channel gets updated
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.updated` event
     *
     * @overrideType Function
     * */
    onChannelUpdated?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Function that overrides default behavior when a channel gets visible. In absence of this prop, the channel will be added to the list.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.visible` event
     *
     * @overrideType Function
     * */
    onChannelVisible?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Override the default listener/handler for event `notification.message_new`
     * This event is received on channel, which is not being watched.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `notification.message_new` event
     *
     * @overrideType Function
     * */
    onMessageNew?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Function that overrides default behavior when a user gets removed from a channel
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `notification.removed_from_channel` event
     *
     * @overrideType Function
     * */
    onRemovedFromChannel?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
    /**
     * Object containing channel query options
     * @see See [Channel query documentation](https://getstream.io/chat/docs/query_channels) for a list of available option fields
     * */
    options?: ChannelOptions;
    /**
     * Object containing channel sort parameters
     * @see See [Channel query documentation](https://getstream.io/chat/docs/query_channels) for a list of available sorting fields
     * */
    sort?: ChannelSort<Ch>;
};
/**
 * This component fetches a list of channels, allowing you to select the channel you want to open.
 * The ChannelList doesn't provide any UI for the underlying React Native FlatList. UI is determined by the `List` component which is
 * provided to the ChannelList component as a prop. By default, the ChannelListMessenger component is used as the list UI.
 *
 * @example ./ChannelList.md
 */
export declare const ChannelList: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: ChannelListProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
