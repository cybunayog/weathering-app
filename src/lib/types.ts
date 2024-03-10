export type CoordinatesTypeResponse = {
  lon: number;
  lat: number;
};

export type WeatherResponse = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type OpenWeatherMainValuesResponse = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type WindResponse = {
  speed: number;
  deg: number;
  gust: number;
};

export type RainResponse = {
  "1h": number;
  "3h": number;
};

export type SystemResponse = {
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

export type CityResponse = {
  id: number;
  name: string;
  coord: CoordsObject;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type ForecastListResponse = {
  dt: number;
  main: OpenWeatherMainValuesResponse;
  weather: Array<WeatherResponse>;
  clouds: { all: number };
  wind: WindResponse;
  visibility: number;
  pop: number;
  sys: { pod: string };
  dt_text: string;
};

export type OpenWeatherMapWeatherResponse = {
  coord: CoordinatesTypeResponse;
  weather: Array<WeatherResponse>;
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

export type OpenWeatherMapForecastResponse = {
  cnt: number;
  message: number;
  cod: number;
  list: Array<ForecastListResponse>;
  city: CityResponse;
};
