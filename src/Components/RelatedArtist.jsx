const RelatedArtist = (props) => {
    const addRelatedArtistClickHandler = () => {
        props.onRelatedArtistClick(props.artist)
    }

    return (
        <div className="relatedartist" onClick={addRelatedArtistClickHandler}>
            <img
              src={props.artist.images[0].url}
              alt="relatedartist"
              height="100"
              width="100"
              className="relatedartistimage"
            />
            <div className="relatedartistname">{props.artist.name}</div>
          </div>
    )
}

export default RelatedArtist;