import React from 'react';

interface EasyFollowSystemProps {
    valueCallback: () => {
        isFollowing: false,
        isFollowers: false
    },
    followButtonAction: () => void;
}

export const FollowSystemContext = React.createContext({
    fetchValue: () => {},
    followAction: () => {}
});

const EasyFollowSystem: React.FC<EasyFollowSystemProps> = ({children, valueCallback, followButtonAction}) => {
    const fetchValue = async (targetUserId: string) => {
        if (valueCallback) {
            const dataTemp = await valueCallback(targetUserId);
            return{
                isFollowing: dataTemp?.isMeFollowingTarget || false,
                isFollowers: dataTemp?.isTargetFollowingMe || false,
            };
        }
    }

    return (
        <FollowSystemContext.Provider value={{ fetchValue, followAction: followButtonAction}}>
            {children}
        </FollowSystemContext.Provider>
    )
}

export default EasyFollowSystem;
