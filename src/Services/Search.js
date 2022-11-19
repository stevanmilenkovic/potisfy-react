import oAuthToken from "../Misc";

export const submitFormData = (data, onSearchButtonClick) => {
    fetch(`https://api.spotify.com/v1/search?q=${data}&type=artist`, {
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json",
          'Authorization': `Bearer ${oAuthToken}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          onSearchButtonClick(
            data.artists.items.filter(
              (item) =>
                item.hasOwnProperty("images") &&
                item.images.length !== 0 &&
                item.hasOwnProperty("genres") &&
                item.hasOwnProperty("name") &&
                item.hasOwnProperty("followers")
            )
          );
        })
        .catch(err => alert(err));

}