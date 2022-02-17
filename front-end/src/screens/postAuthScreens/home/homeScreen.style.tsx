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
    paddingBottom: 30,
  },

  todo_fetch: {
    flex: 4,
    justifyContent: "flex-start",
  },

  Thead: {
    flex: 1,
    alignItems: "center",
  },

  Tbottom: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
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
    opacity: 1,
  },
  inputTodo: {
    width: 300,
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#C0C0C0",
  },
  Button1: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 120,
    color: "#fff",
    borderRadius: 25,
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: "#2f73e0",
  },
  Bodyy: {
    flexDirection: "row",
  },
});
