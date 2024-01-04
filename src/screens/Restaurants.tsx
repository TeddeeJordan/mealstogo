import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";

import Searchbar from "../components/Searchbar";
import PlaceCard from "../components/PlaceCard";

type RestaurantsProps = {};

const Restaurants = (): JSX.Element => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" value="" />
        </View>
        <View style={styles.list}>
          <PlaceCard />
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
    paddingLeft: 12,
  },
  list: {
    flexGrow: 0.95,
    backgroundColor: "blue",
    paddingTop: 10,
    paddingLeft: 12,
  },
});
