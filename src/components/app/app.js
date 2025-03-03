import React, {useState, useCallback} from 'react';
import './app.css';
import Playlist from '../playlist/playlist';
import Searchbar from '../searchbar/searchbar'; 
import Searchresult from '../searchresult/searchresults';



function App() {
const [searchResults, setSearchResults] = useState([
     {
        name: 'Landed In Brooklyn',
        artist: 'Khantrast',
        album: 'Landed In Brooklyn',
        id: 1
        },
       {
         name: 'The Largest',
         artist: 'BigXthaPlug',
         album: 'TAKE CARE',
          id: 2
        } 
    ]);

const [playlistName, setPlaylistName] = useState('My Playlist');
const [playlistTracks, setPlaylistTracks] = useState(
    [
     {
     name: 'Mutt',
     artist: 'Leon Thomas',
     album: 'Mutt',
     id: 3
      },
    {
     name: 'On My Mama',
     artist: 'Victoria Monét',
     album: 'On My Mama',
     id: 4
    }
]);

    const addTrack = (track)=>{
        if(playlistTracks.find(t=> track.id === t.id)){
            return;
        }else{
            setPlaylistTracks([...playlistTracks, track]);
        }
    };
    


  return (
    <div>
      <h1>Ja<span className='highlight'>mmm</span>ing</h1>

    <div className='App'>
        <Searchbar />

        <div className="App-playlist">
        <Searchresult 
        x={searchResults} 
        onAdd={addTrack} 
        />
    
        <Playlist 
        a={playlistName} 
        m={playlistTracks}
        />
        
    </div>
    </div>
    </div>
  );
}

export default App;
