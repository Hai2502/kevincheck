import React from "react";
import HomeScreen from "./homeScreen";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import AuthState from "../../../context/authContext/AuthState";

const AyncStorage = {};
jest.mock("@react-native-async-storage/async-storage", () => AyncStorage);
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("homeScreen", () => {
  beforeEach(() => {
    AyncStorage.removeItem = jest.fn();
    AyncStorage.getItem = jest.fn().mockResolvedValue("abc");
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render correct message", async () => {
    const { findByText } = render(
      <AuthState>
        <HomeScreen />
      </AuthState>
    );
    const message = await findByText("TODO");
    expect(message).not.toBeNull();
  });
  it("should call removeItem", async () => {
    const { getByTestId } = render(
      <AuthState>
        <HomeScreen />
      </AuthState>
    );
    await waitFor(() => fireEvent.press(getByTestId("btn-signout")));
    expect(AyncStorage.removeItem.mock.calls.length).toEqual(1);
  });
});
