import React from "react";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import SplashScreen from "./src/views/screens/SplashScreen";
import Home from "./src/views/screens/Home";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import Login from "./src/views/screens/Login";
import SignUp from "./src/views/screens/SignUp";
import { StatusBar } from "react-native";
import CategoryDetails from "./src/views/screens/CategoryDetails";
import OnBoardScreen2 from "./src/views/screens/OnBoardScreen2";
import navigationBottom from "./src/views/navigation/navigationBottom";
import SubCategoryDetails from "./src/views/screens/SubCategoryDetails";
import { COLORS } from "./src/styles";
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <StatusBar  translucent backgroundColor={COLORS.bgColor} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="splashScreen" component={SplashScreen} />
        <Stack.Screen name="onBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="onBoardScreen2" component={OnBoardScreen2} />

        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="home" component={navigationBottom} />
        <Stack.Screen name="categoryDetails" component={CategoryDetails} />
        <Stack.Screen name="subCategoryDetails" component={SubCategoryDetails} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
