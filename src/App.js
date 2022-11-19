import { useState } from "react";
import "./App.css";
import ArtistContainer from "./Components/ArtistContainer";
import SearchBar from "./Components/SearchBar";
import OverviewPage from "./Components/OverviewPage";
import oAuthToken from "./Misc";

const App = () => {
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [overviewArtist, setOverviewArtist] = useState("");
  const [inOverview, setInOverview] = useState(false);
  const [topTracks, setTopTracks] = useState([]);
  const [relatedArtists, setRelatedArtists] = useState([]);

  const addSearchHandler = (filtArtists) => {
    setFilteredArtists(filtArtists);
    setInOverview(false);
  };

  const addArtistClickInfoHandler = (artist) => {
    setOverviewArtist(artist);
    setInOverview(true);
  };

  const addArtistClickTopTracksHandler = (toptracks) => {
    setTopTracks(toptracks.tracks.slice(0, 5));
  };

  const addArtistClickRelatedArtistsHandler = (relatedartists) => {
    setRelatedArtists(relatedartists.artists.slice(0, 4));
  };

  const addRelatedArtistClickHandler = (artist) => {
    setOverviewArtist(artist);
    fetch(
      `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${oAuthToken}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTopTracks(data.tracks.slice(0, 5));
      })
      .catch(err => alert(err));
    fetch(`https://api.spotify.com/v1/artists/${artist.id}/related-artists`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${oAuthToken}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setRelatedArtists(data.artists.slice(0, 4));
      });
  };

  const addExitButtonClickHandler = () => {
    setInOverview(false);
  }

  return (
    <>
      <SearchBar onSearchButtonClick={addSearchHandler} />
      {!filteredArtists.length || inOverview === true ? (
        <></>
      ) : (
        <ArtistContainer
          artists={filteredArtists}
          onArtistClickInfo={addArtistClickInfoHandler}
          onArtistClickTopTracks={addArtistClickTopTracksHandler}
          onArtistClickRelatedArtists={addArtistClickRelatedArtistsHandler}
        />
      )}
      {inOverview ? (
        <OverviewPage
          artist={overviewArtist}
          topTracks={topTracks}
          relatedArtists={relatedArtists}
          onRelatedArtistClick={addRelatedArtistClickHandler}
          onExitButtonClick={addExitButtonClickHandler}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
