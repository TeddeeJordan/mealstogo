import React from "react";
import { PaperProvider } from "react-native-paper";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantsContextProvider } from "services/restaurants/restaurants.context";

import { theme } from "theme/theme";

import TabStack from "navigation/tabNavigation/_layout";

export default function App(): React.JSX.Element {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <></>;
  }

  return (
    <PaperProvider theme={theme}>
      <RestaurantsContextProvider>
        <NavigationContainer>
          <TabStack />
        </NavigationContainer>
      </RestaurantsContextProvider>
    </PaperProvider>
  );
}
