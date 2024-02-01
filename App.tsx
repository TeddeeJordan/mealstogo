import React from "react";
import { PaperProvider } from "react-native-paper";

import { theme } from "./src/theme/theme";

import Restaurants from "./src/screens/Restaurants";

export default function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <Restaurants />
    </PaperProvider>
  );
}
