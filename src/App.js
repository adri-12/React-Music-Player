import { useState } from "react";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
//Import Util
import data from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;
