import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigatore from "./StackNavigatore";
import { navigationRef } from "./RootNavigation";

const AppNavigatore = () => {
  // const onReady = () => {
  //   routeNameRef.current = navigateRef?.current?.getCurrentRoute()?.name;
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigatore />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigatore;

const styles = StyleSheet.create({});
