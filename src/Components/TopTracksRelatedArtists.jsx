import RelatedArtist from "./RelatedArtist";
import TopTrack from "./TopTrack";

const TopTracksRelatedArtists = (props) => {
  const addRelatedArtistClickHandler = (artist) => {
    props.onRelatedArtistClick(artist);
  };

  const addExitButtonClickHandler = () => {
    props.onExitButtonClick();
  };

  return (
    <div className="overviewtoptracksrelatedartists">
      <div className="overviewtitle">
        <div className="toptrackstitle">Top Tracks</div>
        <div className="relatedartiststitle">Related Artists</div>
      </div>
      <div className="toptracksrelatedartists">
        <div className="toptracks">
          {props.topTracks.map((track) => (
            <TopTrack track={track} key={track.id} />
          ))}
        </div>
        <div className="relatedartists">
          {props.relatedArtists.map((artist) => (
            <RelatedArtist
              artist={artist}
              key={artist.id}
              onRelatedArtistClick={addRelatedArtistClickHandler}
            />
          ))}
        </div>
      </div>
      <button className="overviewexit" onClick={addExitButtonClickHandler}>
        <div className="fa-sharp fa-solid fa-xmark">X</div>
      </button>
    </div>
  );
};

export default TopTracksRelatedArtists;
