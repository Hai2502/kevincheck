import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import AuthState from "../../context/authContext/AuthState";

import AppNavigator from "./AppNavigator";

const AyncStorage = {};
jest.mock("@react-native-async-storage/async-storage", () => AyncStorage);

describe("AppNavigator", () => {
  it("render preAuth", async () => {
    const { findByText, getByTestId } = render(
      <AuthState>
        <AppNavigator />
      </AuthState>
    );
    const message = await findByText(
      "Get access to the best game Moments, Battles and Daily Tournaments"
    );
    expect(message).not.toBeNull();

    fireEvent.press(getByTestId("moveToLogin"));
    const message2 = await findByText("Sign In");
    expect(message2).not.toBeNull();
  });

  it("render postAuth", async () => {
    AyncStorage.setItem = jest.fn().mockResolvedValue("token123");
    const { getByTestId } = render(
      <AuthState>
        <AppNavigator />
      </AuthState>
    );
    fireEvent.press(getByTestId("moveToLogin"));
    fireEvent.changeText(getByTestId("emailInput"), "email1@nelisoftwares.com");
    fireEvent.changeText(getByTestId("passwordInput"), "123456");
    await waitFor(() => fireEvent.press(getByTestId("btn-signin")));
    expect(AyncStorage.setItem.mock.calls.length).toEqual(1);
  });
});
