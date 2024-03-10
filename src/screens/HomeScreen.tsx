import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

import getCurrentWeather from "../lib/getCurrentWeather";
import useLocation from "../lib/useLocation";

export function HomeScreen(): ReactElement {
  const { location } = useLocation();
  const { currentWeatherData, loadingCurrentWeatherData, currentWeatherError } =
    getCurrentWeather({
      lat: location?.coords.latitude || 0,
      long: location?.coords.longitude || 0,
    });

  return (
    <View style={styles.container}>
      {loadingCurrentWeatherData ? <Text>Loading...</Text> : <></>}
      {currentWeatherData ? <Text>{currentWeatherData.name}</Text> : <></>}
      {currentWeatherError ? (
        <Text>Error: {currentWeatherError.message}</Text>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
