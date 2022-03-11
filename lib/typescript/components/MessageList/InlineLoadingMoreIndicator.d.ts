import React from 'react';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../types/types';
export declare type InlineLoadingMoreIndicatorPropsWithContext = {
    loadingMore?: boolean;
};
export declare const InlineLoadingMoreIndicatorWithContext: React.FC<InlineLoadingMoreIndicatorPropsWithContext>;
export declare const InlineLoadingMoreIndicator: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => JSX.Element;
