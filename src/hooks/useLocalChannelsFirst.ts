// @ts-ignore
import React from 'react';
import {
    DefaultAttachmentType,
    DefaultChannelType,
    DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType,
    UnknownType
} from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLocalChannelsFirst = async <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(get) => {
    // @ts-ignore
    const localStorageChannel = (await AsyncStorage.getItem('@FIRST_CHANNEL')) || '';
    const data = JSON.parse(localStorageChannel);

    React.useEffect(() => {
        get(data);
    }, []);
}
