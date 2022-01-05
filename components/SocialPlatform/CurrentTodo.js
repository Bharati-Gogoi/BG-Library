import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons' 
import styles from '../../styles/Users.component.style'

const CurrentTodo=(userid)=>{
    const [userTodo, setUserTodo]=useState([])
    const uid=userid.userId
    
    useEffect(()=>{
        geThisTodo()
    },[])

    const geThisTodo=async ()=>{
        try{
            let getTodo=await fetch('https://gorest.co.in/public/v1/users/'+uid+'/todos')
            let getJSON=await getTodo.json()
            setUserTodo(getJSON.data)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <View style={styles.t_root}>
            {
                userTodo.map((t, i)=>(
                    <View key={i} style={styles.t_block}>
                        <Text style={styles.t_DueText}>
                            Due Date:
                        </Text>
                        <Text style={styles.t_DueVal}>
                            {t.due_on.split("T")[0]}  |  {t.due_on.split("+")[1]}
                        </Text>
                        {
                            t.status=="completed"?(
                                <Text style={styles.t_status_complete}>
                                    <IconIonicons name="checkbox" size={20}/>
                                    &nbsp;{t.status}!
                                </Text>
                            ):(
                                <Text style={styles.t_status_pending}>
                                    <IconIonicons name="warning" size={20}/>
                                    &nbsp; 
                                    {t.status}!
                                </Text>
                            )
                        }
                        
                        <Text style={styles.todo_title}>
                            {t.title}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

export default CurrentTodo