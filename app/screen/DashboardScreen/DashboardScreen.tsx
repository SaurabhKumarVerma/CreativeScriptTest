import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Dashboard from "../../component/Dashboard/Dashboard";
import Text from "../../common/CreativeScriptText";
import CreativeScriptCard from "../../common/CreativeScriptCard";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 16 }}>
      <StatusBar hidden />
      <Dashboard />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
