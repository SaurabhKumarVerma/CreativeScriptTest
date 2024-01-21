import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Signup from "../../component/Signup/Signup";
import { StatusBar } from "expo-status-bar";

const SignupScreen = () => {
  return (
    <SafeAreaView
      style={{ alignItems: "center", justifyContent: "center", marginTop: 50 }}
    >
      <StatusBar hidden />
      <Signup />
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
