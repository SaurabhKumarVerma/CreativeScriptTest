import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../themes/colors";

const TabButton = ({ item, ...props }) => {
  return (
    <View>
      <View style={props.focused ? styles.activeStyle : styles.inactiveStyle}>
        <Image
          source={item.icon}
          style={{ width: 24, height: 24, padding: 14 }}
        />
      </View>
    </View>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  activeStyle: {
    borderRadius: 28,
    backgroundColor: colors.vividBlue,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveStyle: {
    borderRadius: 28,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
});
