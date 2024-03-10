import useForecast from "./lib/useForecast";
import { React, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from "react-native";

type forecastData = {
    day: number;
    temp: string;
    weather: string;
};

//more props can be added if necessary
type forecastProps = {
    forecastDay: forecastData;
    onPress: () => void;
};

const forecastArr: forecastData[] = [];

//styles in touchableopacity & text to be updated 
const Day =({forecastDay, onPress}: forecastProps) => {
    <TouchableOpacity onPress={onPress}>
        <Text> {forecastDay.day} Day Forecast, Weather: {forecastDay.weather} Temp: {forecastDay.temp} </Text>
    </TouchableOpacity>
}

export default function forecastList() {

    const forecast = useForecast();

        useEffect(({
            
            forecast.list.forEach((item, index) => {
                
                const newItem: forecastData = {
                    day: index+=1;
                    temp: item.main.temp;
                    weather: item.weather;
                }

                if (newItem.temp && newItem.weather != 'undefined') {
                  forecastArr.push(newItem);  
                }
                
            });
            
            }), []);

    //onPress tbd as well
    const renderDay = ( {forecastDay}: {forecastDay: forecastData} ) => {
        return(
            <Day
                forecastDay={forecastDay}
                {/* onPress={} */}
            />
        );
    }

    return (
        <FlatList
        data={forecastArr}
        renderItem={renderDay}
        >
        </FlatList>
    );
}
