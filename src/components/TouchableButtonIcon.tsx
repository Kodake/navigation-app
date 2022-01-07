import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/AuthContext'
import { colores } from '../theme/appTheme'

interface Props {
    iconName: string;
    size: number;
}

export const TouchableButtonIcon = ({ iconName, size }: Props) => {

    const { changeFavoriteIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
            <Icon
                name={iconName}
                size={size}
                color={colores.primary} />
        </TouchableOpacity>
    )
}
