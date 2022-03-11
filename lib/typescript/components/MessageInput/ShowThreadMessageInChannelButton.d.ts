import React from 'react';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../types/types';
export declare type ShowThreadMessageInChannelButtonWithContextProps = Pick<MessageInputContextValue, 'sendThreadMessageInChannel' | 'setSendThreadMessageInChannel'> & Pick<ThreadContextValue, 'allowThreadMessagesInChannel'> & Pick<TranslationContextValue, 't'> & {
    threadList?: boolean;
};
export declare const ShowThreadMessageInChannelButtonWithContext: React.FC<ShowThreadMessageInChannelButtonWithContextProps>;
export declare type ShowThreadMessageInChannelButtonProps = Partial<ShowThreadMessageInChannelButtonWithContextProps>;
export declare const ShowThreadMessageInChannelButton: {
    <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: ShowThreadMessageInChannelButtonProps): JSX.Element;
    displayName: string;
};
