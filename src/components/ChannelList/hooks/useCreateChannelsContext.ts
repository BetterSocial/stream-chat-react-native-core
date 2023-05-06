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

    if(!additionalData) {
        additionalData = []
    }
    let newChannel = [...channels, ...additionalData].sort((a, b) => b.data?.last_message_at ? new Date(b.data?.last_message_at).getTime() - new Date(a.data?.last_message_at).getTime() : new Date(b.data?.updated_at).getTime() - new Date(a.data?.updated_at).getTime())
    const channelsContext: ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us> = useMemo(
        () => ({
            additionalFlatListProps,
            channels: newChannel,
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
            newChannel,
            // additionalData,
            // channels
        ],
    );

    return channelsContext;
};
