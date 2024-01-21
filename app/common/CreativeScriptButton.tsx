import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  useWindowDimensions,
} from "react-native";
import React from "react";
import colors from "../themes/colors";
import Text from "./CreativeScriptText";

interface ICreativeScriptButton extends TouchableOpacityProps {
  title: string;
  onClick?: () => void;
}

const CreativeScriptButton = (props: ICreativeScriptButton) => {
  const { onClick, title, ...TouchableOpacityProps } = props;
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onClick}
      {...TouchableOpacityProps}
      style={{
        width: width - 30,
        backgroundColor: colors.vividBlue,
        borderRadius: 60,
      }}
    >
      <Text
        text={title}
        preset="formLabel"
        style={{ color: "white", textAlign: "center", paddingVertical: 18 }}
      />
    </TouchableOpacity>
  );
};

export default CreativeScriptButton;

const styles = StyleSheet.create({});
