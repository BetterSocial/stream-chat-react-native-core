import React from 'react';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../types/types';
export declare type InlineLoadingMoreThreadIndicatorPropsWithContext = {
    threadLoadingMore?: boolean;
};
export declare const InlineLoadingMoreThreadIndicatorWithContext: React.FC<InlineLoadingMoreThreadIndicatorPropsWithContext>;
export declare const InlineLoadingMoreThreadIndicator: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => JSX.Element;
