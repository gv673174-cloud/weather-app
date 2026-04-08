async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "d846e205cafc8dfd44b28e711b25e3c8";

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod !== 200) {
      document.getElementById("result").innerHTML = "City not found ❌";
      return;
    }

    document.getElementById("result").innerHTML = `
      <h3>${data.name}</h3>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      <p><strong>${data.weather[0].main}</strong></p>
      <p>🌡 Temp: ${data.main.temp} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>👀 Visibility: ${data.visibility} m</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching weather ⚠️";
  }
}
