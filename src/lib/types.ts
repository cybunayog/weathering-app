type CoordinatesTypeResponse = {
  lon: number;
  lat: number;
};

type WeatherResponse = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type OpenWeatherMainValuesResponse = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

type WindResponse = {
  speed: number;
  deg: number;
  gust: number;
};

type RainResponse = {
  "1h": number;
  "3h": number;
};

type SystemResponse = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type CoordsObject = {
  lat: number;
  long: number;
};

export type OpenWeatherMapResponse = {
  coord: CoordinatesTypeResponse;
  weather: [WeatherResponse];
  base: string;
  main: OpenWeatherMainValuesResponse;
  visibility: number;
  wind: WindResponse;
  rain?: RainResponse;
  clouds: {
    all: number;
  };
  dt: number;
  sys: SystemResponse;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
