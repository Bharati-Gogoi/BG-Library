import React from 'react'
import {
    ScrollView,
	Text,
	View,
} from 'react-native'

const Splashh=({navigation})=>{
    setTimeout(() => {
		navigation.replace('Dashboard'); 
	}, 3000);
    return(
        <View style={{
            flex:1, 
            backgroundColor:'#558b2f', 
            justifyContent: 'center', 
            alignItems:'center', 
            padding: 20,
            paddingTop: '100%',
        }}>
            <ScrollView>
                <Text style={{fontSize: 20, color: '#fff'}}>Bg-L̥ibrary</Text>
            </ScrollView>
            <Text style={{fontSize: 13, color: '#fff'}}>By B.G.</Text>
        </View>        
    )
}

export default Splashh