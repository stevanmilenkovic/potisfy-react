import { createNumberString } from "../Misc";

const ArtistInfo = (props) => {
  return (
    <>
      <img
        className="overviewphoto"
        src={props.artist.images[0].url}
        height="250"
        width="250"
        alt="IMINEMMM"
      />
      <div className="overviewname">
        <div className="overviewartistname">{props.artist.name}</div>
        <div className="overviewfollowers">
          <span className="overviewfollowersnumber">{createNumberString(props.artist.followers.total)}</span>
          followers
        </div>
      </div>
    </>
  );
};

export default ArtistInfo;
