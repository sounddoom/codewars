button.addEventListener("click", () => {
      let data;
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${weatherData.value}&APPID=bcc8548528b40445aeaaec0484826601`
      fetch(url)
            .then(r => r.json())
            .then(d => {
                  container.innerHTML = '';
                  data = d;
                  let statusArr = [`Weather in ${weatherData.value} ${data.main.temp_max}°C`, `Wind speed: ${data.wind.speed}m/s`, `Cloudiness ${data.clouds.all}%`, `Pressure ${data.main.pressure} hPa `, `Humidity ${data.main.humidity}`, `Sunrise ${Date(data.sys.sunrise)}`, `Sunset ${Date(data.sys.sunset)}`, `Geo coordinates Latitude:${data.coord.lat} Longitude:${data.coord.lon}`]
                  for (i = 0; i < statusArr.length; i++) {
                        let div = document.createElement('div');
                        div.innerText = statusArr[i]
                        container.appendChild(div)
                  }
            }
            )


})


