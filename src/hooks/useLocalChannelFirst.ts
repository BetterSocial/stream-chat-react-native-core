// @ts-ignore
import React from 'react';
import {
    DefaultAttachmentType,
    DefaultChannelType,
    DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType,
    UnknownType
} from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalChannelsFirst = <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(get) => {
    // @ts-ignore
    return async () => {
        const localStorageChannel = (await AsyncStorage.getItem('@FIRST_CHANNEL')) || '';

        if (localStorageChannel === '') {
            get([]);
        } else {
            const data = JSON.parse(localStorageChannel);
            get(data);
        }
    }
}
