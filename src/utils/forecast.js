const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c73ea0b267efc2c32bd7ee8a5cfdc4de&query=" +
    lat +
    "," +
    lon +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const weather = body.current;
      callback(
        undefined,
        weather.weather_descriptions[0] +
          ". It is currently " +
          weather.temperature +
          " degrees. It feels like " +
          weather.feelslike +
          " degrees."
      );
    }
  });
};

module.exports = forecast;
