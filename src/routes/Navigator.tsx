import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import React, { ReactElement } from "react";
import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import { HomeScreen, SettingsScreen } from "../screens";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

/**
 * Main Navigator
 *
 * Displays as a bottom tab navigator
 */
export default function Navigator(): ReactElement {
  const theme = useTheme();
  const { Navigator: RootNavigator, Screen } =
    createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <RootNavigator
        initialRouteName="Home"
        barStyle={{
          height: 80,
          backgroundColor: theme.colors.primary,
          shadowOffset: { width: 0, height: 2 },
          shadowColor: "#000000",
          shadowOpacity: 1,
          shadowRadius: 2,
        }}
        activeColor="#B4D5FE"
        labeled={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName: IconName;

            if (route.name === "Home") {
              iconName = "rainy";
            } else if (route.name === "Settings") {
              iconName = "options";
            }

            return <Ionicons name={iconName!} size={25} color={color} />;
          },
        })}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Settings" component={SettingsScreen} />
      </RootNavigator>
    </NavigationContainer>
  );
}
