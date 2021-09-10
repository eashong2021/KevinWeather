// Today's forecast is in kelvin.
const kelvin = 0;
// converting kelvin to celcius.
 const celcius = kelvin - 273;
 // convert from celcius to fahrenheit.
 let fahrenheit = celcius * (9/5) + 32;
// rounding down the farenheit temperature. 
 fahrenheit = Math.floor(fahrenheit);
 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)



