// @ts-ignore
import React, { useEffect, useState } from 'react';
// RNGR's FlatList ist currently breaking the pull-to-refresh behaviour on Android
// See https://github.com/software-mansion/react-native-gesture-handler/issues/598
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ChannelPreview } from '../ChannelPreview/ChannelPreview';

import { useChatContext } from '../../contexts/chatContext/ChatContext';
import {
  ChannelsContextValue,
  useChannelsContext,
} from '../../contexts/channelsContext/ChannelsContext';
import { useTheme } from '../../contexts/themeContext/ThemeContext';

import type { Channel } from 'stream-chat';

import type {
  DefaultAttachmentType,
  DefaultChannelType,
  DefaultCommandType,
  DefaultEventType,
  DefaultMessageType,
  DefaultReactionType,
  DefaultUserType,
  UnknownType,
} from '../../types/types';
import PostNotificationPreview from 'stream-chat-react-native-core/src/components/ChannelList/PostNotificationPreview';

const styles = StyleSheet.create({
  flatList: { flex: 1 },
  flatListContentContainer: { flexGrow: 1 },
  statusIndicator: { left: 0, position: 'absolute', right: 0, top: 0 },
});

export type ChannelListMessengerPropsWithContext<
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    > = Omit<
    ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us>,
    | 'hasNextPage'
    | 'HeaderErrorIndicator'
    | 'HeaderNetworkDownIndicator'
    | 'maxUnreadCount'
    | 'numberOfSkeletons'
    | 'onSelect'
    | 'Preview'
    | 'PreviewTitle'
    | 'PreviewStatus'
    | 'PreviewAvatar'
    | 'previewMessage'
    | 'Skeleton'
    > & {clientData: any};

const StatusIndicator = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >() => {
  const { isOnline } = useChatContext<At, Ch, Co, Ev, Me, Re, Us>();
  const { error, HeaderErrorIndicator, HeaderNetworkDownIndicator, loadingChannels, refreshList } =
      useChannelsContext<At, Ch, Co, Ev, Me, Re, Us>();

  if (loadingChannels) return null;

  if (!isOnline) {
    return (
        <View style={styles.statusIndicator}>
          <HeaderNetworkDownIndicator />
        </View>
    );
  } else if (error) {
    // return (
    //   <View style={styles.statusIndicator}>
    //     <HeaderErrorIndicator onPress={refreshList} />
    //   </View>
    // );
    return null
  }
  return null;
};

// const renderItem = <
//   At extends UnknownType = DefaultAttachmentType,
//   Ch extends UnknownType = DefaultChannelType,
//   Co extends string = DefaultCommandType,
//   Ev extends UnknownType = DefaultEventType,
//   Me extends UnknownType = DefaultMessageType,
//   Re extends UnknownType = DefaultReactionType,
//   Us extends UnknownType = DefaultUserType,
// >({
//   item,
// }: {
//   item: Channel<At, Ch, Co, Ev, Me, Re, Us>;
// }) => {
//   if(item.type === 'messaging') {
//     return <ChannelPreview<At, Ch, Co, Ev, Me, Re, Us> channel={item} />
//   } else {
//     return <PostNotificationPreview />
//   }
// };


const keyExtractor = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(
    item: Channel<At, Ch, Co, Ev, Me, Re, Us>,
) => item.cid;

