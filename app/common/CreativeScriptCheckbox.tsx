import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from "react-native-bouncy-checkbox";

interface ICreativeScriptCheckbox extends IBouncyCheckboxProps {
  styleCheckBox?: ViewProps;
}
const CreativeScriptCheckbox = (props: ICreativeScriptCheckbox) => {
  const { styleCheckBox, ...IBouncyCheckboxProps } = props;
  return (
    <View style={props.styleCheckBox ?? { backgroundColor: "yello" }}>
      <BouncyCheckbox {...IBouncyCheckboxProps} />
    </View>
  );
};

export default CreativeScriptCheckbox;

const styles = StyleSheet.create({});
