import React, { useState } from "react";
import { styles } from "./homeScreen.style";
import { useMutation, gql } from "@apollo/client";
import { Button, View, TextInput } from "react-native";
import { idToUpdate } from "./getTodo";

const UPDATE_TODO = gql`
  mutation UpdateTodo($updateTodoId: Int!, $description: String!) {
    updateTodo(id: $updateTodoId, description: $description) {
      id
      description
      isFinished
    }
  }
`;

const UpdateTodo = () => {
  const [input, setInput] = useState<string>("");

  const [updateTodo, { loading, error }] = useMutation(UPDATE_TODO, {
    refetchQueries: [
      {
        query: gql`
          query Todos {
            todos {
              id
              description
              isFinished
            }
          }
        `,
      },
    ],
  });
  if (loading) return "Updating...";
  if (error) return `Update error! ${error.message}`;

  const onInputChange = (value: any) => {
    setInput(value);
  };

  const onUpdateTodo = () => {
    updateTodo({
      variables: {
        updateTodoId: idToUpdate,
        description: input,
      },
    });
    console.log("input", input);
    console.log("idToUpdate", idToUpdate);
    setInput("");
  };

  return (
    <View>
      <TextInput
        placeholder="Enter new desctiption here.."
        value={input}
        onChangeText={onInputChange}
        style={styles.inputTodo}
      />
      <Button title="Update todo" onPress={onUpdateTodo} />
    </View>
  );
};

export default UpdateTodo;
