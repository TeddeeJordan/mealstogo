import React, { createContext, useEffect, useState } from "react";
import { restaurantResults } from "./restaurants.service";
import { TResult } from "./mock/mocks.types";
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../../theme/theme";
import { setErrorState } from "../../redux/slices";
import { useDispatch } from "react-redux";
export const RestaurantsContext = createContext({
  restaurants: [],
});

export const RestaurantsContextProvider = ({
  children,
}: any): React.JSX.Element => {
  const dispatch = useDispatch();

  const [restaurants, setRestaurants] = useState<TResult>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getRestaurants = async () => {
    try {
      // const results = await restaurantResults();
      // setRestaurants(results);
      // setIsLoading(false);
      throw new Error("Forced Failure to Load!");
    } catch (error) {
      const errorMessage = error as unknown as string;
      dispatch(setErrorState(errorMessage));
      console.log("ERROR--", errorMessage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => getRestaurants(), 2500);
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants: restaurants }}>
      {isLoading ? (
        <ActivityIndicator
          animating
          color={theme.colors.brand.secondary}
          size={theme.sizes.xl}
          style={{
            flexGrow: 1,
            alignContent: "center",
            justifyContent: "center",
          }}
        />
      ) : (
        children
      )}
    </RestaurantsContext.Provider>
  );
};
