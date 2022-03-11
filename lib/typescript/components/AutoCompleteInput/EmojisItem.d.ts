import React from 'react';
import type { Emoji } from '../../emoji-data/compiled';
export declare type EmojisItemProps = {
    /**
     * A EmojiResponse of suggested EmojiTypes with these properties
     *
     * - name: Name of emoji
     * - unicode: Emoji unicode value
     */
    item: Emoji;
};
export declare const EmojisItem: React.FC<EmojisItemProps>;
