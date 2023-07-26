import React from 'react';

interface EasyFollowSystemProps {
    valueCallback: () => {
        isFollowing: false,
        isFollowers: false,
        isAnonymous: true
    },
    followButtonAction: () => void;
}

export const FollowSystemContext = React.createContext({
    fetchValue: () => {},
    followAction: () => {}
});

export const LoadingFollowSystemContext = React.createContext({
    loading: true,
    setLoading: () => {}
});

const EasyFollowSystem: React.FC<EasyFollowSystemProps> = ({children, valueCallback, followButtonAction}) => {
    const [loading, setLoading] = React.useState(true);
    const fetchValue = async (targetUserId: string) => {
        if (valueCallback) {
            const dataTemp = await valueCallback(targetUserId);
            return {
                isFollowing: dataTemp?.isMeFollowingTarget || false,
                isFollowers: dataTemp?.isTargetFollowingMe || false,
                isAnonymous: dataTemp?.isAnonymous
            };
        }
    }

    return (
        <FollowSystemContext.Provider value={{ fetchValue, followAction: followButtonAction}}>
            <LoadingFollowSystemContext.Provider value ={{loading, setLoading}}>
                {children}
            </LoadingFollowSystemContext.Provider>
        </FollowSystemContext.Provider>
    )
}

export default EasyFollowSystem;
