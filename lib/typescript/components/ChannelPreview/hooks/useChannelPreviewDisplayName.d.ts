import type { Channel } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
export declare const getChannelPreviewDisplayName: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ channelName, currentUserId, maxCharacterLength, members, }: {
    maxCharacterLength: number;
    channelName?: string | undefined;
    currentUserId?: string | undefined;
    members?: Record<string, import("stream-chat").ChannelMemberResponse<Us>> | undefined;
}) => string;
export declare const useChannelPreviewDisplayName: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(channel?: Channel<At, Ch, Co, Ev, Me, Re, Us> | undefined, characterLength?: number | undefined) => string;
