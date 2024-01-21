import { useEffect, useState } from "react";
import AppNavigatore from "./navigation/AppNavigatore";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "mobx-react";
import { customFontLoad } from "./themes/typography";
import { useFonts } from "expo-font";
import RootStore from "./store/RootStore";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`SplashScreen`))
  .catch(console.warn);

const MainNavigatore = () => {
  const [rootStore] = useState(RootStore);
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./../assets/icons/icomoon.ttf"),
    ...customFontLoad,
  });

  if (!fontsLoaded) {
    return null;
  }
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <>
      <Provider rootStore={rootStore} {...rootStore}>
        <AppNavigatore />
      </Provider>
    </>
  );
};

export default MainNavigatore;
