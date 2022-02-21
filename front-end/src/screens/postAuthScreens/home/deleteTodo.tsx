import React from "react";
import { styles } from "./homeScreen.style";
import { useMutation, gql } from "@apollo/client";
import { Text, TouchableOpacity } from "react-native";
import { ids } from "./getTodo";

const DELETE_TODO = gql`
  mutation DeleteTodos($ids: [Int]!) {
    deleteTodos(ids: $ids) {
      id
      description
      isFinished
    }
  }
`;

const DeleteTodo = () => {
  const [deleteTodo, { loading, error }] = useMutation(DELETE_TODO, {
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
  if (loading) return "Deleting...";
  if (error) return `Deleting error! ${error.message}`;

  const onDeleteTodo = () => {
    deleteTodo({
      variables: {
        ids: ids,
      },
    });
  };

  return (
    <TouchableOpacity
      testID="btn-signout"
      style={styles.Button1}
      onPress={onDeleteTodo}
    >
      <Text style={{ color: "#fff" }}>Delete</Text>
    </TouchableOpacity>
  );
};

export default DeleteTodo;
