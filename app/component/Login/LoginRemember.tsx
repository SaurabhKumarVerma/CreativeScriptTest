import { StyleSheet, View } from "react-native";
import React from "react";
import CreativeScriptCheckbox from "../../common/CreativeScriptCheckbox";
import colors from "../../themes/colors";
import TextLabel from "../../common/TextLabel";

const LoginRemember = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rememberContainer}>
        <CreativeScriptCheckbox
          fillColor={colors.vividBlue}
          unfillColor={colors.whiteSmoke}
          isChecked={true}
          innerIconStyle={{
            borderRadius: 5,
            width: 20,
            height: 20,
          }}
          size={30}
          style={{ width: 20, height: 20 }}
          iconStyle={{ width: 20, height: 20, borderRadius: 5 }}
        />
        <View style={{ marginLeft: 8 }}>
          <TextLabel text="Remember me" />
        </View>
      </View>
      <View>
        <TextLabel text="Forgot password?" textColor={colors.vividBlue} />
      </View>
    </View>
  );
};

export default LoginRemember;

const styles = StyleSheet.create({
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
