const api_key = 'bf86e576bed36186523f8fec1cfd441a';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDatafromServer = function (url, callback, optionalparameter) {
    fetch(url)
        .then(Response => Response.json())
        .then(data => callback(data, optionalparameter));
}

export { imageBaseURL, api_key, fetchDatafromServer};

// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer bf86e576bed36186523f8fec1cfd441a'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));