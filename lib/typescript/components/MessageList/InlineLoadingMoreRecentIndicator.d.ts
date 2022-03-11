import React from 'react';
import type { DefaultAttachmentType, DefaultChannelType, DefaultUserType, UnknownType } from '../../types/types';
export declare type InlineLoadingMoreRecentIndicatorPropsWithContext = {
    loadingMoreRecent?: boolean;
};
export declare const InlineLoadingMoreRecentIndicatorWithContext: React.FC<InlineLoadingMoreRecentIndicatorPropsWithContext>;
export declare const InlineLoadingMoreRecentIndicator: <At extends UnknownType = DefaultAttachmentType, Ch extends UnknownType = DefaultChannelType, Co extends string = import("stream-chat").LiteralStringForUnion, Ev extends UnknownType = UnknownType, Me extends UnknownType = UnknownType, Re extends UnknownType = UnknownType, Us extends UnknownType = DefaultUserType>() => JSX.Element;
