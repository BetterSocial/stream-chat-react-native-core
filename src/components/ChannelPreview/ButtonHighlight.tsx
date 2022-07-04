
import React from 'react'
import {Pressable, Animated, InteractionManager, PressableProps} from 'react-native'
import PropTypes from 'prop-types';

const ButtonHightlight: React.FC<PressableProps> = (props) => {
    const {onPress, children} = props
    const {style}: any = props
    const [opacity] = React.useState(new Animated.Value(1))
    const ButtonAnimated = Animated.createAnimatedComponent(Pressable)

    const onPressClick = (event) => {
        Animated.timing(opacity, {
            toValue: 0.2,
            duration: 100,
            useNativeDriver: true
        }).start(() => {
            opacity.setValue(1)
            if(onPress && typeof onPress === 'function') {
                InteractionManager.runAfterInteractions(() => {
                    onPress(event)
                })
            }
           
        })
    }


    return (
        <ButtonAnimated {...props} style={[style, {opacity: opacity}]} onPress={onPressClick}  >
            {children}
        </ButtonAnimated>
    )
}


export default React.memo (ButtonHightlight)