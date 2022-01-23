import React from "react";
import {createStackNavigation} from "@react-navigation/stack";
import TabNavigator from "../navigation/tabNavigator";
import PostScreen from "../screens/PostScreen"

const Stack=createStackNavigation();

const StackNavigator=()=>{
    return(
        <Stack.Navigator
            initialRouteName="home"
            screenOptions{{
                headerShown:false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigator}/>
            <Stack.Screen name="PostScreen" component={PostScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigator;