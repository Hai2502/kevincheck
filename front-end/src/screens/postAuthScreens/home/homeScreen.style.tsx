import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 15,
  },

  headline: {
    fontSize: 30,
  },

  todo_fetch: {
    flex: 4,
    justifyContent: "flex-start",
  },

  Thead: {
    flex: 1,
  },

  Tbottom: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  todo_container: {
    padding: 0,
    flexDirection: "row",
  },

  todo_item: {
    borderColor: "#000",
    borderWidth: 1,
    width: 250,
  },
  checkbox: {
    alignSelf: "center",
  },
});
