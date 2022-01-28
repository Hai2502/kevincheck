import React from "react";
import Login from "./login";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import AuthState from "../../../context/authContext/AuthState";

const AyncStorage = {};
jest.mock("@react-native-async-storage/async-storage", () => AyncStorage);

window.alert = jest.fn();
window.warn = jest.fn();

describe("login", () => {
  beforeEach(() => {
    AyncStorage.setItem = jest.fn().mockResolvedValue("token123");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should alert", async () => {
    const { getByTestId } = render(
      <AuthState>
        <Login />
      </AuthState>
    );
    fireEvent.changeText(getByTestId("emailInput"), "email1@nelisoftwares.com");
    fireEvent.changeText(getByTestId("passwordInput"), "1234567");
    await waitFor(() => fireEvent.press(getByTestId("btn-signin")));
    expect(AyncStorage.setItem.mock.calls.length).toEqual(0);
  });

  it("should login", async () => {
    const { getByTestId } = render(
      <AuthState>
        <Login />
      </AuthState>
    );
    fireEvent.changeText(getByTestId("emailInput"), "email1@nelisoftwares.com");
    fireEvent.changeText(getByTestId("passwordInput"), "123456");
    await waitFor(() => fireEvent.press(getByTestId("btn-signin")));
    expect(AyncStorage.setItem.mock.calls.length).toEqual(1);
  });
});
