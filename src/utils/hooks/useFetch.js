import queryString from "query-string";
import { useState, useEffect } from "react";

const parsed = queryString.parse(location.search);
let accessToken = parsed.access_token;

const useFetch = () => {
  const [authToken, setAuthToken] = useState();
  const [artistId, setArtistId] = useState();
  const [songId, setSongId] = useState();
  const [recommendations, setRecommendations] = useState();

  console.log(songId, "song ids");
  console.log(artistId, "artist ids");

  const getUserDetails = () => {
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response.display_name);
      })
      .catch((err) => console.log(err));
  };

  const getRecentlyPlayed = () => {
    fetch("https://api.spotify.com/v1/me/player/recently-played", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        const recent_songs = response.items.slice(0, 5);
        setSongId(recent_songs.slice(0, 2).map((song) => song.track.id));
        setArtistId(
          recent_songs.slice(0, 2).map((song) => song.track.artists[0].id)
        );
      })
      .catch((err) => console.log(err));
  };

  const getRecommendations = () => {
    fetch(
      `https://api.spotify.com/v1/recommendations?limit=5&seed_artists=${artistId}&seed_tracks=${songId}`,
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRecommendations(response.tracks);
      })
      .catch((err) => console.log(err));
  };

  const getSearchitem = () => {
    fetch(`https://api.spotify.com/v1/search?`, {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  useEffect(getUserDetails, [accessToken]);
  useEffect(getRecentlyPlayed, [accessToken]);
  useEffect(getRecommendations, [artistId && songId]);
  useEffect(() => {
    setAuthToken(accessToken);
  }, [accessToken]);

  return {
    getUserDetails,
    getRecentlyPlayed,
    getRecommendations,
    getSearchitem,
    recommendations,
    authToken,
    setAuthToken,
  };
};

export default useFetch;
