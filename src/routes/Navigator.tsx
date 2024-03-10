import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { ReactElement } from "react";

import { HomeScreen, SettingsScreen } from "../screens";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

/**
 * Main Navigator
 *
 * Displays as a bottom tab navigator
 */
export default function Navigator(): ReactElement {
  const { Navigator: RootNavigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <RootNavigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: IconName;

            if (route.name === "Home") {
              iconName = "rainy-outline";
            } else if (route.name === "Settings") {
              iconName = "options-outline";
            }

            return <Ionicons name={iconName!} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Settings" component={SettingsScreen} />
      </RootNavigator>
    </NavigationContainer>
  );
}
