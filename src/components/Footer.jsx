import EndBar from "./EndBar"
import PlayerBar from "./PlayerBar"
import PlayingNow from "./PlayingNow"

function Footer() {
  return (
    <footer className="bg-footer flex items-center justify-between px-2 py-2">
      <PlayingNow />
      <PlayerBar/>
      <EndBar/>
    </footer>
  )
}

export default Footer
