fetch("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kharkiv%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
    .then(response => response.json())
    .then(data => {
 let newForecast = {};
    let forecast = data.query.results.channel.item.forecast
 for (let i=0; i<forecast.length; i++){
  newForecast.date = forecast[i].date;
  newForecast.high = forecast[i].high;
  newForecast.low = forecast[i].low;
  console.log(newForecast);    }
})