import React from 'react'
import {
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from '../styles/Footer.component.style'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

const Footer=()=>{
    const navigation = useNavigation();

    const goHome=()=>{
        navigation.navigate('Dashboard')
    }
    const goPosts=()=>{
        navigation.navigate('Posts')
    }
    const goAuthors=()=>{
        navigation.navigate('Users')
    }

    return(
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>goHome()}>
                <Text style={styles.footerTabs}>
                <IconFontAwesome5 name="home" size={20}/>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goPosts()}>
                <Text style={[styles.footerTabs, styles.midTab]}>
                <IconMaterialCommunityIcons name="post" size={25} style={{textAlign: 'center', color: '#1e3603'}}/>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>goAuthors()}>
                <Text style={styles.footerTabs}>
                    <IconFontAwesome name="users" size={20}  style={{textAlign: 'center', color: '#1e3603'}}/>
                </Text>
            </TouchableOpacity>
        </View>	
    )
}

export default Footer