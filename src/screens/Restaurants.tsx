import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";

import Searchbar from "../components/Searchbar";
import PlaceCard from "../components/PlaceCard";
import { theme } from "../theme/theme";

type RestaurantsProps = {};

const Restaurants = (): JSX.Element => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" value="" />
        </View>
        <View style={styles.list}>
          <PlaceCard
            name="Some Restaurant"
            icon="https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png"
            photos={[
              "https://resizer.otstatic.com/v2/photos/xlarge/1/25175467.jpg",
            ]}
            address="100 some random st"
            isOpenNow={true}
            rating={4}
            isClosedTemporarily={false}
          />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flexGrow: 0.05,
    justifyContent: "center",
    paddingLeft: theme.spacing.lg,
  },
  list: {
    flexGrow: 0.95,
    backgroundColor: theme.colors.bg.primary,
    paddingTop: theme.spacing.md,
  },
});
