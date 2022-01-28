import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import PreAuthNavigator from "./preAuthNavigator";
import AuthState from "../../context/authContext/AuthState";

const AyncStorage = {};
jest.mock("@react-native-async-storage/async-storage", () => AyncStorage);

// jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("PreAuthNavigator", () => {
  beforeEach(() => {});
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("render correctly", async () => {
    const { findByText, getByTestId } = render(
      <AuthState>
        <NavigationContainer>
          <PreAuthNavigator />
        </NavigationContainer>
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

  it("render after move to login", async () => {
    const { findByText, getByTestId } = render(
      <AuthState>
        <NavigationContainer>
          <PreAuthNavigator />
        </NavigationContainer>
      </AuthState>
    );

    await waitFor(() => fireEvent.press(getByTestId("moveToLogin")));
    const message2 = await findByText("Sign In");
    expect(message2).not.toBeNull();
  });
});
