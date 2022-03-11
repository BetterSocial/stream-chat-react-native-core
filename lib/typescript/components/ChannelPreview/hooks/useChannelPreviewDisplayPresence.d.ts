import type { Channel } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
/**
 * Hook to set the display avatar presence for channel preview
 * @param {*} channel
 *
 * @returns {boolean} e.g., true
 */
export declare const useChannelPreviewDisplayPresence: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(channel: Channel<At, Ch, Co, Ev, Me, Re, Us>) => boolean;