const ChannelListMessengerWithContext = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(
    props: ChannelListMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>,
) => {
  let {
    additionalFlatListProps,
    channels,
    clientData,
    EmptyStateIndicator,
    error,
    FooterLoadingIndicator,
    forceUpdate,
    ListHeaderComponent,
    loadingChannels,
    LoadingErrorIndicator,
    LoadingIndicator,
    loadingNextPage,
    loadMoreThreshold,
    loadNextPage,
    refreshing,
    refreshList,
    reloadList,
    setFlatListRef,
    additionalData,
    context,
    onSelectAdditionalData,
    showBadgePostNotif,
    countPostNotif,
    PostNotifComponent
  } = props;
  const {
    theme: {
      channelListMessenger: { flatList, flatListContent },
      colors: { white_snow },
    },
  } = useTheme();

  /**
   * In order to prevent the EmptyStateIndicator component from showing up briefly on mount,
   * we set the loading state one cycle behind to ensure the channels are set before the
   * change to loadingChannels is registered.
   */
  const [loading, setLoading] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(true)
  const [firstPage, setFirstPage] = useState(true);
  const [joinChannel, setJoinChannel] = useState([])

  useEffect(() => {
    if (!!loadingChannels !== loading) {
      setLoading(!!loadingChannels);
    }
  }, [loading, loadingChannels]);

  const getFromClientData = async () => {
    const newChannel = await clientData.concat(additionalData).map((channel) => {
      if(!channel.data.last_message_at) {
        return Object.assign(channel, {data: {...channel.data, last_message_at: channel.data.updated_at, last_message_time: new Date(channel.data.updated_at).getTime()}})
      } else {
        return Object.assign(channel, {data: {...channel.data, last_message_time: new Date(channel.data.last_message_at).getTime()}})
      }
    }).sort((a, b) => b.data.last_message_time - a.data.last_message_time)

    await setJoinChannel(newChannel);
  }

  useEffect(() => {
    getFromClientData();
  }, [])

  if (error && !refreshing && !loadingChannels && !channels?.length) {
    // return (
    //   <LoadingErrorIndicator
    //     error={error}
    //     listType='channel'
    //     loadNextPage={loadNextPage}
    //     retry={reloadList}
    //   />
    // );
    return null
  }

  const onEndReached = () => {
    if (loadNextPage) {
      loadNextPage();
      setFirstPage(false);
    }
  };


  const renderItem = ({item, index}) => {
    if(item.type === 'messaging') {
      return <ChannelPreview<At, Ch, Co, Ev, Me, Re, Us> key={index} refreshList={refreshList} channel={item} />
    } else {
      return PostNotifComponent ? <PostNotifComponent item={item} index={index} refreshList={refreshList} />  : <PostNotificationPreview countPostNotif={countPostNotif} showBadgePostNotif={showBadgePostNotif} onSelectAdditionalData={onSelectAdditionalData} item={item} context={context}  />
    }
  }

  const handleUpdate = async () => {
    // reloadList()
    const newChannel = await channels.concat(additionalData).map((channel) => {
      if(!channel.data.last_message_at) {
        return Object.assign(channel, {data: {...channel.data, last_message_at: channel.data.updated_at, last_message_time: new Date(channel.data.updated_at).getTime()}})
      } else {
        return Object.assign(channel, {data: {...channel.data, last_message_time: new Date(channel.data.last_message_at).getTime()}})
      }
    }).sort((a, b) => b.data.last_message_time - a.data.last_message_time)

    await setJoinChannel(newChannel)
    setTimeout(() => {
      refreshList()
      setLoadingUpdate(false)
    }, 1000)
  }

  useEffect(() => {
    if(!loading) {
      handleUpdate()

    }
  }, [channels, additionalData, loading])

  const ListFooterComponent = () =>
      channels.length && ListHeaderComponent ? <ListHeaderComponent /> : null;
  return (
      <>
        <FlatList
            contentContainerStyle={[
              styles.flatListContentContainer,
              { backgroundColor: white_snow },
              flatListContent,
            ]}
            data={joinChannel}
            extraData={forceUpdate}
            keyExtractor={keyExtractor}
            ListEmptyComponent={
              !loading ? (
                  null

              ) : (
                  <LoadingIndicator listType='channel' />
              )
            }
            ListFooterComponent={loadingNextPage ? <FooterLoadingIndicator /> : undefined}
            ListHeaderComponent={ListFooterComponent}
            onEndReached={onEndReached}
            onEndReachedThreshold={loadMoreThreshold}
            ref={setFlatListRef}
            refreshControl={<RefreshControl onRefresh={refreshList} refreshing={refreshing} />}
            renderItem={renderItem}
            style={[styles.flatList, { backgroundColor: white_snow }, flatList]}
            testID='channel-list-messenger'
            {...additionalFlatListProps}
        />

        <StatusIndicator<At, Ch, Co, Ev, Me, Re, Us> />
      </>
  );
};

export type ChannelListMessengerProps<
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    > = Partial<ChannelListMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;

/**
 * This UI component displays the preview list of channels and handles Channel navigation. It
 * receives all props from the ChannelList component.
 *
 * @example ./ChannelListMessenger.md
 */
export const ChannelListMessenger = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(
    props: ChannelListMessengerProps<At, Ch, Co, Ev, Me, Re, Us>,
) => {
  const {
    additionalFlatListProps,
    channels,
    EmptyStateIndicator,
    error,
    FooterLoadingIndicator,
    forceUpdate,
    ListHeaderComponent,
    loadingChannels,
    LoadingErrorIndicator,
    LoadingIndicator,
    loadingNextPage,
    loadMoreThreshold,
    loadNextPage,
    refreshing,
    refreshList,
    reloadList,
    setFlatListRef,
  } = useChannelsContext<At, Ch, Co, Ev, Me, Re, Us>();
  const {client} = useChatContext<At, Ch, Co, Ev, Me, Re, Us>();

  const clientData = client.getLocalChannelData(props.clientData);

  return (
      // @ts-ignore
      <ChannelListMessengerWithContext
          {...{
            additionalFlatListProps,
            channels,
            EmptyStateIndicator,
            error,
            FooterLoadingIndicator,
            forceUpdate,
            ListHeaderComponent,
            loadingChannels,
            LoadingErrorIndicator,
            LoadingIndicator,
            loadingNextPage,
            loadMoreThreshold,
            loadNextPage,
            refreshing,
            refreshList,
            reloadList,
            setFlatListRef,
          }}
          clientData={clientData}
          {...props}
      />
  );
};

ChannelListMessenger.displayName = 'ChannelListMessenger{channelListMessenger}';
