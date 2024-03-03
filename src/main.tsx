import { registerRootComponent } from "expo";
import { PaperProvider } from "react-native-paper";

import App from "./App";

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

registerRootComponent(Main);
