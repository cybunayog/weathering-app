import * as Location from "expo-location";
import { LocationObject } from "expo-location";
import { useState, useEffect } from "react";

export default function useLocation() {
  const [location, setLocation] = useState<LocationObject | null>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      // Check if location permission is granted
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      // Grab current location info
      const location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, [location, error]);

  return { location, error };
}
