import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
//screens
import { COLORS } from "../../styles";
import PaidCourses from "../screens/PaidCourses";
import Home from "../screens/Home";
import LiveScreen from "../screens/LiveScreen";
import Profile from "../screens/Profile";
import Messages from "../screens/Messages";

const Tab = createBottomTabNavigator();

const navigationBottom = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 1,
          backgroundColor:COLORS.bgColor,
          borderWidth:0.5,
          borderColor:COLORS.gray

        },
        showLabel: false,
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.lightGray,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="liveScreen"
        component={LiveScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="video-camera" color={color} size={26} />
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
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="messages"
        component={Messages}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="commenting" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default navigationBottom;
