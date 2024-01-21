import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CreativeScriptIcon from "../../common/Icon/CreativeScriptIcon";
import colors from "../../themes/colors";
import { images } from "../../../assets/images";
import Text from "../../common/CreativeScriptText";
import TextLabel from "../../common/TextLabel";
import { ScreenName } from "../../types/ScreenName";
import { navigate } from "../../navigation/RootNavigation";

const SocialLogin = () => {
  const navigateToLoginScreen = () => {
    navigate(ScreenName.SIGNUP);
  };
  return (
    <View style={{}}>
      <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <View style={[styles.iconBackground]}>
          <CreativeScriptIcon
            name="Facebook"
            size={24}
            color={colors.vividBlue}
          />
        </View>
        <View style={[styles.iconBackground, { marginHorizontal: 24 }]}>
          <CreativeScriptIcon
            name="Apple"
            size={24}
            color={colors.darkCharcoal}
          />
        </View>
        <View style={styles.iconBackground}>
          <Image source={images.google} style={{ width: 50, height: 50 }} />
        </View>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.dividerBackground} />
        <View>
          <Text
            text="Or"
            preset="formLabel"
            style={{ color: colors.vividBlue, paddingHorizontal: 8 }}
          />
        </View>
        <View style={styles.dividerBackground} />
      </View>

      <TouchableOpacity
        onPress={navigateToLoginScreen}
        style={{ flexDirection: "row", marginTop: 46 }}
      >
        <TextLabel text="Don’t have an account ?" textColor={colors.velvet} />
        <View style={{ marginLeft: 4 }}>
          <TextLabel text="Sign Up ?" textColor={colors.vividBlue} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  iconBackground: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  dividerBackground: {
    flex: 1,
    height: 1,
    backgroundColor: colors.grey93,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },
});
