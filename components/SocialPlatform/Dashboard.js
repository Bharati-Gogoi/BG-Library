import React, { useEffect, useState } from 'react'
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Footer from '../Footer'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFoundation from 'react-native-vector-icons/Foundation'
import styles from '../../styles/Dashboard.component.style'

const Dashboard=({navigation})=>{
    const viewPosts=()=>{
        navigation.navigate('Posts')
    }
    const viewUsers=()=>{
        navigation.navigate('Users')
    }
    const viewTodos=()=>{
        navigation.navigate('Todos')
    }
                                   
    return (
        <View style={styles.droot}>
            <ScrollView>
                <View style={styles.mainView}>
                    <TouchableOpacity onPress={()=>viewPosts()}
                     style={styles.d_touchables}>
                        <IconMaterialCommunityIcons name="post" size={30} style={{textAlign: 'center', color: '#526938'}}/>
                        <Text style={{textAlign: 'center', color: '#5a9216', paddingTop: 10}}>Feeds</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>viewUsers()}
                    style={styles.d_touchables}>
                        <IconFontAwesome name="users" size={30}  style={{textAlign: 'center', color: '#526938'}}/>
                        <Text style={{textAlign: 'center', color: '#5a9216', paddingTop: 10}}>Authors</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>viewTodos()}
                     style={styles.d_touchables}>
                        <IconFoundation name="clipboard-notes" size={40} style={{textAlign: 'center', color: '#526938'}}/>
                        <Text style={{textAlign: 'center', color: '#5a9216', paddingTop: 10}}>Todos</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View>
                <Footer/>
            </View>
        </View>
    )
}
export default Dashboard
