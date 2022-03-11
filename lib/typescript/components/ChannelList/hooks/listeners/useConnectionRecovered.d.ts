/// <reference types="react" />
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../../../types/types';
declare type Parameters = {
    refreshList: () => void;
    setForceUpdate: React.Dispatch<React.SetStateAction<number>>;
};
export declare const useConnectionRecovered: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>({ refreshList, setForceUpdate, }: Parameters) => void;
export {};
