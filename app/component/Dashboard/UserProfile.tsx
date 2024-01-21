import { Image, StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { images } from "../../../assets/images";
import colors from "../../themes/colors";
import Text from "../../common/CreativeScriptText";
import TextLabel from "../../common/TextLabel";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../store/RootStore";

const UserProfile = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { LoginStore } = props.rootStore;
  return (
    <View style={{}}>
      <View style={styles.profileImageWrraper}>
        <Image source={images.userImg} style={{ width: 105, height: 105 }} />
        <View style={styles.profileAction}>
          <Image
            source={images.cameraIcon}
            style={{
              width: 38,
              height: 38,
              position: "absolute",
              bottom: -4,
              left: 20,
            }}
          />
        </View>
      </View>

      <View style={{ marginTop: 24, alignItems: "center" }}>
        <Text
          text={LoginStore.userData.Name ?? ""}
          preset="medium"
          style={{ color: colors.text }}
        />
        <TextLabel
          text={LoginStore.userData.Email ?? ""}
          textColor={colors.grey70}
        />
      </View>
    </View>
  );
};

export default inject("rootStore")(observer(UserProfile));

const styles = StyleSheet.create({
  profileImageWrraper: {
    borderWidth: 10,
    borderRadius: 105,
    borderColor: colors.aliceBlue,
    alignItems: "center",
    width: 120,
    // height: 120,
    aspectRatio: 1,
    justifyContent: "center",
    position: "relative",
    alignSelf: "center",
    // flexDirection: "row",
  },
  profileAction: {
    // position: "absolute",
    right: -4,
    bottom: -10,
  },
});
