import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text as RNText, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { customFontLoad } from "./app/themes/typography";
import CreativeScriptIcon from "./app/common/Icon/CreativeScriptIcon";
import Text from "./app/common/CreativeScriptText";

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icons/icomoon.ttf"),
    ...customFontLoad,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text text="HELLO WORLD" preset="bold" />
      <CreativeScriptIcon name="Facebook" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
