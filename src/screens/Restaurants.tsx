import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";

import Searchbar from "../components/Searchbar";
import PlaceCard from "../components/PlaceCard";
import { theme } from "../theme/theme";

const data = [
  {
    name: "Some American Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: ["https://resizer.otstatic.com/v2/photos/xlarge/1/25175467.jpg"],
    address: "100 Some Random Street",
    isOpenNow: false,
    rating: 3,
    isClosedTemporarily: false,
  },
  {
    name: "Some Italian Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: ["https://resizer.otstatic.com/v2/photos/xlarge/1/25175467.jpg"],
    address: "100 Some Random Street",
    isOpenNow: false,
    rating: 2,
    isClosedTemporarily: true,
  },
  {
    name: "Some Sushi Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: ["https://resizer.otstatic.com/v2/photos/xlarge/1/25175467.jpg"],
    address: "100 Some Random Street",
    isOpenNow: true,
    rating: 3,
    isClosedTemporarily: false,
  },
  {
    name: "Some Thai Restaurant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: ["https://resizer.otstatic.com/v2/photos/xlarge/1/25175467.jpg"],
    address: "100 Some Random Street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
];

// type RestaurantsProps = {};

const Restaurants = (): JSX.Element => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" value="" />
        </View>
        <View style={styles.list}>
          <FlatList
            data={data}
            renderItem={(item) => (
              <View style={styles.listItemContainer}>
                <PlaceCard
                  name={item.item.name}
                  icon={item.item.icon}
                  photos={item.item.photos}
                  address={item.item.address}
                  isOpenNow={item.item.isOpenNow}
                  rating={item.item.rating}
                  isClosedTemporarily={item.item.isClosedTemporarily}
                />
              </View>
            )}
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
  listItemContainer: {
    paddingVertical: theme.spacing.md,
  },
});
