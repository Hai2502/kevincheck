import React from "react";
import WelcomeScreen from "./welcomeScreen";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import AuthState from "../../../context/authContext/AuthState";

const AyncStorage = {};
jest.mock("@react-native-async-storage/async-storage", () => AyncStorage);
jest.mock(
  "react-native/Libraries/Components/Touchable/TouchableOpacity",
  () => "TouchableOpacity"
);

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

// beforeEach(() => {
//   AyncStorage.getItem = jest.fn().mockResolvedValue("token123");
// });

describe("welcomeScreen", () => {
  beforeEach(() => {});
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render correct message", async () => {
    const { findByText, getByTestId } = render(
      <AuthState>
        <WelcomeScreen />
      </AuthState>
    );
    const message = await findByText(
      "Get access to the best game Moments, Battles and Daily Tournaments"
    );
    await waitFor(() => fireEvent.press(getByTestId("moveToLogin")));
    expect(message).not.toBeNull();

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
