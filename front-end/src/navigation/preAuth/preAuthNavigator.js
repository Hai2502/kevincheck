import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../../screens/preAuthScreens";
import { Login } from "../../screens/preAuthScreens";

const PreAuthNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};

export default PreAuthNavigator;
