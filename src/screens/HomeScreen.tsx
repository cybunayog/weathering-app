import { StatusBar } from "expo-status-bar";
import React, { ReactElement, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import getCurrentWeather from "../lib/getCurrentWeather";
import getForecast from "../lib/getForecast";
import {
  OpenWeatherMapForecastResponse,
  OpenWeatherMapWeatherResponse,
} from "../lib/types";
import useLocation from "../lib/useLocation";

export function HomeScreen(): ReactElement {
  const [weatherData, setWeatherData] =
    useState<OpenWeatherMapWeatherResponse | null>(null);
  const [forecastData, setForecastData] =
    useState<OpenWeatherMapForecastResponse | null>(null);
  const { location } = useLocation();
  const {
    currentWeatherData,
    loadingCurrentWeatherData,
    currentWeatherError,
    callCurrentWeather,
  } = getCurrentWeather({
    lat: location?.coords.latitude || 0,
    long: location?.coords.longitude || 0,
  });
  const {
    forecastData: forecast,
    loadingForecastData,
    forecastError,
    callForecast,
  } = getForecast({
    lat: location?.coords.latitude || 0,
    long: location?.coords.longitude || 0,
  });

  useEffect(() => {
    // Call API
    callCurrentWeather();
    callForecast();
  }, [callCurrentWeather, callForecast]);

  useEffect(() => {
    // Set data
    setWeatherData(currentWeatherData);
    setForecastData(forecast);
  }, [loadingCurrentWeatherData, loadingForecastData]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/** TODO: Add loading states */}
      {currentWeatherError && (
        <Text>Weather Error: {currentWeatherError.message}</Text>
      )}
      {forecastError && <Text>Forecast Error: {forecastError.message}</Text>}
      {weatherData && !loadingCurrentWeatherData && (
        <>
          <Text>Current Weather: {weatherData.weather[0].main}</Text>
          <Text>Description: {weatherData.weather[0].description}</Text>
          <Text>Temperature: {weatherData.main.temp}</Text>
          <Text>
            Location: {weatherData.name}, {weatherData.sys.country}
          </Text>
          <Text>
            Time: {new Date(weatherData.dt * 1000).getHours()}:
            {new Date(weatherData.dt * 1000).getUTCMinutes()}{" "}
          </Text>
        </>
      )}

      {forecastData && !loadingForecastData && (
        <>
          {/** TODO: Fix forecast list */}
          <Text>Tomorrow: {forecast.list[0].weather[0].main}</Text>
          {/* <Text>
            The Day After Tomorrow: {forecast.list[1].weather[1].main}
          </Text>
          <Text>Two Days from Today: {forecast.list[2].weather[2].main}</Text> */}
        </>
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
