import type { StreamChat } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../types/types';
/**
 * Disconnect the websocket connection when app goes to background,
 * and reconnect when app comes to foreground.
 * We do this to make sure, user receives push notifications when app is in the background.
 * You can't receive push notification until you have active websocket connection.
 */
export declare const useIsOnline: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>, closeConnectionOnBackground?: boolean) => {
    connectionRecovering: boolean;
    isOnline: boolean;
};
