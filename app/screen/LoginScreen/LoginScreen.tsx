import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Login from "../../component/Login/Login";
import { StatusBar } from "expo-status-bar";
import Loader from "../../common/Loader";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
      <StatusBar hidden />
      <View style={{}}>
        <Login />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
