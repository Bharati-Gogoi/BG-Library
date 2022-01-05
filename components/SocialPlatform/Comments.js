import React, { useEffect, useState } from "react"
import {View, Text, TouchableOpacity, ScrollView}
from 'react-native'
import styles from '../../styles/Comments.component.style'

const Comments=({route, navigation})=>{
    const post_id=route.params.post_id
    const [comment, setComment]=useState([])

    useEffect(()=>{
        allComments()
    },[])

    async function allComments(){
        try{	
			let response_coms = await fetch(
				`https://gorest.co.in/public/v1/posts/${post_id}/comments`
			)
			let response_comsJson = await response_coms.json()
            setComment(response_comsJson.data)
		}catch(e){
			console.log(e)
		}
    }

    return(
        <View style={styles.c_root}>
            <ScrollView>
                <Text style={styles.comment_heading}>Comments</Text>
                {
                    comment.map((post, key) => (
                        <View key={key}
                         style={styles.comnt_view}>
                            <Text style={styles.cmt_AuthrName} >
                                {post.name}
                            </Text>
                            <Text style={styles.cmt_AuthrEmail}>
                                {post.email}
                            </Text>
                            <Text style={styles.comment_body}>
                                {post.body}
                            </Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default Comments