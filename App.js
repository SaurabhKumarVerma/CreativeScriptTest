import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { customFontLoad } from "./app/themes/typography";
import MainNavigatore from "./app/app";

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
    <View style={styles.container}>
      <StatusBar hidden />
      <MainNavigatore />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
