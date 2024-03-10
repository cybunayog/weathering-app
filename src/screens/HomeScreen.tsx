import { StatusBar } from "expo-status-bar";
import { React, useEffect } from "react";
import { StyleSheet, Text, View, } from "react-native";
import getCurrentWeather from "./lib/getCurrentWeather";
import useLocation from './lib/useLocation';
import useForecast from "./lib/useForecast";

export default function App() {
  const { location } = useLocation();
  const { currentWeatherData, loadingCurrentWeatherData, currentWeatherError } =
    getCurrentWeather(
      location?.coords.latitude || 0,
      location?.coords.longitude || 0,
    );
  const { forecast } = useForecast();
  
  
  
  //useEffect guaranteed to be called at least once on mount
  useEffect(({
    const time = new Date().toLocaleTimeString;
    const weather = currentWeatherData[0].weather;
    const weatherDescription = currentWeatherData[0].description;
    const visibility = currentWeatherData.visibility;
    const {lat, lon} = currentWeatherData.coords;
    const temp = currentWeatherData.main.temp;
    const city = currentWeatherData.name;
    const country = location.country;
    const forecast_1 = forecast[0].main;
    const forecast_2 = forecast[1].main;
    const forecast_3 =forecast[2].main;
    
    }), []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      { currentWeatherData && (
      <>
      <Text> Current Weather: {weather}</Text>
      <Text>Description: {weatherDescription}</Text>
      <Text>Temperature: {temp}</Text>
      <Text>Location: {city}, {country}</Text>
      <Text>Time: {time} </Text>
      </>
      )}

      <ScrollView>
        { forecast && (
          <>
          <Text>Tomorrow: {forecast_1}</Text>
          <Text>The Day After Tomorrow: {forecast_2}</Text>
          <Text>Two Days from Today: {forecast_3}</Text>
          </>
        )}
      </ScrollView>
    
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
