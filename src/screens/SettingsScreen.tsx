import React, { ReactElement, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Title, Text, Button, Switch } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export function SettingsScreen(): ReactElement {
  const [isTimeFormatOn, setTimeFormatOn] = useState<boolean>(false);
  const [isLocationOn, setIsLocationOn] = useState<boolean>(false);
  const [isNotificationOn, setIsNotificationOn] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Title style={styles.titleText}>Units</Title>
          <Card mode="contained">
            <Card.Content>
              <Text variant="bodyLarge" style={styles.boldedText}>
                Temperature
              </Text>
              <View style={styles.buttonContainer}>
                <Button mode="outlined">Celsius</Button>
                <Button mode="outlined">Fahrenheit</Button>
              </View>
              <Text variant="bodyLarge" style={styles.boldedText}>
                Wind speed
              </Text>
              <View style={styles.buttonContainer}>
                <Button mode="outlined">Wind</Button>
                <Button mode="outlined">Gust</Button>
                <Button mode="outlined">Gust</Button>
              </View>
              <Text variant="bodyLarge" style={styles.boldedText}>
                Precipitation
              </Text>
              <View style={styles.buttonContainer}>
                <Button mode="outlined">Rainfall</Button>
                <Button mode="outlined">Downpour</Button>
              </View>
              <Text variant="bodyLarge" style={styles.boldedText}>
                Distance
              </Text>
              <View style={styles.buttonContainer}>
                <Button mode="outlined">Length</Button>
                <Button mode="outlined">Travel</Button>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Title style={styles.titleText}>Notifications</Title>
          <Card mode="contained">
            <Card.Content>
              <View style={styles.switchContainer}>
                <View>
                  <Text variant="bodyLarge" style={styles.boldedText}>
                    Alerts
                  </Text>
                  <Text variant="bodyMedium">Stay informed</Text>
                </View>
                <Switch
                  value={isNotificationOn}
                  onValueChange={() => setIsNotificationOn(!isNotificationOn)}
                />
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Title style={styles.titleText}>General</Title>
          <Card mode="contained">
            <Card.Content>
              <View style={styles.switchContainer}>
                <Text variant="bodyLarge" style={styles.boldedText}>
                  12-Hour Format
                </Text>
                <Switch
                  value={isTimeFormatOn}
                  onValueChange={() => setTimeFormatOn(!isTimeFormatOn)}
                />
              </View>
              <View style={styles.switchContainer}>
                <View>
                  <Text variant="bodyLarge" style={styles.boldedText}>
                    Location
                  </Text>
                  <Text variant="bodyMedium">Retrieve local weather</Text>
                </View>
                <Switch
                  value={isLocationOn}
                  onValueChange={() => setIsLocationOn(!isLocationOn)}
                />
              </View>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "150%",
    width: "100%",
    padding: 20,
  },
  cardContainer: {
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 5,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  boldedText: {
    fontWeight: "bold",
  },
});
