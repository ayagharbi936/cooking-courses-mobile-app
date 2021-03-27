import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import LiveScreen from "../screens/LiveScreen";

import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../../styles";
import { View } from "react-native";
import PaidCourses from "../screens/PaidCourses";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const navigationBottom = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 1,
          backgroundColor:COLORS.white
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
        activeBackgroundColor: COLORS.white,
        inactiveTintColor: COLORS.lightGray,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="liveScreen"
        component={LiveScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="video-camera" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="paidCourses"
        component={PaidCourses}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="shopping-basket"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="messages"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="commenting" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default navigationBottom;
