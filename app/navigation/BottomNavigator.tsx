import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { ScreenName } from "../types/ScreenName";
import { images } from "../../assets/images";
import DemoScreen from "../screen/LoginScreen/DemoScreen/DemoScreen";
import Dashboard from "../component/Dashboard/Dashboard";
import colors from "../themes/colors";
import TabButton from "./TabButton";

const Tab = createBottomTabNavigator();
function BottomNavigator() {
  const tabs = [
    {
      id: 1,
      title: ScreenName.TEST_ONE,
      screen: ScreenName.TEST_ONE,
      icon: images.graph,
      Component: DemoScreen,
    },
    {
      id: 2,
      title: ScreenName.TEST_TWO,
      screen: ScreenName.TEST_TWO,
      icon: images.external,
      Component: DemoScreen,
    },
    {
      id: 3,
      title: ScreenName.DASHBOARD,
      screen: ScreenName.DASHBOARD,
      icon: images.profileData,
      Component: Dashboard,
    },
    {
      id: 4,
      title: ScreenName.TEST_THIRD,
      screen: ScreenName.TEST_THIRD,
      icon: images.message,
      Component: DemoScreen,
    },
    {
      id: 5,
      title: ScreenName.TEST_FORTH,
      screen: ScreenName.TEST_FORTH,
      icon: images.circleUser,
      Component: DemoScreen,
    },
  ];

  return (
    <>
      <Tab.Navigator
        initialRouteName={ScreenName.DASHBOARD}
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        {tabs.map((item, index) => (
          <Tab.Screen
            key={item.id}
            name={item.screen}
            component={item.Component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: (props) => <TabButton item={item} {...props} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    alignItems: "center",
    borderColor: colors.whiteSmoke,
    borderRadius: 16,
    borderWidth: 0.5,
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 16,
    position: "absolute",
  },
});

export default BottomNavigator;
