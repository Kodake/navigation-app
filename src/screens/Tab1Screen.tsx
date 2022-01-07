import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native'
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableButtonIcon } from '../components/TouchableButtonIcon';


export const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    useEffect(() => {
        console.log('Tab1Screen effect');
    }, [])

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top + 10
        }}
        >
            <Text style={styles.title}> Iconos </Text>

            <Text>
                <TouchableButtonIcon iconName="airplane-outline" size={80} />
                <TouchableButtonIcon iconName="attach-outline" size={80} />
                <TouchableButtonIcon iconName="bonfire-outline" size={80} />
                <TouchableButtonIcon iconName="calculator-outline" size={80} />
                <TouchableButtonIcon iconName="chatbubble-ellipses-outline" size={80} />
                <TouchableButtonIcon iconName="images-outline" size={80} />
                <TouchableButtonIcon iconName="leaf-outline" size={80} />
            </Text>

        </View>
    )
}
