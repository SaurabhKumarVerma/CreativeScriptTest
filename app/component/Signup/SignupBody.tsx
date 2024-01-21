import { StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import CreativeScriptTextInput from "../../common/CreativeScriptTextInput";
import { images } from "../../../assets/images";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../store/RootStore";

const SignupBody = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { SignupStore, LoginStore } = props.rootStore;

  const enterUsername = (username: string) => {
    SignupStore.setIsErrorMessage();
    SignupStore.setIsError(false);
    SignupStore.setUserName(username);
  };

  const enterUserEmail = (email: string) => {
    SignupStore.setIsErrorMessage();
    LoginStore.setIsEmailError(false);
    SignupStore.userEmailSignup(email);
  };

  const enterUserPassword = (password: string) => {
    SignupStore.setIsErrorMessage();
    LoginStore.setIsValidPasswordError(false);
    SignupStore.userPasswordSignup(password);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 24 }}>
        <CreativeScriptTextInput
          placeholder="Username"
          image={images.iconUser}
          onChangeText={enterUsername}
          maxLength={8}
        />
      </View>
      <View style={{ marginBottom: 24 }}>
        <CreativeScriptTextInput
          placeholder="Email"
          image={images.email}
          onChangeText={enterUserEmail}
        />
      </View>
      <View style={{}}>
        <CreativeScriptTextInput
          placeholder="Password"
          secureTextEntry
          image={images.lock}
          onChangeText={enterUserPassword}
        />
      </View>
    </View>
  );
};

export default inject("rootStore")(observer(SignupBody));

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
});
