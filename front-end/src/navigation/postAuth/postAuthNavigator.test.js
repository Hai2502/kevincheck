import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import PostAuthNavigator from "./postAuthNavigator";
import AuthState from "../../context/authContext/AuthState";

const AyncStorage = {};
jest.mock("@react-native-async-storage/async-storage", () => AyncStorage);

// jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("PostAuthNavigator", () => {
  beforeEach(() => {
    AyncStorage.setItem = jest.fn().mockResolvedValue("token123");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("render correctly", async () => {
    const { findByText, getByTestId } = render(
      <AuthState>
        <NavigationContainer>
          <PostAuthNavigator />
        </NavigationContainer>
      </AuthState>
    );
    const message = await findByText("Now you're authenticated! Welcome!");
    const button = await getByTestId("btn-signout");
    expect(message).not.toBeNull();
    expect(button).not.toBeNull();
  });
});
