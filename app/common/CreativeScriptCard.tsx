import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Text from "./CreativeScriptText";
import colors from "../themes/colors";

interface ICreativeScriptCard {
  leftImageSource: ImageSourcePropType;
  rightImageSource: ImageSourcePropType;
  text: string;
}
const CreativeScriptCard = (props: ICreativeScriptCard) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.grey90,
        borderRadius: 12,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={props.leftImageSource}
          style={{
            width: 28,
            height: 28,
            marginHorizontal: 18,
            marginVertical: 16,
          }}
        />
        <Text
          text={props.text}
          preset="formLabel"
          style={{ color: colors.darkCharcoal }}
        />
      </View>
      <View style={{ marginRight: 16 }}>
        <Image
          source={props.rightImageSource}
          style={{ width: 28, height: 28 }}
        />
      </View>
    </Pressable>
  );
};

export default CreativeScriptCard;

const styles = StyleSheet.create({});
