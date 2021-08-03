
import axios from "axios";


const latitude = 29.7604
const longitude = -95.3698


// if you run node weatherApi.js, the function weather() will display 
//a weather api in the console, that's ready to be integrated with graphql
const weather = (latitude, longitude) => {
axios.request({
  method: 'GET',
  url: `https://dark-sky.p.rapidapi.com/${latitude},${longitude}`,
  params: {units: 'auto', lang: 'en'},
  headers: {
    'x-rapidapi-key': 'a8b09fdfc0mshd6f279d5c7cefd6p11f240jsn27ee495e8d1c',
    'x-rapidapi-host': 'dark-sky.p.rapidapi.com'
  }}).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
})
}

weather(latitude, longitude)