import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import React, { useContext } from "react";
import { RestaurantsContext } from "services/restaurants/restaurants.context";

import Searchbar from "components/SearchBar/Searchbar";
import PlaceCard from "components/PlaceCard/PlaceCard";
import { styles } from "./restrauntsProps";
import { TRestaurantContext } from "../../services/restaurants/mock/mocks.types";
import { useSelector } from "react-redux";
import { RootState } from "reduxToolkit/store";
import ErrorIndicator from "components/ErrorIndicator/ErrorIndicator";

function Restaurants(): React.JSX.Element {
  const restaurantContext: TRestaurantContext = useContext(RestaurantsContext);
  const data = restaurantContext;

  const error = useSelector((state: RootState) => state?.error.error);

  return (
    <>
      <View style={styles.search}>
        <Searchbar placeholder="Search" value="" />
      </View>
      {error ? (
        <ErrorIndicator error={error} />
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={data}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <PlaceCard
                name={item?.name}
                icon={item?.icon}
                photos={item?.photos}
                address={item?.address}
                isOpenNow={item?.isOpenNow}
                rating={item?.rating}
                isClosedTemporarily={item?.isClosedTemporarily}
              />
            </View>
          )}
        />
      )}
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default Restaurants;
