import { useMemo } from 'react';

import type { ChannelsContextValue } from '../../../contexts/channelsContext/ChannelsContext';
import type {
    DefaultAttachmentType,
    DefaultChannelType,
    DefaultCommandType,
    DefaultEventType,
    DefaultMessageType,
    DefaultReactionType,
    DefaultUserType,
    UnknownType,
} from '../../../types/types';

export const useCreateChannelsContext = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >({
          additionalFlatListProps,
          channels,
          EmptyStateIndicator,
          error,
          FooterLoadingIndicator,
          forceUpdate,
          hasNextPage,
          HeaderErrorIndicator,
          HeaderNetworkDownIndicator,
          ListHeaderComponent,
          loadingChannels,
          LoadingErrorIndicator,
          LoadingIndicator,
          loadingNextPage,
          loadMoreThreshold,
          loadNextPage,
          maxUnreadCount,
          numberOfSkeletons,
          onSelect,
          Preview,
          PreviewAvatar,
          PreviewMessage,
          PreviewStatus,
          PreviewTitle,
          PreviewUnreadCount,
          refreshing,
          refreshList,
          reloadList,
          setFlatListRef,
          Skeleton,
          additionalData
      }: ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us>) => {
    const channelValueString = channels
        .map(
            (channel) =>
                `${channel.data?.name}${Object.values(channel.state.members)
                    .map((member) => member.user?.online)
                    .join()}`,
        )
        .join();

    if (additionalData && additionalData.length !== 0) {
        const channelsConcatWithData = channels.concat(additionalData).map((channel) => {

            if(!channel?.data?.last_message_at) {
                return Object.assign(channel, {data: {...channel.data, last_message_at: channel.data.updated_at, last_message_time: new Date(channel.data.updated_at).getTime()}});
            } else {
                return Object.assign(channel, {data: {...channel.data, last_message_time: new Date(channel.data.last_message_at).getTime()}});
            }
        }).sort((a, b) => b.data.last_message_time - a.data.last_message_time)

        const channelsContext: ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us> = useMemo(
            () => ({
                additionalFlatListProps,
                channels: channelsConcatWithData,
                EmptyStateIndicator,
                error,
                FooterLoadingIndicator,
                forceUpdate,
                hasNextPage,
                HeaderErrorIndicator,
                HeaderNetworkDownIndicator,
                ListHeaderComponent,
                loadingChannels,
                LoadingErrorIndicator,
                LoadingIndicator,
                loadingNextPage,
                loadMoreThreshold,
                loadNextPage,
                maxUnreadCount,
                numberOfSkeletons,
                onSelect,
                Preview,
                PreviewAvatar,
                PreviewMessage,
                PreviewStatus,
                PreviewTitle,
                PreviewUnreadCount,
                refreshing,
                refreshList,
                reloadList,
                setFlatListRef,
                Skeleton
            }),
            [
                channelValueString,
                error,
                forceUpdate,
                hasNextPage,
                loadingChannels,
                loadingNextPage,
                refreshing,
            ],
        );

        return channelsContext;
    }

    const channelsContext: ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us> = useMemo(
        () => ({
            additionalFlatListProps,
            channels,
            EmptyStateIndicator,
            error,
            FooterLoadingIndicator,
            forceUpdate,
            hasNextPage,
            HeaderErrorIndicator,
            HeaderNetworkDownIndicator,
            ListHeaderComponent,
            loadingChannels,
            LoadingErrorIndicator,
            LoadingIndicator,
            loadingNextPage,
            loadMoreThreshold,
            loadNextPage,
            maxUnreadCount,
            numberOfSkeletons,
            onSelect,
            Preview,
            PreviewAvatar,
            PreviewMessage,
            PreviewStatus,
            PreviewTitle,
            PreviewUnreadCount,
            refreshing,
            refreshList,
            reloadList,
            setFlatListRef,
            Skeleton
        }),
        [
            channelValueString,
            error,
            forceUpdate,
            hasNextPage,
            loadingChannels,
            loadingNextPage,
            refreshing,
        ],
    );

    return channelsContext;
};
