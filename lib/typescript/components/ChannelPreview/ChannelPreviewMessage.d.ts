import React from 'react';
import type { LatestMessagePreview } from './hooks/useLatestMessagePreview';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ChannelPreviewMessageProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = {
    latestMessagePreview: LatestMessagePreview<At, Ch, Co, Ev, Me, Re, Us>;
};
export declare const ChannelPreviewMessage: React.FC<ChannelPreviewMessageProps>;
