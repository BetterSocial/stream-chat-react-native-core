import React from 'react';
export declare type LoadingErrorProps = {
    error?: boolean;
    listType?: 'channel' | 'message' | 'default';
    loadNextPage?: () => Promise<void>;
    retry?: () => void;
};
export declare const LoadingErrorIndicator: React.FC<LoadingErrorProps>;
