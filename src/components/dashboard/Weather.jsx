import { useEffect, useState } from "react";


function Weather() {
  const [weather, setWeather] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });

        try {
          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const weatherData = await weatherRes.json();

          const geoRes = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const geoData = await geoRes.json();

          const city =
            geoData.address.city ||
            geoData.address.town ||
            geoData.address.village ||
            geoData.address.state;

          setLocationName(city);
          setWeather(weatherData.current_weather);
          setLoading(false);
        } catch {
          setError("Failed to fetch weather data");
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied");
        setLoading(false);
      }
    );
  }, []);

  const getBackgroundClass = () => {
    if (!weather) return "";
    if (weather.temperature < 10) return "cold";
    if (weather.temperature < 25) return "mild";
    return "hot";
  };

  if (loading) return <div className="weather-card loading">Locating you...</div>;
  if (error) return <div className="weather-card error">{error}</div>;

  return (
    <div className={`weather-card ${getBackgroundClass()}`}>
      <div className="weather-header">
        <div>
          <h2>{locationName}</h2>
          <p className="coords">
            {coords.latitude.toFixed(3)}°, {coords.longitude.toFixed(3)}°
          </p>
        </div>
        <div className="temp-block">
          <h1>{weather.temperature}°C</h1>
          <p className="wind">
            Wind: {weather.windspeed} km/h
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="weather-info">
        <div className="info-card">
          <p>Wind Direction</p>
          <div
            className="wind-arrow"
            style={{ transform: `rotate(${weather.winddirection}deg)` }}
          >
            ↑
          </div>
        </div>

        <div className="info-card">
          <p>Weather Code</p>
          <span>{weather.weathercode}</span>
        </div>

        <div className="info-card">
          <p>Last Updated</p>
          <span>{weather.time.slice(11, 16)}</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;