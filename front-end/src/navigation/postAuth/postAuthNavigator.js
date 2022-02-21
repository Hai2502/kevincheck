import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../screens/postAuthScreens/index.ts";

const PostAuthNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default PostAuthNavigator;
