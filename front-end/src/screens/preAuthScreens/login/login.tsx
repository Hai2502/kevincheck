import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../context/authContext/AuthContext";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Accounts from "../../../models/auth/data.json";
import logo from "../../../assets/logo.jpg";
import { find } from "lodash-es";
import { styles } from "./login.style";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { onAuthentication } = useContext(AuthContext);

  const onUserAuthentication = () => {
    const authInfo = find(
      Accounts,
      (account) => account.email === email && account.password === password
    );
    if (authInfo == null) {
      alert("The email or password is incorrect");
      return;
    }
    onAuthentication();
    console.log(authInfo);
    console.log(Accounts);
  };

  const onEmailChange = (value: any) => {
    setEmail(value);
  };

  const onPaswordChange = (value: any) => {
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={logo}
          style={{ width: 190, height: 73, marginTop: 51 }}
        />
      </View>

      <View style={styles.inputArea}>
        <Text>Email</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="Enter your email here.."
          value={email}
          testID="emailInput"
          onChangeText={onEmailChange}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.inputPassword}
          secureTextEntry={true}
          placeholder="Enter your password here.."
          value={password}
          testID="passwordInput"
          onChangeText={onPaswordChange}
        />
        <Text style={styles.Des}>
          Must contains 8 Characters, One Uppercase, One Lowercase and One
          Number
        </Text>
        <TouchableOpacity
          style={[
            styles.buttonLogin,
            Boolean(email && password)
              ? styles.buttonLoginEnable
              : styles.buttonLoginDisabled,
          ]}
          testID="btn-signin"
          onPress={onUserAuthentication}
        >
          <Text style={{ color: "#fff" }}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.underline}>Forgor Password?</Text>
      </View>

      <View style={styles.footArea}>
        <Text>
          Don't have an account? <Text style={styles.underline}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
