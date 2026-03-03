import { mocks } from "./mock";
import camelize from "camelize";
import { TLocationObject } from "./mock/mocks.types";

export const restaurantRequest = (
  location: string = "37.7749295,-122.4194155",
): Promise<TLocationObject> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("location not found");
    }
    resolve(mock);
  });
};

export const restaurantTransformer = ({ results }: TLocationObject) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant?.opening_hours?.open_now,
      isClosedTemporarily: restaurant?.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

// restaurantRequest()
//   .then((result) => restaurantTransformer(result))
//   .then((transformedRestaurant) => {
//     return transformedRestaurant;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

export const restaurantResults = async () => {
  try {
    const request = await restaurantRequest();
    return await restaurantTransformer(request);
  } catch (error) {
    console.error(error);
  }
};
