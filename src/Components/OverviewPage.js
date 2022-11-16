import ArtistInfo from "./ArtistInfo";
import TopTracksRelatedArtists from "./TopTracksRelatedArtists";

const OverviewPage = (props) => {
  const addRelatedArtistClickHandler = (artist) => {
    props.onRelatedArtistClick(artist);
  };

  const addExitButtonClickHandler = () => {
    props.onExitButtonClick();
  };

  return (
    <div className="overviewpage">
      <ArtistInfo artist={props.artist} />
      <TopTracksRelatedArtists
        artist={props.artist}
        topTracks={props.topTracks}
        relatedArtists={props.relatedArtists}
        onRelatedArtistClick={addRelatedArtistClickHandler}
        onExitButtonClick={addExitButtonClickHandler}
      />
    </div>
  );
};

export default OverviewPage;
