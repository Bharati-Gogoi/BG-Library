import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Footer from '../Footer'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from '../../styles/Posts.component.styles'

const Posts=({navigation})=>{
    const [values, setValues]=useState([])

    useEffect(()=>{
        allPosts()
    },[])
    
    async function allPosts(){
        try{	
			let response = await fetch(
				'https://gorest.co.in/public/v1/posts'
			)
			let responseJson = await response.json()
            setValues(responseJson.data)
		}catch(e){
			console.log(e)
		}
    }

    const comments=(post)=>{
        navigation.navigate('Comments', 
            { post_id: post.id })
    }
    return(
        <View style={styles.post_root}>
            <ScrollView>
                <Text style={styles.post_heading}>Your Feed</Text>
                {
                    values.map((item, key) => (
                        <View 
                        key={key}
                        style={styles.post_view}>
                            <Text style={styles.post_title}>{item.title}</Text>
                            <Text style={styles.post_id} >Post ID: {item.id} {'\n'}</Text>
                            <Text style={styles.post_body}>{item.body} {'\n'}</Text>
                            <TouchableOpacity onPress={()=>comments(item)} style={styles.comment_link}>
                                <IconMaterialIcons name="comment" size={20} style={styles.comment_icon}/>
                            </TouchableOpacity>
                        </View>
                    ))
                }   
            </ScrollView>
            <Footer/>
        </View>
    )
}
export default Posts