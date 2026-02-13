import React, { useEffect, useMemo, useState } from "react";
import "./WeatherCard.css";
import { fetchCurrentWeather, geocodeCity } from "../../api/openMeteo";
import {
  DEFAULT_WEATHER_DESCRIPTION,
  WEATHER_CODE_MAP,
} from "../../config/weatherCodes";

function WeatherCard({ locationName }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const city = useMemo(() => {
    if (!locationName) return "";
    const part = locationName.split(",")[0].trim();
    return part;
  }, [locationName]);

  useEffect(() => {
    if (!city) return;
    const ac = new AbortController();

    async function run() {
      try {
        setLoading(true);
        setError(null);
        setData(null);

        const { latitude, longitude } = await geocodeCity(city, {
          signal: ac.signal,
        });
        const weather = await fetchCurrentWeather(
          { latitude, longitude },
          { signal: ac.signal },
        );
        setData(weather);
      } catch (e) {
        if (e.name === "AbortError") return;
        setError(e.message || "Error al obtener clima");
      } finally {
        setLoading(false);
      }
    }

    run();
    return () => ac.abort();
  }, [city]);

  const describeCode = (code) => {
    return WEATHER_CODE_MAP[code] || DEFAULT_WEATHER_DESCRIPTION;
  };

  return (
    <div className="weather-card" role="group" aria-label={`Clima en ${city}`}>
      {loading && (
        <div className="weather-loading">
          <span className="circle-preloader" aria-hidden="true"></span>
          <span>Cargando clima…</span>
        </div>
      )}
      {!loading && error && <div className="weather-error">{error}</div>}
      {!loading && !error && data && (
        <div className="weather-content">
          <div className="weather-summary">
            <span className="weather-icon" aria-hidden="true">
              {describeCode(data.code).emoji}
            </span>
            <span className="weather-label">
              {describeCode(data.code).label}
            </span>
          </div>
          <div className="weather-metrics">
            <div className="weather-metric">
              <span className="metric-label">Temp</span>
              <span className="metric-value">{Math.round(data.temp)}°C</span>
            </div>
            <div className="weather-metric">
              <span className="metric-label">Viento</span>
              <span className="metric-value">{Math.round(data.wind)} km/h</span>
            </div>
            <div className="weather-metric">
              <span className="metric-label">Humedad</span>
              <span className="metric-value">{Math.round(data.humidity)}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
