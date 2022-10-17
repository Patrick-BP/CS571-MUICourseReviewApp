import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "react-native-vector-icons";



import About from "./components/About";
import StackNavigator from "./StackNavigator";

export default function App() {
  const Tab = createBottomTabNavigator();
  
  return (
  
    <NavigationContainer>


    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          tabBarActiveTintColor: "#411d63",
          tabBarInactiveTintColor: "white",
          gestureDirection: "horizontal",
          tabBarStyle: {
            backgroundColor: "#215dc8",
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={StackNavigator}
          options={{
            title: "Courses",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="about"
          component={About}
          options={{
            title: "About us",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={26}
              />
            ),
          }}
        />
        
      </Tab.Navigator>
       
    </NavigationContainer>

 

  );
}
