import React, { useState } from "react";
import { styles } from "./homeScreen.style";
import { useMutation, gql } from "@apollo/client";
import { View, TextInput, Button } from "react-native";

const ADD_TODO = gql`
  mutation AddTodo($description: String!) {
    addTodo(description: $description) {
      id
      description
      isFinished
    }
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const [addTodo, { loading, error }] = useMutation(ADD_TODO, {
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
  const add = () => {
    addTodo({
      variables: {
        description: input,
      },
    });
    console.log(input);
    setInput("");
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const onInputChange = (value: any) => {
    setInput(value);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Todo here.."
        value={input}
        onChangeText={onInputChange}
        style={styles.inputTodo}
      />
      <Button title="add todo" onPress={add} />
    </View>
  );
};
export default AddTodo;
