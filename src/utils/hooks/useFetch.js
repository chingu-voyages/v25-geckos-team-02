import queryString from "query-string";
import { useState, useEffect } from "react";

const parsed = queryString.parse(location.search);
let accessToken = parsed.access_token;

const useFetch = () => {
  const [username, setUserName] = useState();
  const [authToken, setAuthToken] = useState();
  const [artistId, setArtistId] = useState();
  const [songId, setSongId] = useState();
  const [recentlyPlayed, setRecentlyPlayed] = useState();
  const [recommendations, setRecommendations] = useState([]);
  const [trackResults, setTrackResults] = useState();
  const [artistResults, setArtistResults] = useState();

  const getUserDetails = () => {
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        setUserName(response.display_name);
      })
      .catch((err) => console.log(err));
  };

  const getRecentlyPlayed = () => {
    fetch("https://api.spotify.com/v1/me/player/recently-played", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        const recentSongs = response.items.slice(0, 5);
        console.log(recentSongs);
        setRecentlyPlayed(recentSongs);
        setSongId(recentSongs.slice(0, 2).map((song) => song.track.id));
        setArtistId(
          recentSongs.slice(0, 2).map((song) => song.track.artists[0].id)
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
        setRecommendations(response.tracks);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const getSearchItem = (query) => {
    console.log("getSearchItem is here");

    // destructured variables being set to query so we can change them later
    const { select, q } = query;
    // making url available in this scope so if statements can change the value & fetch function can access those changed values
    let url;

    //conditional logic that decides which url to fire off depending on which value we have
    if (select === "track") {
      url = `https://api.spotify.com/v1/search?q=${q}&type=${select}`;
    }

    if (select === "artist") {
      url = `https://api.spotify.com/v1/search?q=${q}&type=${select}`;
    }

    fetch(url, {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //setSearchResults(response);
        if (response.tracks) {
          console.log("tracks!!!");
          setTrackResults(response.tracks.items);
        }
        if (response.artists) {
          console.log("artists!!!");
          setArtistResults(response.artists.items);
        }
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
    getSearchItem,
    recentlyPlayed,
    recommendations,
    username,
    authToken,
    setAuthToken,
    trackResults,
    artistResults,
  };
};

export default useFetch;
