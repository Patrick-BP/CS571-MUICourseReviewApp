import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import CoursesList from "./components/CoursesList";
import CourseDetails from "./components/CourseDetails";
import AddReview from "./components/AddReview";
import About from "./components/About";

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
          name="Courses List"
          component={CoursesList}
          options={{
            title: "Courses",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Course Details"
          component={About}
          options={{
            title: "About us",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Add Review"
          component={AddReview}
          options={{
            title: "Add Review",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-group"
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
