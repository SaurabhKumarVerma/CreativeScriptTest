import React from "react";
import LottieView from "lottie-react-native";

interface ICreativeScriptLottie {
  source?: string;
}

export default function CreativeScriptLottie(props: ICreativeScriptLottie) {
  return (
    <LottieView
    
      source={"../../assets/lottie/Animation.json"}
      autoPlay
      loop={false}
      style={{ flex: 1, alignSelf: "center" }}
    />
  );
}
