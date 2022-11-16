const oAuthToken = '';
// get token at https://developer.spotify.com/console/get-search-item/

export const createNumberString = (num) => {
    let numString = num.toString();
    let followersString = '';
    let numPart = '';
    for (let i=numString.length-1; i>=0; i--) {
            numPart = numString[i] + numPart;
            if (numPart.length%3 === 0 && i !== 0) {
                followersString = ',' + numPart + followersString;
                numPart = '';
            };
        };
    followersString = numPart + followersString;
    return followersString;
};

export default oAuthToken;
 