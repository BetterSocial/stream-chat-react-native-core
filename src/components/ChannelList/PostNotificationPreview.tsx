import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import moment from 'moment'
import MemoIc_arrow_down_vote_on from './assets/Ic_downvote_on';
import MemoIc_arrow_upvote_on from './assets/Ic_upvote_on';
import MemoIc_comment from './assets/Ic_comment';
import MemoIc_block_inactive from './assets/Ic_block_inactive';
import MemoIc_block_active from './assets/Ic_block_active';

import { calculateTime } from 'stream-chat-react-native-core/src/components/ChannelList/customUtils';
import Anonym from './assets/images/anonym.png'
const styles = StyleSheet.create({
    containerCard: {
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 2,
        paddingVertical: 5,
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    avatarContainer: {
        marginRight: 10,
    },
    titleText: {
        fontWeight: 'bold',
        flex: 1,
        
    },
    lastContentContainer: {
        marginLeft: 'auto'
    },
    titleContainer: {
        maxWidth: '70%',
    },
    subtitleStyle: {
        color: '#6A6A6A',
        flex: 1
    },
    descriptionContainer: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    avatarNoHeight: {
        width: 40
    },
    centerAlign: {
        alignItems: 'center'
    },
    mr10: {
        marginRight: 15
    },
    textVoteMargin: {
        marginRight: 15
    },
    dateFont: {
        fontSize: 12
    }
})

type ItemChildren = {
    comments: CommentsChildren,
    postMaker: PostMakerChildren,
    titlePost:string,
    upvote: number,
    downvote: number,
    block:number,
    isAnonym: boolean
}

type CommentsChildren = {
    actor:object,
    length: number
}

type PostMakerChildren = {
    data: PostMakerDataChildren
}

type PostMakerDataChildren = {
    profile_pic_url:string,
    username:string
}

type PontNotfifcationPreviewProps = {
    context:ContextChildren,
    item:ItemChildren,
    onSelectAdditionalData: (item:object) => void
}

type ContextChildren = {
    profile: object[]
}


type DetailProfile = {
    myProfile?: MyProfileChildren
}

type MyProfileChildren = {
    user_id: string
}



const PostNotificationPreview : React.FC<PontNotfifcationPreviewProps> = ({item, context, onSelectAdditionalData}) => {
    const [profile] = context.profile
    const handleReplyComment = () => {
        const actorId = item.comments[0] && item.comments[0].actor && item.comments[0].actor.data && item.comments[0].actor.id
        const {myProfile} : DetailProfile = profile
        if(actorId === myProfile.user_id && !item.isAnonym) {
            return "You"
        } else if(item.comments[0] && item.comments[0].reaction && item.comments[0].reaction.parent !== "" && !item.isAnonym) {
            return `${item.comments[0] 
                && item.comments[0].actor 
                && item.comments[0].actor.data 
                && item.comments[0].actor.data.username} Replied to your comment`
        }
        else {
            if(!item.isAnonym) {
            return item.comments[0] 
            && item.comments[0].actor 
            && item.comments[0].actor.data 
            && item.comments[0].actor.data.username
            } else {
                return 'Anonymous'
            }
            
        }
    }
    const handleDate = (reaction) => {
        if(reaction && reaction.updated_at) {
            return calculateTime(moment(reaction.updated_at))
        }
        return ""
    }

    const handleImage = () => {
        if(item.isAnonym) {
            return Anonym
        }
        return {uri: item.postMaker.data.profile_pic_url}
    }

    return (
        <TouchableOpacity onPress={() => onSelectAdditionalData(item)}  style={styles.containerCard} >
            <View style={styles.row} >
            <View style={styles.avatarContainer} >
                {item.postMaker && item.postMaker.data ? <Image source={handleImage()} style={styles.avatar} /> : null}
            </View>
            <View style={styles.titleContainer} >
                {item.postMaker && item.postMaker.data ? <Text numberOfLines={1} style={styles.titleText} >{!item.isAnonym ? item.postMaker.data.username : 'Anonymous'}'s post: {item.titlePost}</Text> : null}
                
                <Text numberOfLines={2} style={styles.subtitleStyle} >
                    <Text style={styles.titleText} >
                    {handleReplyComment()}:
                    </Text>
                  
                    {" "}
                    {item.comments[0] 
                    && item.comments[0].reaction 
                    && item.comments[0].reaction.data 
                    && item.comments[0].reaction.data.text} </Text>
            </View>
            <View style={styles.lastContentContainer} >
                <Text style={styles.dateFont} >{handleDate(item.comments[0] && item.comments[0].reaction)} </Text>
            </View>
            </View>
         
            <View style={[styles.descriptionContainer]} >
                <View style={[styles.avatarContainer, styles.avatarNoHeight]} />
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                    <Text style={styles.textVoteMargin} >
                        {item.downvote}
                    </Text>
                    <MemoIc_arrow_down_vote_on width={15} height={15} />
                </View>
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                    <Text style={styles.textVoteMargin} >
                        {item.upvote}
                    </Text>
                    <MemoIc_arrow_upvote_on width={15} height={15} />
                </View>
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                    <Text style={styles.textVoteMargin} >
                        {item.comments.length}
                    </Text>
                    <MemoIc_comment width={15} height={15} />
                </View>
                <View style={[styles.row, styles.centerAlign, styles.mr10]} >
                    <Text style={styles.textVoteMargin} >
                        {String(item.block)}
                    </Text>
                    {Number(item.block) > 0 ?  <MemoIc_block_active width={15} height={15} /> : <MemoIc_block_inactive width={15} height={15} />}
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default PostNotificationPreview