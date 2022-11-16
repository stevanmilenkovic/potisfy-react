import ArtistDiv from "./ArtistDiv";

const ArtistContainer = (props) => {
  const addArtistClickInfoHandler = (artist) => {
    props.onArtistClickInfo(artist);
  };

  const addArtistClickTopTracksHandler = (topTracks) => {
    props.onArtistClickTopTracks(topTracks);
  }

  const addArtistClickRelatedArtistsHandler = (relatedArtists) => {
    props.onArtistClickRelatedArtists(relatedArtists);
  }

  

  return (
    <div className="artistcontainer">
      {props.artists.map((artist) => (
        <ArtistDiv
          id={artist.id}
          key={artist.id}
          artist={artist}
          onArtistClickInfo={addArtistClickInfoHandler}
          onArtistClickTopTracks={addArtistClickTopTracksHandler}
          onArtistClickRelatedArtists={addArtistClickRelatedArtistsHandler}
        />
      ))}
    </div>
  );
};

export default ArtistContainer;
