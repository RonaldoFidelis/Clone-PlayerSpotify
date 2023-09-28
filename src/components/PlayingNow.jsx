const playing = [
  {
    img: 'img/joaogomes.jpg',
    name: 'Só você e Eu / Amado - Ao vivo',
    artist: 'João gomes, Vanessa Da mata',
  }
]

function PlayingNow() {

  return (
    <div>
      {playing.map((music, id) => {
        return (
          <div key={id} className="flex items-center flex-row gap-4">
            <img className="w-14 rounded-md" src={music.img} alt="playing" />
            <div className="flex flex-col gap-1">
              <h1 className="text-sm text-white font-semibold" >{music.name}s</h1>
              <p className="text-xs text-font">{music.artist}s</p>
            </div>
            <a href="#">
              <img className="w-5" src="icon/heart.svg" alt="" />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default PlayingNow
