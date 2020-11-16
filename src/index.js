// import query-string to make the parse the access token and make it usable to send our queries
import queryString from "query-string";

// parsing access token and storing it in 'accessToken' variable
const parsed = queryString.parse(location.search);
let accessToken = parsed.access_token;

//this function executes a 'fetch' function which takes in the endpoint and headers for authorization to give us back user's current song data
const getUserDetails = () => {
  fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: "Bearer " + accessToken },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      trackName.innerText = `Track: ${response.item.name}`;
      artistName.innerText = `By: ${response.item.artists[0].name}`;
      trackImage.src = response.item.album.images[0].url;
    })
    .catch((err) => console.log(err));
};

// storing button to 'check what song is playing' in variable
const checkPlaying = document.getElementById("check-playing");
// storing the elements we want to manipulate in variables
let trackName = document.getElementById("track-name");
let artistName = document.getElementById("artist-name");
let trackImage = document.getElementById("track-image");

// on button click, getNowPlaying() is executed passing our variables above (which refer to DOM elements) as arguments
checkPlaying.addEventListener("click", () => {
  if (accessToken) {
    // getNowPlaying(trackName, artistName, trackImage);
    getUserDetails();
  }
});

// A simple demo of how we can go about working with the data we get from the API.
// Try it yourself: Login to spotify and start playing something, then hit the 'Check Now Playing' and see the magic happen!
