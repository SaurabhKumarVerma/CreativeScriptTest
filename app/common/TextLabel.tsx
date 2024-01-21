import { View } from "react-native";
import React from "react";
import Text from "./CreativeScriptText";
import colors from "../themes/colors";

interface ITextLabel {
  text: string;
  textColor?: string;
  preset?: string
}
const TextLabel = (props: ITextLabel) => {
  const defaultColor = props.textColor ?? colors.text;
  const fontPreset = props.preset ?? "formLabel"
  return (
    <View>
      <Text
        text={props.text}
        preset={fontPreset}
        style={{ color: defaultColor }}
      />
    </View>
  );
};

export default TextLabel;
