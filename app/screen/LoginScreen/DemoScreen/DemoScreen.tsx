import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "../../../common/CreativeScriptText";

const DemoScreen = () => {
  return (
    <View style={styles.container}>
      <Text preset="bold">DemoScreen</Text>
    </View>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
