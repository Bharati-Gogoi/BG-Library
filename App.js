import React, { useEffect, useState } from 'react'
import {
	FlatList,
	Text,
	View,
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splashh from './components/Splashh'
import Dashboard from './components/SocialPlatform/Dashboard'
import Comments from './components/SocialPlatform/Comments'
import NewPost from './components/SocialPlatform/NewPost'
import Posts from './components/SocialPlatform/Posts'
import Users from './components/SocialPlatform/Users'
import OneUser from './components/SocialPlatform/OneUser'
import Todos from './components/SocialPlatform/Todos'
import CurrentTodo from './components/SocialPlatform/CurrentTodo'

const Stack = createNativeStackNavigator()

const App= () => {
  	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash">
				<Stack.Screen name="Splashh" component={Splashh}
				options={{ headerShown: false, }}/>
		
				<Stack.Screen name="Dashboard" component={Dashboard} 
				options={{
				title:'Bg-Library',
					headerStyle: {
						backgroundColor: '#98cf59',
					},
				}}/>

				<Stack.Screen name="Comments" component={Comments} 
				options={{
					title:'Comments',
					headerStyle: {
						backgroundColor: '#aaf255',
					},
				}}/>

				<Stack.Screen name="Posts" component={Posts} 
				options={{
					title:'Feed',
					headerStyle: {
						backgroundColor: '#98cf59',
					},
				}}/>

				<Stack.Screen name="Users" component={Users} 
				options={{
					title:'Authors',
					headerStyle: {
						backgroundColor: '#98cf59',
					},
				}}/>

				<Stack.Screen name="OneUser" component={OneUser} 
				options={{
					title:'Author Details',
					headerStyle: {
						backgroundColor: '#98cf59',
					},
				}}/>

				<Stack.Screen name="Todos" component={Todos} 
				options={{
					title:'Todo Lists',
					headerStyle: {
						backgroundColor: '#98cf59',
					},
				}}/>

				<Stack.Screen name="CurrentTodo" component={CurrentTodo} 
				options={{
					title:'Todos',
					headerStyle: {
						backgroundColor: '#98cf59',
					},
				}}/>
			</Stack.Navigator>
		</NavigationContainer>
  	)
}

export default App
