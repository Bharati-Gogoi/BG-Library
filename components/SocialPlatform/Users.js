import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Footer from '../Footer'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import styles from '../../styles/Users.component.style'

const Users=({navigation})=>{
    const [author, setAuthor] = useState([])
    const [useStatus, setUserStatus] = useState([])

    useEffect(()=>{
        allUsers()
    },[])

    const allUsers = async()=>{
        try{	
			let getUsers = await fetch(
				'https://gorest.co.in/public/v1/users'
			)
			let usersJson = await getUsers.json()
            setAuthor(usersJson.data)
		}catch(e){
			console.log(e)
		}
    }

    const getOneUser=(authrid)=>{
        navigation.navigate('OneUser',{uid: authrid})
    }

    return(
        <View style={styles.u_root}>
            <ScrollView>
                <Text style={styles.user_heading}>Authors</Text>
                {
                    author.map((authr, i) => (
                        <TouchableOpacity onPress={()=>getOneUser(authr.id)}
                        key={i}
                        style={styles.user_block}>
                            <Text style={styles.user_name} key={i}> 
                                {authr.name} &nbsp;
                                {authr.status == 'active' ? (
                                    <IconIonicons name="radio-button-on" size={15} style={styles.user_status}/>
                                ) : (
                                    null
                                )}
                            </Text>
                            <View style={{flexDirection: 'row',}}>
                                <IconMaterialCommunityIcons name="email-variant" size={20} style={styles.user_emailIcon}/>
                                <Text style={styles.user_emailID} > 
                                        {authr.email}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <Footer/>
        </View>

    )
}
export default Users