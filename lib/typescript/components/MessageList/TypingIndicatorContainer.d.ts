import React, { PropsWithChildren } from 'react';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TypingContextValue } from '../../contexts/typingContext/TypingContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type TypingIndicatorContainerPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Pick<TypingContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'typing'> & Pick<ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'client'> & Pick<ThreadContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'thread'>;
export declare type TypingIndicatorContainerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends DefaultUserType = DefaultUserType> = Partial<TypingIndicatorContainerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
export declare const TypingIndicatorContainer: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(props: React.PropsWithChildren<Partial<TypingIndicatorContainerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>>): JSX.Element;
    displayName: string;
};
export {};
