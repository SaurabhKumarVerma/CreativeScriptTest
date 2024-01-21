import {
  createNavigationContainerRef,
  StackActions,
  TabActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

// navigationRef.current.getRootState();
export const navigate = (screenName: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName as any, params as any);
  }
};

export const jumpToTab = (screen: string, params?: any) => {
  const jumpToAction = TabActions.jumpTo(screen, params);
  navigationRef.dispatch(jumpToAction);
};

export const replaceScreen = (screen: string, params?: any) => {
  navigationRef.dispatch(StackActions.replace(screen, params));
};
