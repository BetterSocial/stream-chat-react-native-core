import React from 'react';

interface EasyFollowSystemProps {
    refreshFollowData: (targetUserId: string) => {
        isMeFollowingTarget: boolean,
        isTargetFollowingMe: boolean,
        isAnonymous: boolean
    },
    followButtonAction: () => void;
    followData: any
}

export const FollowSystemContext = React.createContext({
    fetchValue: (targetUserId: string) => {},
    followAction: () => {},
    followData: {}
});

export const LoadingFollowSystemContext = React.createContext({
    loading: true,
    setLoading: () => {}
});

const EasyFollowSystem: React.FC<EasyFollowSystemProps> = ({children, followData, refreshFollowData, followButtonAction}) => {
    const [loading, setLoading] = React.useState(true);
    const fetchValue = async (targetUserId: string) => {
        if (refreshFollowData) refreshFollowData(targetUserId);
    }

    return (
        <FollowSystemContext.Provider value={{ fetchValue, followData, followAction: followButtonAction}}>
            <LoadingFollowSystemContext.Provider value ={{loading, setLoading}}>
                {children}
            </LoadingFollowSystemContext.Provider>
        </FollowSystemContext.Provider>
    )
}

export default EasyFollowSystem;
