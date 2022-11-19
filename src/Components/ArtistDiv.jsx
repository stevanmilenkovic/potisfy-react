import oAuthToken, { createNumberString } from "../Misc";

const ArtistDiv = (props) => {
  const artistClickHandler = () => {
    fetch(`https://api.spotify.com/v1/artists/${props.id}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${oAuthToken}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        props.onArtistClickInfo(data);
      });
    fetch(
      `https://api.spotify.com/v1/artists/${props.id}/top-tracks?market=US`,
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
        props.onArtistClickTopTracks(data);
      });
    fetch(
      `https://api.spotify.com/v1/artists/${props.id}/related-artists`,
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
        props.onArtistClickRelatedArtists(data);
      });
  };

  return (
    <div className="artistdiv" onClick={artistClickHandler}>
      <img
        className="artistimage"
        src={props.artist.images[0].url}
        height="160"
        width="160"
        alt=""
      />
      <div className="artistinfo">
        <div className="name">{props.artist.name}</div>
        <div className="genres">
          {props.artist.genres.slice(0, 3).join(", ")}
        </div>
        <div className="followers">
          <span className="followersnumber">
            {createNumberString(props.artist.followers.total)}
          </span>{" "}
          followers
        </div>
      </div>
    </div>
  );
};

export default ArtistDiv;
