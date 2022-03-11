import type { Channel, ChannelState, MessageResponse } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
declare type LatestMessage<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = ReturnType<ChannelState<At, Ch, Co, Ev, Me, Re, Us>['formatMessage']> | MessageResponse<At, Ch, Co, Me, Re, Us>;
export declare type LatestMessagePreview<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    created_at: string | number | Date;
    messageObject: LatestMessage<At, Ch, Co, Ev, Me, Re, Us> | undefined;
    previews: {
        bold: boolean;
        text: string;
    }[];
    status: number;
};
/**
 * Hook to set the display preview for latest message on channel.
 *
 * @param {*} channel Channel object
 *
 * @returns {object} latest message preview e.g.. { text: 'this was last message ...', created_at: '11/12/2020', messageObject: { originalMessageObject } }
 */
export declare const useLatestMessagePreview: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>, forceUpdate: number, lastMessage?: MessageResponse<At, Ch, Co, Me, Re, Us> | import("stream-chat").FormatMessageResponse<At, Ch, Co, Me, Re, Us> | undefined) => LatestMessagePreview<At, Ch, Co, Ev, Me, Re, Us>;
export {};
