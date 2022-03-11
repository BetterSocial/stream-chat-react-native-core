import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { Channel } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelPreviewPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'client'> & Pick<ChannelsContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'Preview'> & {
    /**
     * The previewed channel
     */
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
};
export declare type ChannelPreviewProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Omit<ChannelPreviewPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'channel'>> & Pick<ChannelPreviewPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>, 'channel'>;
export declare const ChannelPreview: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: ChannelPreviewProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
