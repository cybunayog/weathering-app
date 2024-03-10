import React, { ReactElement } from "react";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigator from "./routes/Navigator";

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
