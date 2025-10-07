import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteConstants } from "constants/routeConstants";
import React from "react";
import Map from "screens/Map/Map";
import Settings from "screens/Settings/Settings";
import Restaurants from "screens/Restaurants/Restaurants";

const Tab = createBottomTabNavigator();

export default function TabStack(): React.JSX.Element {
  return (
    <Tab.Navigator initialRouteName={RouteConstants.restaurants}>
      <Tab.Screen name={RouteConstants.restaurants} component={Restaurants} />
      <Tab.Screen name={RouteConstants.map} component={Map} />
      <Tab.Screen name={RouteConstants.settings} component={Settings} />
    </Tab.Navigator>
  );
}
