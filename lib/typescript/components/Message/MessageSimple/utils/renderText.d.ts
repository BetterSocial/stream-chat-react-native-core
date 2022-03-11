import { DefaultRules } from 'simple-markdown';
import type { MessageType } from '../../../MessageList/hooks/useMessageList';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../../../types/types';
import type { MessageContextValue } from '../../../../contexts/messageContext/MessageContext';
import type { Colors, MarkdownStyle } from '../../../../contexts/themeContext/utils/theme';
export declare type MarkdownRules = Partial<DefaultRules>;
export declare type RenderTextParams<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<Pick<MessageContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'onLongPress' | 'onPress' | 'preventPress'>> & {
    colors: typeof Colors;
    message: MessageType<At, Ch, Co, Ev, Me, Re, Us>;
    markdownRules?: MarkdownRules;
    markdownStyles?: MarkdownStyle;
    messageOverlay?: boolean;
    onLink?: (url: string) => Promise<void>;
    onlyEmojis?: boolean;
};
export declare const renderText: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(params: RenderTextParams<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
