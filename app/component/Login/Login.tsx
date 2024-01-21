import { ScrollView, StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import CreativeScriptButton from "../../common/CreativeScriptButton";
import OnboardingHeader from "../../common/OnboardingHeader";
import LoginBody from "./LoginBody";
import ErrorText from "../../common/ErrorText";
import LoginRemember from "./LoginRemember";
import SocialLogin from "./SocialLogin";
import CreativeScriptCard from "../../common/CreativeScriptCard";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../store/RootStore";
import Loader from "../../common/Loader";

const Login = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { LoginStore } = props.rootStore;

  const showErrorMessage = () => {
    if (
      LoginStore.isEmailError ||
      LoginStore.isValidPasswordError ||
      LoginStore.isError
    ) {
      return (
        <View style={{ marginTop: 16 }}>
          <ErrorText text={LoginStore?.isUserInputError} />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 50, marginHorizontal: 16, flex: 1 }}
    >
      <View style={{}}>
        <OnboardingHeader
          title="Sign in"
          subtitle="You don’t have account let’s create account"
        />
      </View>

      <View style={{}}>
        <LoginBody />
      </View>
      {showErrorMessage()}
      <View style={{ marginTop: 16 }}>
        <LoginRemember />
      </View>

      <View style={{ marginTop: 60 }}>
        <SocialLogin />
      </View>

      <View style={{ marginTop: 38, marginBottom: "20%" }}>
        <CreativeScriptButton
          title="Proceed"
          onPress={() => LoginStore.checkValidData()}
        />
      </View>
      <Loader loading={LoginStore.isLoading} />
    </ScrollView>
  );
};

export default inject("rootStore")(observer(Login));

const styles = StyleSheet.create({
  image: {
    width: 74,
    height: 74,
  },
});
