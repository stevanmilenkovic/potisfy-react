const oAuthToken = 'BQAxFa7OIewpQ5hE6mjLHtSISimJ7xAu_FtCGKxbTax9uP3udJ4pAtPe9sC4XuKixl1ye0Ge-4jxYUsmYlr_6pJYcFbvO0d6OqZYoH5j3Fx-JwRMyxBDiRokfx8zwr0zWXATl2hs0ZFxFZT8h1i4EayQgcNJI-TJZNriwAEB4SfjFdbhdQGGQWRUilsr0z1c6g8';
// get token at https://developer.spotify.com/console/get-search-item/

export const createNumberString = (num) => {
    let numString = num.toString();
    let followersString = '';
    let numPart = '';
    numString.forEach((string, i) => {
            numPart = string + numPart;
            if (numPart.length%3 === 0 && i !== 0) {
                followersString = ',' + numPart + followersString;
                numPart = '';
            };
    })
    followersString = numPart + followersString;
    return followersString;
};

export default oAuthToken;
 