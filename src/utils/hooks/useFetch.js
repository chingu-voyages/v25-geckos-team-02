import queryString from "query-string";
import { useState, useEffect } from "react";
import shuffleArray from "../functions/shuffleArray";

const parsed = queryString.parse(location.search);
let accessToken = parsed.access_token;

const useFetch = () => {
  const [username, setUserName] = useState();
  const [authToken, setAuthToken] = useState();
  const [artistId, setArtistId] = useState();
  const [songId, setSongId] = useState();
  const [recentlyPlayed, setRecentlyPlayed] = useState();
  const [recommendations, setRecommendations] = useState([]);
  const [q, setQ] = useState();
  const [select, setSelect] = useState("artist");
  const [trackResults, setTrackResults] = useState();
  const [artistResults, setArtistResults] = useState();

  // console.log(q);

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
        const shuffleSongs = shuffleArray(response.items);
        // console.log("normal array", response.items);
        console.log("shuffled array", shuffleSongs);
        const recentPlayed = shuffleSongs.slice(0, 5);
        setRecentlyPlayed(recentPlayed);
        setSongId(recentPlayed.slice(0, 2).map((song) => song.track.id));
        setArtistId(
          recentPlayed.slice(0, 2).map((song) => song.track.artists[0].id)
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
      })
      .catch((err) => console.log(err));
  };

  const getSearchItem = () => {
    console.log("getSearchItem is here");

    // const { select, q } = query;

    let url;

    if (q) {
      url = `https://api.spotify.com/v1/search?q=${q}&type=${select}`;
      console.log(url);
    }

    // if (select === "track") {
    //   url = `https://api.spotify.com/v1/search?q=${q}&type=${select}`;
    //   console.log(url);
    // }

    // if (select === "artist") {
    //   url = `https://api.spotify.com/v1/search?q=${q}&type=${select}`;
    //   console.log(url);
    // }

    const getItems = async () => {
      const response = await fetch(url, {
        headers: { Authorization: "Bearer " + accessToken },
      });

      if (response.status !== 200) {
        throw new Error("cannot fetch data");
      }

      const data = response.json();

      return data;
    };

    getItems()
      .then((data) => {
        // setSearchResults(data);
        if (data.tracks) {
          console.log(data.tracks.items);
          setTrackResults(data.tracks.items);
          setArtistResults(null);
        }
        if (data.artists) {
          console.log(data.artists.items, "getsearch");
          setArtistResults(data.artists.items);
          setTrackResults(null);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(getUserDetails, [accessToken]);
  useEffect(getRecentlyPlayed, [accessToken]);
  useEffect(getRecommendations, [artistId && songId]);
  // useEffect(() => {
  //   if (q) {
  //     getSearchItem();
  //   }
  // }, [q]);
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
    q,
    setQ,
    select,
    setSelect,
  };
};

export default useFetch;
