import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Footer from '../Footer'
import CurrentTodo from './CurrentTodo'
import styles from '../../styles/Users.component.style'

const OneUser=({route, navigation})=>{
    const userId = route.params.uid
    const [currentUser, setCurrentUser]=useState([])
    const [todo_details, setTodo_details]=useState("false")
    useEffect(()=>{
        getCurrentUser()
    },[])
    const getCurrentUser = async()=>{
        try{
            let getCuser = await fetch('https://gorest.co.in/public/v1/users/'+userId)
            let getCuserJson = await getCuser.json()
            setCurrentUser([getCuserJson.data])
        }catch(e){
            console.log("error ::",e)
        }
    }
    const showTodo = (userid) => {
        return (
            <CurrentTodo userId={userid}/>
        );
    }
    return(
        <View style={styles.u_root}>
            <ScrollView>
                {currentUser.map((u, i) => (
                    <View key={i} style={styles.u_view}>
                        <Text style={styles.u_name}>
                            {u.name}
                        </Text>

                        <View style={styles.u_block}>
                            <View style={styles.u_viewEmail}>
                                <IconMaterialCommunityIcons name="email-variant" size={20} style={styles.u_emailIcon}/> 
                                <Text style={styles.u_emailID}>&nbsp; {u.email}</Text>
                            </View>

                            <View style={styles.u_viewStatus}>
                                <Text style={styles.status}>Status: </Text>
                                {
                                    u.status=="active"?(
                                        <Text style={styles.status_active}>{u.status}</Text>
                                    ):(
                                        <Text style={styles.status_notactive}>{u.status}</Text>
                                    )
                                }
                            </View>

                            <View style={styles.u_genderView}>
                                <Text style={styles.u_genderText}>Gender: </Text>
                                <Text style={styles.u_genderVal}>
                                    &nbsp;{u.gender}
                                </Text>
                            </View>

                            <TouchableOpacity onPress={()=>setTodo_details("true")}>
                                <Text 
                                style={styles.u_todos}>View Todos</Text>
                            </TouchableOpacity>
                            {
                                todo_details=="true"? showTodo(u.id) : null
                            }
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Footer/>
        </View>
    )
}
export default OneUser