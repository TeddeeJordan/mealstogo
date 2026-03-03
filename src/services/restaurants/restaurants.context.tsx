import React, { createContext, useEffect, useState } from "react";
import { restaurantResults } from "./restaurants.service";
import { TRestaurantContext } from "./mock/mocks.types";
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../../theme/theme";
import { setErrorState } from "../../redux/slices";
import { useDispatch } from "react-redux";
import { styles } from "./restaurants.contextProps";

export const RestaurantsContext = createContext<TRestaurantContext | null>(
  null,
);

export const RestaurantsContextProvider = ({
  children,
}: any): React.JSX.Element => {
  const dispatch = useDispatch();

  const [restaurants, setRestaurants] = useState<TRestaurantContext>([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(restaurants);

  const getRestaurants = async () => {
    try {
      const results = await restaurantResults();
      setRestaurants(results);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setErrorState(error.message));
      } else {
        dispatch(setErrorState("An unknown error has occurred"));
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => getRestaurants(), 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RestaurantsContext.Provider value={restaurants}>
      {isLoading ? (
        <ActivityIndicator
          animating
          color={theme.colors.brand.secondary}
          size={theme.sizes.xl}
          style={styles.activityIndicator}
        />
      ) : (
        children
      )}
    </RestaurantsContext.Provider>
  );
};
