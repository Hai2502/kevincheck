import React, { useContext } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import AuthContext from "../../../context/authContext/AuthContext";
import { styles } from "./homeScreen.style";
import GetTodo from "./getTodo";
import AddTodo from "./addTodo";
import { useMutation, gql } from "@apollo/client";
import DeleteTodo from "./deleteTodo";
import UpdateTodo from "./updateTodo";

const HomeScreen = () => {
  const { userSignout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.Thead}>
        <Text style={styles.headline}>TODO</Text>
        <GetTodo />
      </View>

      <View style={styles.Bodyy}></View>

      <View style={styles.Tbottom}>
        <AddTodo />
        <UpdateTodo />
        <DeleteTodo />

        <TouchableOpacity
          testID="btn-signout"
          style={styles.Button1}
          onPress={userSignout}
        >
          <Text style={{ color: "#fff" }}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HomeScreen;
