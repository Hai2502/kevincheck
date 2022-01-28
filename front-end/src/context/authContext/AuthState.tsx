import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthState = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAuthenticationStatus();
  }, []);

  const checkAuthenticationStatus = async () => {
    try {
      const returnedToken = await AsyncStorage.getItem("user-token");
      console.log("TOKEN", returnedToken);
      setUserToken(returnedToken);
    } catch (err) {
      console.warn(
        `Here's the error that occured while retrieving token: ${err}`
      );
    }
    setIsLoading(false);
  };

  const onAuthentication = async () => {
    const USER_TOKEN = "token123";
    await AsyncStorage.setItem("user-token", USER_TOKEN);
    setUserToken(USER_TOKEN);
    console.warn("user has been authenticated!");
  };

  const userSignout = async () => {
    console.log(
      "============================= SIGNOUT ========================="
    );
    console.log(
      "============================= SIGNOUT ========================="
    );
    console.log(
      "============================= SIGNOUT ========================="
    );

    // mock object support : AsyncStorage - where address
    // mock method: removeItem - what apartment
    await AsyncStorage.removeItem("user-token");
    setUserToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        onAuthentication,
        userToken,
        isLoading,
        userSignout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
