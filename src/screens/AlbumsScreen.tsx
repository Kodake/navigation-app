import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {

    const { logOut, authState } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text>AlbumsScreen</Text>
            {
                authState.isLoggedIn ? <Button title="LogOut" onPress={logOut} /> : null
                // isLoggedIn && <Button title="SignIn" onPress={signIn} />
            }
        </View>
    )
}
