import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },

  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    height: 50,
    width: 350,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#333",
    flexDirection: "row",
  },
  head: {
    flex: 2,
    marginBottom: 30,
    justifyContent: "flex-start",
  },
  login: {
    flex: 1,
  },
  welcome: {
    fontSize: 48,
    lineHeight: 50,
    fontFamily: "sans-serif",
    fontWeight: "400",
  },
  describe: {
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "sans-serif",
    letterSpacing: 0.2,
    marginTop: 15,
  },
  underline: {
    textDecorationLine: "underline",
  },
  foot: {
    flex: 1,
    justifyContent: "flex-end",
    textAlign: "center",
  },
});