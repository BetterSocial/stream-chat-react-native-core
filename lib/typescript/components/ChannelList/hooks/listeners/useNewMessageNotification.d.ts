/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../../types/types';
declare type Parameters<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>;
    onMessageNew?: (setChannels: React.Dispatch<React.SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>, event: Event<At, Ch, Co, Ev, Me, Re, Us>) => void;
};
export declare const useNewMessageNotification: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ onMessageNew, setChannels, }: Parameters<At, Ch, Co, Ev, Me, Re, Us>) => void;
export {};
