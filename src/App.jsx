import DetailSong from "./components/DetailSong"
import ListSong from "./components/ListSong"
import Navbar from "./components/Navbar"
import Player from "./components/Player"

function App() {

  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-3 h-screen-navbar-player bg-slate-400">
        <DetailSong />
        <ListSong />
      </div>
      <Player />
    </div>
  )
}

export default App
