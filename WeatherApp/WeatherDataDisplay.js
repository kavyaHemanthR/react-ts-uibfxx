import React from 'react';



function WeatherData() {
  const [weatherData, setWeatherData] = React.useState('');
  const [userData, setUserData] = React.useState('')

  React.useEffect(function () {
    //fetch weather data
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=tracy&cnt=5&appid=9171d4181a8dc4ec32bf453ac1ea73bc'
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        console.log(weatherData);
      });
    //fetch user data from the GitHub API
    fetch("https://api.github.com/users/kavyaHemanthR")
      .then(res => res.json())
      .then(data => {
        setUserData(data)
        console.log(data)})
  }, []);
  return (
    <div>
      <h1>
        Tracy Weather Data(temperature, humidity, wind speed, and a five-day
        forecast.)
      </h1>
      <p>{}</p>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}

export default WeatherData;
