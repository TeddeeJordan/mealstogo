/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteConstants } from "constants/routeConstants";
import React from "react";
import Map from "screens/Map/Map";
import Settings from "screens/Settings/Settings";
import Restaurants from "screens/Restaurants/Restaurants";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme/theme";

const Tab = createBottomTabNavigator();

interface ITabIcon {
  route: (typeof RouteConstants)[keyof typeof RouteConstants];
  focused: boolean;
  color: string;
  size: number;
}

const TabIcon = ({ route, focused, color, size }: ITabIcon) => {
  let iconName: React.ComponentProps<typeof Ionicons>["name"];

  if (route.name === RouteConstants.restaurants) {
    iconName = focused ? "restaurant" : "restaurant-outline";
  } else if (route.name === RouteConstants.map) {
    iconName = focused ? "map" : "map-outline";
  } else if (route.name === RouteConstants.settings) {
    iconName = focused ? "settings" : "settings-outline";
  } else {
    iconName = "caret-up";
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default function TabStack(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <TabIcon
              route={route}
              focused={focused}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inversePrimary,
      })}
      initialRouteName={RouteConstants.restaurants}
    >
      <Tab.Screen name={RouteConstants.restaurants} component={Restaurants} />
      <Tab.Screen name={RouteConstants.map} component={Map} />
      <Tab.Screen name={RouteConstants.settings} component={Settings} />
    </Tab.Navigator>
  );
}
