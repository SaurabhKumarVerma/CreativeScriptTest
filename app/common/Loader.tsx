import React, { Component } from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import CreativeScriptLottie from "./CreativeScriptLottie";
import colors from "../themes/colors";

interface ILoading {
  loading: boolean;
}
const Loader = (props: ILoading) => {
  const { loading, ...attributes } = props;

  return (
    <Modal
      transparent
      animationType={"fade"}
      visible={loading}
      onRequestClose={() => {
        console.log("close modal");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} color={colors.vividBlue} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    backgroundColor: '"#FFFFFF"',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Loader;
