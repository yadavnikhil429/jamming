

const clientId = '7d79446e8b4344709d4e2e5b135a9da5';
const redirectUri = 'http://localhost:3000/';
let accessToken;

const spotify = {

    getAccessToken() {
        if (accessToken) { 
            return accessToken;
        }
    

// extract access token from URL
  const tokenUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if(tokenUrl && expiryTime ) {
        accessToken = tokenUrl[1]; // extract access token
    const expiresIn = Number(expiryTime[1]); // extract expiry time


    // setting the access to expire at the value for expiration time
    window.setTimeout(() => accessToken = '', expiresIn * 1000); 
    // clear access token after expiry time
    window.history.pushState('Access Token', null, '/');

    return accessToken;
     } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
    }
},

     
async search(term){

       const accessToken = spotify.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        const jsonResponse = await response.json();
           if(!jsonResponse.tracks){
                return [];
            }

            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));    
    },


   
 async savePlaylist(playlistName, trackUris){
            if(!playlistName || !trackUris){
                return;
            }

        const accessToken = spotify.getAccessToken();
        const header = { Authorization: `Bearer ${accessToken}`};
       
        const response = await fetch('https://api.spotify.com/v1/me', 
        {headers: header });
        const jsonResponse = await response.json();
       let  userId = jsonResponse.id;

       
        const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'post',
            headers: header,
            body: JSON.stringify({name: playlistName})
        });
        const playlistJson = await playlistResponse.json();
       let  playlistId = playlistJson.id;

        const postResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            headers: header,
            method: 'POST',
            body: JSON.stringify({uris: trackUris})
          });

        return postResponse;
    }
};

 export default spotify;     