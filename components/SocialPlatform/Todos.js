import React, {useState, useEffect} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import Footer from '../Footer'
import styles from '../../styles/Todos.component.styles'

const Todos=({navigation})=>{
    const [todos, setTodos]=useState([])
    useEffect(()=>{
        allTodos()
    },[])
    const allTodos = async ()=>{
        try{
            let getTodos = await fetch('https://gorest.co.in/public/v1/todos')
            let getTodosJSON = await getTodos.json()

            setTodos(getTodosJSON.data)
        }catch(e){
            console.log("error: ",e)
        }
    }
    return(
        <View style={styles.todos_root}>
            <ScrollView>
            {
                todos.map((todo, i)=>(
                    <View key={i}
                    style={styles.todo_block}>
                        <Text style={styles.todo_title}>{todo.title}</Text>
                        
                        {todo.status == "pending" ?(
                            <View style={styles.todo_statusView}>
                                <Text style={styles.todo_statusText}>Status: &nbsp;</Text>
                                <Text style={styles.todo_statusPend}>{todo.status}</Text>
                            </View>
                        ):(
                            <View style={styles.todo_statusView}>
                                <Text style={styles.todo_statusText}>Status: &nbsp;</Text>
                                <Text style={styles.todo_status_COmp}>{todo.status}</Text>
                            </View>
                        )}

                        <Text style={styles.todo_duedate}>Due Date: &nbsp; {todo.due_on.split("T")[0]}  {todo.due_on.split("+")[1]}</Text>

                    </View>
                ))
            }
            </ScrollView>
            <Footer/>
        </View>
    )
}

export default Todos