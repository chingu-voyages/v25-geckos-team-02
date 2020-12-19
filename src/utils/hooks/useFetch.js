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
  const [contextURI, setContextURI] = useState();
  const [trackUri, setTrackUri] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState();
  const [deviceId, setDeviceId] = useState();

  // console.log(isActive);

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
        const recentPlayed = shuffleSongs.slice(10, 15);
        console.log(recentPlayed[0].track.uri);
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
        console.log(response.tracks);
        setRecommendations(response.tracks);
      })
      .catch((err) => console.log(err));
  };

  const getSearchItem = () => {
    let url;

    if (q) {
      url = `https://api.spotify.com/v1/search?q=${q}&type=${select}`;
    }

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
          setTrackResults(data.tracks.items);
          setArtistResults(null);
        }
        if (data.artists) {
          setArtistResults(data.artists.items);
          setTrackResults(null);
        }
      })
      .catch((err) => console.log(err));
  };

  const setPlayback = () => {
    let url;

    if (contextURI) {
      const startPlayback = async () => {
        if (deviceId) {
          url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
        } else {
          url = "https://api.spotify.com/v1/me/player/play";
        }

        console.log(trackUri);
        console.log(contextURI);
        // console.log(isPlaying);

        const reqUri = {
          context_uri: contextURI,
          offset: { uri: trackUri },
        };

        const response = await fetch(url, {
          method: "PUT",
          headers: { Authorization: "Bearer " + accessToken },
          body: contextURI && JSON.stringify(reqUri),
        });

        if (response.status !== 204) {
          throw new Error("cannot change data");
        }
      };

      startPlayback().then(() => setIsPlaying(true));
    }
  };

  const pausePlayback = () => {
    const url = "https://api.spotify.com/v1/me/player/pause";

    const setPause = async () => {
      const response = await fetch(url, {
        method: "PUT",
        headers: { Authorization: "Bearer " + accessToken },
      });

      if (response.status !== 204) {
        throw new Error("cannot change data");
      }
    };

    setPause().then(() => {
      setContextURI(null);
      setIsPlaying(false);
    });
  };

  const getCurrentPlayback = () => {
    const getPlaybackData = async () => {
      const response = await fetch("https://api.spotify.com/v1/me/player", {
        headers: { Authorization: "Bearer " + accessToken },
      });

      const data = response.json();

      return data;
    };

    getPlaybackData().then((data) => {
      console.log(data);
      setIsPlaying(data.is_playing);
      setTrackUri(data.item.uri);
    });
  };

  const getPlaybackDevice = () => {
    fetch("https://api.spotify.com/v1/me/player/devices", {
      headers: { Authorization: "Bearer " + accessToken },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.devices);
        const devices = response.devices;
        const device = devices[0];
        setDeviceId(device.id);
        setIsActive(device.is_active);
      });
  };

  const transferPlayback = () => {
    const url = "https://api.spotify.com/v1/me/player";
    const data = {
      device_ids: [`${deviceId}`],
    };

    fetch(url, {
      method: "PUT",
      headers: { Authorization: "Bearer " + accessToken },
      body: JSON.stringify(data),
    });
  };

  useEffect(getUserDetails, [accessToken]);
  useEffect(getRecentlyPlayed, [accessToken]);

  useEffect(() => {
    getCurrentPlayback();
  }, [isPlaying]);

  useEffect(() => {
    if (deviceId) {
      transferPlayback();
    }
  }, []);

  useEffect(() => {
    if (artistId && songId) {
      getRecommendations();
    }
  }, [artistId, songId]);

  useEffect(() => {
    if (contextURI) {
      setPlayback();
    }
    if (contextURI === null) {
      setPlayback();
    }
  }, [contextURI]);

  useEffect(() => {
    getPlaybackDevice();
  }, []);

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
    contextURI,
    setContextURI,
    trackUri,
    setTrackUri,
    setPlayback,
    isPlaying,
    setIsPlaying,
    isActive,
    pausePlayback,
  };
};

export default useFetch;
