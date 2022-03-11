import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../types/types';
export declare const TypingIndicator: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends DefaultUserType = DefaultUserType>(): JSX.Element;
    displayName: string;
};
