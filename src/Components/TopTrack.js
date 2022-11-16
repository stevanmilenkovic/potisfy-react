const TopTrack = (props) => {
  return (
    <div className="toptrack">
      <div className="toptrackname">{props.track.name}</div>
      <div className="toptrackalbum">{props.track.album.name}</div>
    </div>
  );
};

export default TopTrack;
