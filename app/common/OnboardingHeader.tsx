import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { images } from "../../assets/images";
import Text from "./CreativeScriptText";
import colors from "../themes/colors";

interface IOnboardingHeader {
  title: string;
  subtitle: string;
}
const OnboardingHeader = (props: IOnboardingHeader) => {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image} />
      <View style={styles.headingTextContainer}>
        <Text
          text={props.title}
          preset="heading"
          style={{ color: colors.vividBlue }}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <Text
          text={props.subtitle}
          preset="formLabel"
          style={{ color: colors.grey70 }}
        />
      </View>
    </View>
  );
};

export default OnboardingHeader;

const styles = StyleSheet.create({
  image: {
    width: 74,
    height: 74,
  },
  headingTextContainer: {
    marginTop: 18,
  },
  container: {
    alignItems: "center",
  },
});
