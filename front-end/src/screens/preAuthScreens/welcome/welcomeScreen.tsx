import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./welcomeScreen.style";
import logo from "../../../assets/logo.jpg";
import gg from "../../../assets/gg.png";

const Pages = {
  Login: "login",
};

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate({
      key: Pages.Login,
      name: "Login" as never,
    });
  };
  return (
    <View style={styles.container} testID="body">
      <View style={styles.head}>
        <Image
          source={logo}
          style={{ width: 82, height: 33, marginBottom: 30 }}
        />
        <Text style={styles.welcome}>Welcome to ONMO</Text>
        <Text style={styles.describe}>
          Get access to the best game Moments, Battles and Daily Tournaments
        </Text>
      </View>
      <View style={styles.login}>
        <TouchableOpacity
          testID="moveToLogin"
          style={styles.buttonLogin}
          onPress={onPress}
        >
          <Image
            source={gg}
            style={{
              width: 24,
              height: 24,
              marginLeft: -120,
              marginRight: 100,
            }}
          />
          <Text>Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.foot}>
        <Text>
          By signing up or signing in to an account, you agree to ONMO{" "}
          <Text style={styles.underline}>Terms of Use</Text> and{" "}
          <Text style={styles.underline}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
