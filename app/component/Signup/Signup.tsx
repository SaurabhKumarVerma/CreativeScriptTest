import { StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import OnboardingHeader from "../../common/OnboardingHeader";
import SignupBody from "./SignupBody";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TextLabel from "../../common/TextLabel";
import ErrorText from "../../common/ErrorText";
import CreativeScriptCheckbox from "../../common/CreativeScriptCheckbox";
import colors from "../../themes/colors";
import CreativeScriptButton from "../../common/CreativeScriptButton";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../store/RootStore";
import Loader from "../../common/Loader";

const Signup = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { SignupStore, LoginStore } = props.rootStore;

  const showErrorMessage = () => {
    if (
      SignupStore.isValidUserName ||
      LoginStore.isEmailError ||
      LoginStore.isValidPasswordError ||
      SignupStore.isError
    ) {
      return (
        <View style={{ marginTop: 16 }}>
          <ErrorText
            text={SignupStore?.errorMessage || LoginStore?.isUserInputError}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginHorizontal: 15 }}
    >
      <View style={{ alignSelf: "center" }}>
        <OnboardingHeader
          subtitle="You don’t have account let’s create account"
          title="Create an account"
        />
      </View>
      <View>
        <SignupBody />
      </View>
      {showErrorMessage()}

      <View style={{ marginTop: 32 }}>
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
            <TextLabel text="I agree with terms & conditions" />
          </View>
        </View>
        <View style={[styles.rememberContainer, { marginTop: 14 }]}>
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
            <TextLabel text="Allow Notifications" />
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 100,
          marginBottom: "20%",
        }}
      >
        <CreativeScriptButton
          title="Proceed"
          onPress={() => SignupStore.checkInputField()}
        />
      </View>
      <Loader loading={SignupStore.isLoading} />
    </KeyboardAwareScrollView>
  );
};

export default inject("rootStore")(observer(Signup));

const styles = StyleSheet.create({
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
});
