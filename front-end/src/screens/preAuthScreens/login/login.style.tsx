
import {  StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },

  inputEmail: {
    width: 400,
    height: 54,
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C0C0C0",
  },
  inputPassword: {
    width: 400,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#C0C0C0",
  },
  buttonLoginDisabled: {
    backgroundColor: "#C0C0C0",
  },
  buttonLogin: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 400,
    flexDirection: "row",
    color: "#fff",
    borderRadius: 25,
    marginTop: 72,
    marginBottom: 24,
  },
  buttonLoginEnable: {
    backgroundColor: "#2f73e0",
  },
  imageArea: {
    flex: 1,
  },
  inputArea: {
    flex: 2,
  },
  footArea: {
    flex: 1,
    justifyContent: "flex-end",
    textAlign: "center",
  },
  Des: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 0,
    color: "#e0e0e0",
    letterSpacing: -0.2,
  },
  underline: {
    textDecorationLine: "underline",
    color: "#489f85",
    textAlign: "center",
  },
  underline1: {
    textDecorationLine: "underline",
    color: "#489f85",
  },
});