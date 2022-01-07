import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores, styles } from '../theme/appTheme';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();
    // const context = useContext(AuthContext);
    const { authState } = useContext(AuthContext);

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={styles.title}>Settings Screen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>

            <Icon name={authState.favoriteIcon!} size={125} color={colores.primary}/>
        </View>
    )
}
