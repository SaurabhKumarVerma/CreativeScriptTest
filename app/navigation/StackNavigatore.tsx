import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import SignupScreen from "../screen/SignupScreen/SignupScreen";
import { ScreenName } from "../types/ScreenName";
import BottomNavigator from "./BottomNavigator";

const StackNavigatore = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name={ScreenName.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ScreenName.SIGNUP} component={SignupScreen} />
      <Stack.Screen name={ScreenName.MAIN_SCREEN} component={BottomNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigatore;

const styles = StyleSheet.create({});
