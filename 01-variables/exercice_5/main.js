/*function convertToFahrenheit(celsius){
  return (celsius * 9/5) +32;
}
let celsius = 25;
let fahrenheit = convertToFahrenheit(celsius);

console.log(`${celsius}°C est égal à ${fahrenheit}°F`);
module.exports = {convertToFahrenheit};
*/
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5)  + 32;
}
let celsius =25;
//let fahrenheit = convertToFahrenheit//nm(celsius);
console.log(celsiusToFahrenheit(celsius));
module.exports = { celsiusToFahrenheit }