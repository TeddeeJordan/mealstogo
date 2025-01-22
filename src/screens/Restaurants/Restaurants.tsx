import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, SafeAreaView, FlatList } from "react-native";
import React from "react";

import Searchbar from "components/SearchBar/Searchbar";
import PlaceCard from "components/PlaceCard/PlaceCard";
import { styles } from "./restrauntsProps";

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

function Restaurants(): JSX.Element {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="Search" value="" />
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <PlaceCard
                name={item.name}
                icon={item.icon}
                photos={item.photos}
                address={item.address}
                isOpenNow={item.isOpenNow}
                rating={item.rating}
                isClosedTemporarily={item.isClosedTemporarily}
              />
            </View>
          )}
        />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default Restaurants;
