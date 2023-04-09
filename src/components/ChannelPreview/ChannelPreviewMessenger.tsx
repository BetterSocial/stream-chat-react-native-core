import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import { ChannelAvatar } from './ChannelAvatar';
import { useChannelPreviewDisplayName } from './hooks/useChannelPreviewDisplayName';

import {
  ChannelsContextValue,
  useChannelsContext,
} from '../../contexts/channelsContext/ChannelsContext';
import { useTheme } from '../../contexts/themeContext/ThemeContext';
import { vw } from '../../utils/utils';
import {FollowSystemContext} from '../ChannelList/EasyFollowSystem';
import { useIsFocused } from '@react-navigation/native';

import type { ChannelPreviewProps } from './ChannelPreview';
import type { LatestMessagePreview } from './hooks/useLatestMessagePreview';

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
import { ChannelPreviewTitle } from './ChannelPreviewTitle';
import { ChannelPreviewMessage } from './ChannelPreviewMessage';
import { ChannelPreviewStatus } from './ChannelPreviewStatus';
import { ChannelPreviewUnreadCount } from './ChannelPreviewUnreadCount';
import ButtonHighlight from 'stream-chat-react-native-core/src/components/ChannelPreview/ButtonHighlight';
import {FollowSystem} from "stream-chat-react-native-core/src/components/ChannelList/EasyFollowSystem";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  contentContainer: { flex: 2.5 },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  column: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  columnRight: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  columnRightCenter: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  title: { fontSize: 14, fontWeight: '700' },
  followButton: {
    paddingVertical: 6,
    paddingHorizontal: 21,
    borderRadius: 8,
    backgroundColor: '#00ADB5',
  },
  followingButton: {
    paddingVertical: 6,
    paddingHorizontal: 21,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00ADB5'
  },
  followText: {
    color: '#FFFFFF'
  },
  followingText: {
    color: '#00ADB5'
  }
});

const maxWidth = vw(80) - 16 - 40;

