import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";
import colors from "../themes/colors";
import { customFontLoad, font, typography } from "../themes/typography";

const windowWidth = Dimensions.get("screen").width;

interface ICreativeScriptTextInput extends TextInputProps {
  placeholder: string;
  image: ImageSourcePropType;
}
const CreativeScriptTextInput = (props: ICreativeScriptTextInput) => {
  const { image, placeholder, ...TextInputProps } = props;
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{ height: 24, width: 24, marginHorizontal: 16 }}
      />
      <TextInput
        {...TextInputProps}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={colors.text}
      />
    </View>
  );
};

export default CreativeScriptTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    width: windowWidth - 30,
    paddingHorizontal: 10,
    height: 58,
    backgroundColor: colors.whiteSmoke,
  },
  input: {
    height: 58,
    width: windowWidth - 40,
    fontFamily: font.lexendFont.medium,
    fontSize: 14,
    color: colors.text,
  },
});
