import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Discover from '../screens/Discover';
import AroundYou from "../screens/AroundYou";
import TopArtists from "../screens/TopArtists";
import TopCharts from "../screens/TopCharts";


const Tab = createBottomTabNavigator();
const NativeStack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Discover" screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}} >
      <Tab.Screen name="Discover" component={Discover} options={{
        tabBarStyle: {height: '8%'},
        tabBarLabelStyle: {display: 'none'} ,
        tabBarIcon: ({focused}) => {
            return (
                <Octicons name="home" size={25} color={focused ? "#33808D" : "default"} />
            )
        }
      }} />
      <Tab.Screen name="AroundYou" component={AroundYou} options={{
        tabBarStyle: {height: '8%'},
        tabBarLabelStyle: {display: 'none'} ,
        tabBarIcon: ({focused}) => {
            return (
                <MaterialCommunityIcons name="surround-sound" size={28} color={focused ? "#33808D" : "default"} />
            )
        }
      }} />
      <Tab.Screen name="TopArtists" component={TopArtists} options={{
        tabBarStyle: {height: '8%'},
        tabBarLabelStyle: {display: 'none'} ,
        tabBarIcon: ({focused}) => {
            return (
                <Ionicons name="ios-people" size={28} color={focused ? "#33808D" : "default"} />
            )
        }
      }} />
      <Tab.Screen name="TopCharts" component={TopCharts} options={{
        tabBarStyle: {height: '8%'},
        tabBarLabelStyle: {display: 'none'} ,
        tabBarIcon: ({focused}) => {
            return (
                <FontAwesome5 name="hashtag" size={28} color={focused ? "#33808D" : "default"} />
            )
        }
      }} />
    </Tab.Navigator>
  );
}

const Routes = () => {
    return (
        <NavigationContainer>
            <NativeStack.Navigator screenOptions={{headerShown: false}}>
                <NativeStack.Screen name="MyTabs" component={MyTabs} />
            </NativeStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;