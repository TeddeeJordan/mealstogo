export type TLocationObject = {
  html_attributions: string[];
  next_page_token: string;
  results: TResult[];
  status: string;
};

export type TResult =
  | {
      business_status?: string;
      geometry: {
        location: {
          lat: number;
          lng: number;
        };
        viewport: {
          northeast: {
            lat: number;
            lng: number;
          };
          southwest: {
            lat: number;
            lng: number;
          };
        };
      };
      icon?: string;
      name: string;
      opening_hours?: {
        open_now: boolean;
      };
      photos: TPhotos[];
      place_id: string;
      plus_code?: {
        compound_code: string;
        global_code: string;
      };
      rating?: number;
      reference: string;
      user_ratings_total?: number;
      vicinity: string;
      scope?: string;
      types?: string[];
      isClosedTemporarily?: string;
      isOpenNow?: boolean;
    }
  | undefined;

export type TPhotos = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

export type TRestaurantContext = {
  restaurants: TResult[];
};
