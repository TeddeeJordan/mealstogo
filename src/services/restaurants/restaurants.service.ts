import { mocks } from "./mock";
import camelize from "camelize";
import { TLocationObject, TResult } from "./mock/mocks.types";

export const restaurantRequest = (
  location: string = "37.7749295,-122.4194155",
) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("location not found");
    }
    resolve(mock);
  });
};

const restaurantTransformer = ({ results }: TLocationObject) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

restaurantRequest()
  .then((result) => restaurantTransformer(result))
  .then((transformedRestaurant) => console.log(transformedRestaurant))
  .catch((error) => {
    console.error(error);
  });
