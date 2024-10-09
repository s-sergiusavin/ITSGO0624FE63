const apiKey = 'e7c21330c252e09f6c22ba3af2898def';

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      temperature: `${data.main.temp}°C`,
      condition: data.weather[0].description,
      city: data.name,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return { temperature: 'N/A', condition: 'N/A', city: city };
  }
}

async function getTimezone(timezone) {
  const url = `http://worldtimeapi.org/api/timezone/${timezone}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const time = new Date(data.datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { city: timezone.split('/')[1].replace('_', ' '), time };
  } catch (error) {
    console.error('Error fetching timezone data:', error);
    return { city: timezone.split('/')[1], time: 'N/A' };
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const weatherInfo = document.getElementById('weather-info');
  const timezonesInfo = document.getElementById('timezones-info');

  const weatherData = await getWeather('Timisoara');
  weatherInfo.innerHTML = `
    <h3>${weatherData.city}</h3>
    <p>${weatherData.temperature}</p>
    <p>${weatherData.condition}</p>
  `;


  const timezones = ['Europe/Bucharest', 'Europe/London', 'Asia/Tokyo'];
  timezonesInfo.innerHTML = '';
  for (const tz of timezones) {
    const timezoneData = await getTimezone(tz);
    const div = document.createElement('div');
    div.classList.add('timezone');
    div.innerHTML = `<p>${timezoneData.city}: ${timezoneData.time}</p>`;
    timezonesInfo.appendChild(div);
  }
});


  