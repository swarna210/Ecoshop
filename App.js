import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Logo from './src/Intro/LogoPage'
import Intro1 from './src/Intro/Intro1'
import Intro2 from './src/Intro/Intro2'
import Intro3 from './src/Intro/Intro3'
import Home from './src/Home/Home'
import PopularSell from './src/Home/PopularSell'
import Order from './src/Home/Order'
import Profile from './src/Home/Profile'
import Categories from './src/Home/Categories'
import Arrivals from './src/Home/Arrivals'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
function Mystack(){
  return(
    <Stack.Navigator>
      {/* <Stack.Screen name='PopularSell' component={PopularSell} options={{headerShown:false}}/> */}
      <Stack.Screen name='Logo' component={Logo} options={{headerShown:false}}/>
      <Stack.Screen name='Intro1' component={Intro1} options={{headerShown:false}}/>
      <Stack.Screen name='Intro2' component={Intro2} options={{headerShown:false}}/>
      <Stack.Screen name='Intro3' component={Intro3} options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Bottom' component={MyBottomTab} options={{headerShown:false}}/>
      <Stack.Screen name='Categories' component={Categories} options={{headerShown:false}}/>
      {/* PopularSell */}
      <Stack.Screen name='PopularSell' component={PopularSell} options={{headerShown:false}}/>
      <Stack.Screen name='Arrivals' component={Arrivals} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
function MyBottomTab(){
  return(
    <BottomTab.Navigator screenOptions={{tabBarStyle:{
      height:70,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingBottom:10,
      backgroundColor:'white'
    }}}>
      <BottomTab.Screen name="Home" component={Home} options={{headerShown:false,
          tabBarIcon:({focused})=>
          focused ? <FontAwesome name='home' color='green' size={30}/> : <FontAwesome name='home' size={30}/>,
          tabBarLabel:({focused})=>
          focused ? <Text style={{color:'black'}}>Home</Text>:<Text style={{color:'#a6a6a6'}}>Home</Text>,
          
          }}
          />
      <BottomTab.Screen name="Order" component={Order} options={{headerShown:false,
      tabBarIcon:({focused})=>
      focused ? <FontAwesome name='shopping-bag' color='green' size={30}/> : <FontAwesome name='shopping-bag' size={30}/>,
      tabBarLabel:({focused})=>
      focused ? <Text style={{color:'black'}}>Order</Text>:<Text style={{color:'#a6a6a6'}}>Order</Text>
      }}/>
      <BottomTab.Screen name="Profile" component={Profile} options={{headerShown:false,
        tabBarIcon:({focused})=>
        focused ? <FontAwesome name='user-circle-o' color='green' size={30}/> : <FontAwesome name='user-circle-o' size={30}/>,
        tabBarLabel:({focused})=>
        focused ? <Text style={{color:'black'}}>Profile</Text>:<Text style={{color:'#a6a6a6'}}>Profile</Text>
    }}
      />
    </BottomTab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
 
});


