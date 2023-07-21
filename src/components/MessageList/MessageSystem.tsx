import React from 'react';
import {
  FollowSystemContext,
  LoadingFollowSystemContext
} from 'stream-chat-react-native-core/src/components/ChannelList/EasyFollowSystem';
import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useIsFocused} from "@react-navigation/native";
import {useNavigation} from '@react-navigation/core';

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
import type { MessageType } from './hooks/useMessageList';
import {
  TDateTimeParserInput,
  isDayOrMoment,
  useTranslationContext,
} from '../../contexts/translationContext/TranslationContext';
import { useTheme } from '../../contexts/themeContext/ThemeContext';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  line: {
    flex: 1,
    height: 0.5,
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8
  },
  textContainer: {
    flex: 3,
    marginTop: 10,
  },
  followButton: {
    paddingVertical: 6,
    paddingHorizontal: 21,
    borderRadius: 8,
    backgroundColor: '#00ADB5',
    alignSelf: 'center',
    marginHorizontal: 8
  },
  followingButton: {
    paddingVertical: 6,
    paddingHorizontal: 21,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00ADB5',
    alignSelf: 'center',
    marginHorizontal: 8
  },
  followText: {
    color: '#FFFFFF'
  },
  followingText: {
    color: '#00ADB5'
  }
});

export type MessageSystemProps<
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
> = {
  /** Current [message object](https://getstream.io/chat/docs/#message_format) */
  message: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
  /**
   * Formatter function for date object.
   *
   * @param date TDateTimeParserInput object of message
   * @returns string
   */
  formatDate?: (date: TDateTimeParserInput) => string;
  style?: StyleProp<ViewStyle>;
};

/**
 * A component to display system message. e.g, when someone updates the channel,
 * they can attach a message with that update. That message will be available
 * in message list as (type) system message.
 */
export const MessageSystem = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
>(
    props: MessageSystemProps<At, Ch, Co, Ev, Me, Re, Us>,
) => {
  const { formatDate, message, style, channel, temporaryShowed, data, setTemporaryShowed } = props;
  const {setLoading} = React.useContext(LoadingFollowSystemContext);
  const isFocused = useIsFocused();
  const {followAction} = React.useContext(FollowSystemContext);
  const {navigate} = useNavigation();
  const {
    theme: {
      colors: { grey, grey_whisper },
      messageList: {
        messageSystem: { container, dateText, line, text, textContainer },
      },
    },
  } = useTheme();
  const { tDateTimeParser } = useTranslationContext();

  const createdAt = message.created_at;
  const parsedDate = tDateTimeParser(createdAt);
  const date =
      formatDate && createdAt
          ? formatDate(createdAt)
          : parsedDate && isDayOrMoment(parsedDate)
              ? parsedDate.calendar().toUpperCase()
              : parsedDate;

  const followOrFollowingText = () => {
    if (temporaryShowed || (data.isFollowers && data.isFollowing)) {
      return 'See Profile';
    }

    if (data.isFollowers) {
      return 'Follow Back';
    }

    return 'Follow';
  }

  const onPressFollow = () => {
    const targetUserIdList = Object.entries(channel.state.members);
    const filtered = targetUserIdList.filter(([key, value]) => key !== channel?._client?._user?.id);

    if (temporaryShowed || (data.isFollowers && data.isFollowing)) {
      navigate('OtherProfile', {
        data: {
          user_id: channel?._client?._user?.id,
          other_id: filtered[0][1].user.id,
          username: filtered[0][1].user.name
        }
      });
    } else if (!temporaryShowed || data.isFollowers) {
      const returnedOrSaved = followAction(channel?._client?._user?.id, filtered[0][1].user.id, channel?._client?._user?.name, filtered[0][1].user.name);
      setTemporaryShowed(true);
      setLoading(false);
    }
  }

  return (
      <View style={[styles.container, style, container]} testID='message-system'>
        <View style={[styles.line, { backgroundColor: grey_whisper }, line]} />
        <View style={[styles.textContainer, textContainer]}>
          <Text style={[styles.text, { color: grey }, text]}>
            {message.text?.toUpperCase() || ''}
          </Text>
          {(channel.type === 'messaging' && !data?.isAnonymous) ? (
              <TouchableOpacity onPress={onPressFollow} style={temporaryShowed || (data.isFollowing && data.isFollowers) ? styles.followingButton : styles.followButton}>
                <Text style={temporaryShowed || (data.isFollowing && data.isFollowers) ? styles.followingText : styles.followText}>
                  {followOrFollowingText()}
                </Text>
              </TouchableOpacity>
          ):<></>}
          <Text style={[styles.text, { color: grey }, dateText]}>{date}</Text>
        </View>
        <View style={[styles.line, { backgroundColor: grey_whisper }, line]} />
      </View>
  );
};

MessageSystem.displayName = 'MessageSystem{messageList{messageSystem}}';
