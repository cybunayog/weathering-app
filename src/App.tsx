import React, { ReactElement } from "react";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigator from "./routes/Navigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#fff",
    secondary: "#f0f0f0",
    surfaceVariant: "#f0f0f0",
    onPrimaryContainer: "#000",
    secondaryContainer: "transparent",
  },
};

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
