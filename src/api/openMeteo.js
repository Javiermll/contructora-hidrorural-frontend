import {
  OPEN_METEO_FORECAST_ENDPOINT,
  OPEN_METEO_GEOCODE_ENDPOINT,
} from "../config/constants";

export async function geocodeCity(city, { signal } = {}) {
  const res = await fetch(
    `${OPEN_METEO_GEOCODE_ENDPOINT}?name=${encodeURIComponent(
      city,
    )}&count=1&language=es&format=json`,
    { signal },
  );

  if (!res.ok) throw new Error("No se pudo geocodificar la ubicación");

  const json = await res.json();
  const place = json?.results?.[0];
  if (!place) throw new Error("Ubicación no encontrada");

  return { latitude: place.latitude, longitude: place.longitude };
}

export async function fetchCurrentWeather(
  { latitude, longitude },
  { signal } = {},
) {
  const res = await fetch(
    `${OPEN_METEO_FORECAST_ENDPOINT}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weathercode&timezone=auto`,
    { signal },
  );

  if (!res.ok) throw new Error("No se pudo obtener el clima");

  const json = await res.json();

  return {
    temp: json?.current?.temperature_2m,
    wind: json?.current?.wind_speed_10m,
    humidity: json?.current?.relative_humidity_2m,
    code: json?.current?.weathercode,
  };
}
