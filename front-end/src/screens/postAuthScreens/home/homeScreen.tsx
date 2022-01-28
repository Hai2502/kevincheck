import React, { useContext } from "react";
import { View, Text, Button, CheckBox } from "react-native";
import AuthContext from "../../../context/authContext/AuthContext";
import { styles } from "./homeScreen.style";
import { useQuery, gql } from "@apollo/client";

const GET_TODOS = gql`
  query Todos {
    todos {
      id
      description
      isFinished
    }
  }
`;
const HomeScreen = () => {
  const { userSignout } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_TODOS);
  console.log("Error: ", error);
  console.log("data: ", data);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading todos </Text>;

  return (
    <View style={styles.container}>
      <View style={styles.Thead}>
        <Text style={styles.headline}>TODO</Text>
      </View>

      <View style={styles.todo_fetch}>
        {data.todos.map((todo) => (
          <View style={styles.todo_container} key={todo.id}>
            <View style={styles.todo_item} >
              <Text>{todo.description}</Text>
            </View>

            <CheckBox style={styles.checkbox} />
          </View>
        ))}
      </View>

      <View style={styles.Tbottom}>
        <Button title="add todo" onPress={userSignout} />
        <Button testID="btn-signout" title="LOG OUT" onPress={userSignout} />
      </View>
    </View>
  );
};
export default HomeScreen;
