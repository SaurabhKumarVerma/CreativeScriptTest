import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./CreativeScriptText";
import colors from "../themes/colors";

interface IErrorText {
  text: string;
}
const ErrorText = (props: IErrorText) => {
  return (
    <View>
      <Text text={props.text} preset="formLabel" style={styles.textStyle} />
    </View>
  );
};

export default ErrorText;

const styles = StyleSheet.create({
  textStyle: {
    color: colors.error,
  },
});
