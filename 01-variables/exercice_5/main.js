function convertToFahrenheit(celsius){
  return (celsius * 9/5) +32;
}
let celsius = 13;
let fahrenheit = Math.round(convertToFahrenheit(celsius));

console.log(`${celsius}°C est égal à ${fahrenheit}°F`);
