import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import CreativeScriptButton from "../../common/CreativeScriptButton";
import OnboardingHeader from "../../common/OnboardingHeader";
import CreativeScriptCard from "../../common/CreativeScriptCard";
import UserProfile from "./UserProfile";
import { images } from "../../../assets/images";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../store/RootStore";

const Dashboard = (props: PropsWithStore<PropsWithChildren<object>>) => {
  return (
    <View style={{ marginTop: 50, marginHorizontal: 16 }}>
      <View>
        <UserProfile />
      </View>

      <View style={{ marginTop: 54 }}>
        <View style={{ marginBottom: 20 }}>
          <CreativeScriptCard
            leftImageSource={images.profile}
            text="Account information"
            rightImageSource={images.rightArrow}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <CreativeScriptCard
            leftImageSource={images.protection}
            text="Google Business Profile"
            rightImageSource={images.rightArrow}
          />
        </View>
        <View>
          <CreativeScriptCard
            leftImageSource={images.team}
            text="Team members"
            rightImageSource={images.rightArrow}
          />
        </View>
      </View>
    </View>
  );
};

export default inject("rootStore")(observer(Dashboard));

const styles = StyleSheet.create({
  image: {
    width: 74,
    height: 74,
  },
  profileAction: {
    // position: "absolute",
    right: -4,
    bottom: -10,
  },
});
