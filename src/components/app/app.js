import React, { useState } from 'react';
import './app.css';
import Playlist from '../playlist/playlist';
import Searchbar from '../searchbar/searchbar';
import Searchresult from '../searchresult/searchresults';
import spotify from '../../util/spotify';



function App() {
    const [searchResults, setSearchResults] = useState([
        /*  {
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
            } */
    ]);

    const [playlistName, setPlaylistName] = useState('My Playlist');
    const [playlistTracks, setPlaylistTracks] = useState([
        /*  {
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
           }  */
        ]);

    const search = async (term) => {
        const result = await spotify.search(term);
        setSearchResults(result);
        console.log(term);
    }

    const addTrack = (track) => {
        if (playlistTracks.some((t) => track.id === t.id)) {
            return;
        } else {
            setPlaylistTracks((prevTracks) => [...prevTracks, track]);
        }
    };

    const removeTrack = (track) => {
        setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
    };

    const updatePlaylistName = (name) => {
        setPlaylistName(name);
    };

    const savePlaylist = async () => {
        const trackUris = playlistTracks.map((track) => track.uri);

        await spotify.savePlaylist(playlistName, trackUris);
        updatePlaylistName('New Playlist');
        setPlaylistTracks([]);
    }

    return (
        <div>
            <h1>Ja<span className='highlight'>mmm</span>ing</h1>

            <div className='App'>
                <Searchbar
                    onSearch={search}
                />

                <div className="App-playlist">
                    <Searchresult
                        x={searchResults}
                        onAdd={addTrack}
                    />

                    <Playlist
                        onNameChange={updatePlaylistName}
                        m={playlistTracks}
                        onRemove={removeTrack}
                        onSave={savePlaylist}
                    />

                </div>
            </div>
        </div>
    );
}

export default App;