export type ChannelPreviewMessengerPropsWithContext<
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    > = Pick<ChannelPreviewProps<At, Ch, Co, Ev, Me, Re, Us>, 'channel'> &
    Pick<
        ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us>,
        | 'maxUnreadCount'
        | 'onSelect'
        | 'PreviewAvatar'
        | 'PreviewMessage'
        | 'PreviewStatus'
        | 'PreviewTitle'
        | 'PreviewUnreadCount'
        > & {
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

const ChannelPreviewMessengerWithContext = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(
    props: ChannelPreviewMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>,
) => {
  const {
    channel,
    formatLatestMessageDate,
    latestMessagePreview,
    maxUnreadCount,
    onSelect,
    PreviewAvatar = ChannelAvatar,
    PreviewMessage = ChannelPreviewMessage,
    PreviewStatus = ChannelPreviewStatus,
    PreviewTitle = ChannelPreviewTitle,
    PreviewUnreadCount = ChannelPreviewUnreadCount,
    unread,
    refreshList
  } = props;

  const {
    theme: {
      channelPreview: { container, contentContainer, row, title },
      colors: { border, white },
    },
  } = useTheme();
  const [temporaryShowed, setTemporaryShowed] = React.useState(false);

  const {fetchValue, followAction} = React.useContext(FollowSystemContext);
  const [forcedUpdate, setForcedUpdate] = React.useState({isFollowing: true, isFollowers: false});
  const isFocused = useIsFocused();
  const displayName = useChannelPreviewDisplayName(
      channel,
      Math.floor(maxWidth / ((title.fontSize || styles.title.fontSize) / 2)),
  );

  React.useEffect(async () => {
    return () => {
      setTemporaryShowed(false);
    }
  }, [])

  React.useEffect(async () => {
    if (channel?.state?.members) {
      const targetUserIdList = Object.entries(channel.state.members);
      const filtered = targetUserIdList.filter(([key, value]) => key !== channel?._client?._user?.id);

      const data = await fetchValue(filtered[0][0]);
      setForcedUpdate({...data});
      setTemporaryShowed(false);
    }
  }, [isFocused]);

  const followOrFollowingText = () => {
    if (temporaryShowed || forcedUpdate.isFollowing) {
      return 'Following';
    }
    if (forcedUpdate.isFollowers) {
      return 'Follow Back';
    }
    return 'Follow';
  }

  const onPressFollow = () => {
    if (!temporaryShowed) {
      const targetUserIdList = Object.entries(channel.state.members);
      const filtered = targetUserIdList.filter(([key, value]) => key !== channel?._client?._user?.id);

      const returnedOrSaved = followAction(channel?._client?._user?.id, filtered[0][0], channel?._client?._user?.name, filtered[0][1].user.name);
      setTemporaryShowed(true);
    }
  }

  const followButton = () => {
    if (channel.type !== 'messaging' || (!temporaryShowed && forcedUpdate.isFollowing) || forcedUpdate.isFollowing || (forcedUpdate.isFollowers && forcedUpdate.isFollowing)) {
      return styles.columnRight;
    }
    return styles.columnRightCenter;
  }

  const FollowButtonSwitch = () => {
    if (channel.type !== 'messaging' || (!temporaryShowed && forcedUpdate.isFollowing) || forcedUpdate.isFollowing || (forcedUpdate.isFollowers && forcedUpdate.isFollowing)) {
      return (
          <>
            <PreviewStatus
                channel={channel}
                formatLatestMessageDate={formatLatestMessageDate}
                latestMessagePreview={latestMessagePreview}
            />
            <PreviewUnreadCount channel={channel} maxUnreadCount={maxUnreadCount} unread={unread}/>
          </>
      )
    }

    return (
        <>
          <TouchableOpacity onPress={onPressFollow} style={temporaryShowed ? styles.followingButton : styles.followButton}>
            <Text style={temporaryShowed ? styles.followingText : styles.followText}>
              {followOrFollowingText()}
            </Text>
          </TouchableOpacity>
        </>
    )}

  return (
      <ButtonHighlight
          onPress={() => {
            if (onSelect) {
              onSelect(channel, refreshList);
            }
          }}
          style={[
            styles.container,
            { backgroundColor: white, borderBottomColor: border },
            container,
          ]}
          testID='channel-preview-button'
      >
        <PreviewAvatar channel={channel} />
        <View style={[styles.contentContainer, contentContainer]}>
          <View style={[styles.column, row]}>
            <PreviewTitle channel={channel} displayName={displayName} />
            <PreviewMessage latestMessagePreview={latestMessagePreview} channel={channel} />
          </View>
        </View>
        <View style={[followButton(), row]}>
          {FollowButtonSwitch()}
        </View>
      </ButtonHighlight>
  );
};

export type ChannelPreviewMessengerProps<
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    > = Partial<
    Omit<
        ChannelPreviewMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>,
        'channel' | 'latestMessagePreview'
        >
    > &
    Pick<
        ChannelPreviewMessengerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>,
        'channel' | 'latestMessagePreview'
        >;

const MemoizedChannelPreviewMessengerWithContext = ChannelPreviewMessengerWithContext

/**
 * This UI component displays an individual preview item for each channel in a list. It also receives all props
 * from the ChannelPreview component.
 */
export const ChannelPreviewMessenger = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(
    props: ChannelPreviewMessengerProps<At, Ch, Co, Ev, Me, Re, Us>,
) => {
  const {
    maxUnreadCount,
    onSelect,
    PreviewAvatar,
    PreviewMessage,
    PreviewStatus,
    PreviewTitle,
    PreviewUnreadCount,
  } = useChannelsContext<At, Ch, Co, Ev, Me, Re, Us>();
  return (
      <MemoizedChannelPreviewMessengerWithContext
          {...{
            maxUnreadCount,
            onSelect,
            PreviewAvatar,
            PreviewMessage,
            PreviewStatus,
            PreviewTitle,
            PreviewUnreadCount,
          }}
          {...props}
      />
  );
};

ChannelPreviewMessenger.displayName = 'ChannelPreviewMessenger{channelPreview}';
