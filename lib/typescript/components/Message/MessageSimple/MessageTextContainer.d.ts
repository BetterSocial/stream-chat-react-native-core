import { StyleProp, ViewStyle } from 'react-native';
import { RenderTextParams } from './utils/renderText';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { MarkdownStyle, Theme } from '../../../contexts/themeContext/utils/theme';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../types/types';
export declare type MessageTextProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = MessageTextContainerProps<At, Ch, Co, Ev, Me, Re, Us> & {
    renderText: (params: RenderTextParams<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
    theme: {
        theme: Theme;
    };
};
export declare type MessageTextContainerPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'message' | 'onLongPress' | 'onlyEmojis' | 'onPress' | 'preventPress'> & Pick<MessagesContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'markdownRules' | 'MessageText'> & {
    markdownStyles?: MarkdownStyle;
    messageOverlay?: boolean;
    styles?: Partial<{
        textContainer: StyleProp<ViewStyle>;
    }>;
};
export declare type MessageTextContainerProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<MessageTextContainerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
export declare const MessageTextContainer: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<MessageTextContainerPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
