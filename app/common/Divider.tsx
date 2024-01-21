import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import colors from "../themes/colors";

const Divider = () => {
  const { width } = useWindowDimensions();
  return <View style={[styles.container]} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 1,
    borderColor: colors.grey93,
    width: "100%",
  },
});
