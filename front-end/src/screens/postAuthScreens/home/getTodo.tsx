import React, { useState } from "react";
import { styles } from "./homeScreen.style";
import { useQuery, gql } from "@apollo/client";
import { View, Text, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const GET_TODOS = gql`
  query Todos {
    todos {
      id
      description
      isFinished
    }
  }
`;

export const ids: any[] | (() => any[]) = [];
export var idToUpdate = 0;

const GetTodo = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  console.log("Error: ", error);
  console.log("data: ", data);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading todos </Text>;

  const onPress = (key: any) => {
    const allIds: any[] | (() => any[]) = [];
    let id = key;
    if (ids.includes(id)) {
      ids.splice(ids.indexOf(id), 1);
    } else ids.push(id);

    for (var i = 0; i < data.todos.length; i++) {
      if (!allIds.includes(data.todos[i].id)) allIds.push(data.todos[i].id);
    }
    for (var j = 0; j < ids.length; j++) {
      if (!allIds.includes(ids[j])) {
        ids.splice(j, 1);
        j--;
      }
    }

    if (ids.length > 1) {
      idToUpdate = -1;
    } else idToUpdate = ids[0];
    console.log("ids", ids);
    console.log("idToUpdate", idToUpdate);
    console.log("allids", allIds);
  };

  return (
    <View style={styles.todo_fetch}>
      {data.todos.map(
        (todo: {
          id: React.Key | null | undefined;
          description:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <View style={styles.todo_container} key={todo.id}>
            <View style={styles.todo_item}>
              <Text>{todo.description}</Text>
            </View>
            <BouncyCheckbox
              size={25}
              fillColor="blue"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "blue" }}
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(checked: boolean) => onPress(todo.id)}
            />
          </View>
        )
      )}
    </View>
  );
};

export default GetTodo;
