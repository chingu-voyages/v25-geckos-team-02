import queryString from "query-string";
import { useState, useEffect } from 'react';

const parsed = queryString.parse(location.search);
let accessToken = parsed.access_token;

const useFetch = () => {

  const getUserDetails = () => {
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.display_name)
      })
      .catch((err) => console.log(err));
  };

  const getRecentlyPlayed = () => {
    fetch("https://api.spotify.com/v1/me/player/recently-played", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        const recent_songs = console.log(response.items.slice(0, 5))
      })
      .catch((err) => console.log(err));
  };

  const getRecommendations = () => {
    fetch("https://api.spotify.com/v1/recommendations", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect (getUserDetails, []);
  useEffect (getRecentlyPlayed, []);

  return { getUserDetails, getRecentlyPlayed, getRecommendations };
};

export default useFetch


