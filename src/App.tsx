import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import getCurrentWeather from "./lib/getCurrentWeather";
import useLocation from "./lib/useLocation";

export default function App() {
  const { location } = useLocation();

  const {
    data: currentWeatherData,
    isLoading,
    error,
  } = getCurrentWeather(
    location?.coords.latitude || 0,
    location?.coords.longitude || 0,
  );

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : <></>}
      {currentWeatherData ? <Text>{currentWeatherData.name}</Text> : <></>}
      {error ? <Text>Error: {error.message}</Text> : <></>}
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
