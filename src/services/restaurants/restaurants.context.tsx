import React, { createContext, useEffect, useState } from "react";
import {
  restaurantRequest,
  restaurantResults,
  transformedRestaurant,
} from "./restaurants.service";
import { TRestaurantContext, TResult } from "./mock/mocks.types";

export const RestaurantsContext = createContext({
  restaurants: [],
});

export const RestaurantsContextProvider = ({ children }: any) => {
  const [restaurants, setRestaurants] = useState<TResult>(undefined);
  const getRestaurants = async () => {
    try {
      const results = await restaurantResults();
      setRestaurants(results);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    void getRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants: restaurants }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
