import {useChatContext} from "../contexts/chatContext/ChatContext";
import {
    DefaultAttachmentType,
    DefaultChannelType,
    DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType,
    UnknownType
} from "../types/types";

export const useLocalChannelsFirst = async <
    At extends UnknownType = DefaultAttachmentType,
    Ch extends UnknownType = DefaultChannelType,
    Co extends string = DefaultCommandType,
    Ev extends UnknownType = DefaultEventType,
    Me extends UnknownType = DefaultMessageType,
    Re extends UnknownType = DefaultReactionType,
    Us extends UnknownType = DefaultUserType,
    >(get) => {

    const { client } = useChatContext<At, Ch, Co, Ev, Me, Re, Us>();
    // @ts-ignore
    const channelQueryResponse = await client.getLocalChannelData();

    // console.tron.log(channelQueryResponse, 'testing');
    channelQueryResponse.forEach((channel) => channel.state.setIsUpToDate(true));
    get(channelQueryResponse);
}
