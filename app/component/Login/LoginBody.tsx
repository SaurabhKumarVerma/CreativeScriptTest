import { StyleSheet, View } from "react-native";
import React, { PropsWithChildren } from "react";
import CreativeScriptTextInput from "../../common/CreativeScriptTextInput";
import { images } from "../../../assets/images";
import { inject, observer } from "mobx-react";
import { PropsWithStore } from "../../store/RootStore";

const LoginBody = (props: PropsWithStore<PropsWithChildren<object>>) => {
  const { LoginStore } = props.rootStore;

  const onChangeText = (name: string) => {
    LoginStore.setIsEmailError(false);
    LoginStore.setUserName(name);
  };

  const onEnterPassword = (password: string) => {
    LoginStore.setIsValidPasswordError(false);
    LoginStore.setUserPassword(password);
  };


  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 24 }}>
        <CreativeScriptTextInput
          placeholder="Enter Email"
          image={images.iconUser}
          onChangeText={onChangeText}
          value={LoginStore.userName}
        />
      </View>
      <View style={{}}>
        <CreativeScriptTextInput
          placeholder="Password"
          image={images.lock}
          onChangeText={onEnterPassword}
          secureTextEntry
        />
      </View>
    </View>
  );
};
export default inject("rootStore")(observer(LoginBody));

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
});
