import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import type { GestureResponderEvent } from 'react-native';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType, UnknownType } from '../../types/types';
declare type AttachButtonPropsWithContext<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Pick<ChannelContextValue<At, Ch, Co, Ev, Me, Re, Us>, 'disabled'> & {
    /** Function that opens attachment options bottom sheet */
    handleOnPress?: ((event: GestureResponderEvent) => void) & (() => void);
    selectedPicker?: 'images';
};
export declare type AttachButtonProps<At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = DefaultCommandType, Ev extends UnknownType = DefaultEventType, Me extends UnknownType = DefaultMessageType, Re extends UnknownType = DefaultReactionType, Us extends UnknownType = DefaultUserType> = Partial<AttachButtonPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>;
/**
 * UI Component for attach button in MessageInput component.
 */
export declare const AttachButton: {
    <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>(props: Partial<AttachButtonPropsWithContext<At, Ch, Co, Ev, Me, Re, Us>>): JSX.Element;
    displayName: string;
};
export {};
