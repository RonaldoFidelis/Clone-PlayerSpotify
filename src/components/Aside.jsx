import Icon from '../../public/icon/music.svg'
import { Home, Search, Library, Plus, ChevronDown, ArrowRight } from 'lucide-react'

const musics = [
  {
    name: 'Músicas Curtidas',
    icon: Icon,
    playlist: 'Favoritas',
  }, {
    name: 'Funks Hits',
    icon: Icon,
    playlist: 'Hits',
  }, {
    name: 'MPB',
    icon: Icon,
    playlist: 'mais tocadas',
  }, {
    name: 'Frank Sinatra',
    icon: Icon,
    playlist: 'Artista',
  }, {
    name: 'Lil Whind',
    icon: Icon,
    playlist: 'Artista',
  }]

function Aside() {

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <aside className='w-96 p-2 h-1/5 flex items-center rounded-lg bg-aside'>
        <div className='m-4 flex flex-col gap-6'>

          <a href="#"
            className='flex flex-row items-center gap-5 text-base font-bold hover:text-white duration-500'>
            <Home />
            Início
          </a>

          <a href="#"
            className='flex flex-row items-center gap-5 text-base font-bold hover:text-white duration-500'>
            <Search />
            Buscar
          </a>

        </div>
      </aside>

      <aside className='w-96 h-4/5 rounded-lg bg-aside p-2'>
        <div className='flex flex-col justify-center shadow-md'>
          <div className='flex items-center justify-between m-4'>
            <a href="#"
              className='flex flex-row items-center gap-2 text-base font-bold hover:text-white duration-500'>
              <Library />
              Sua Biblioteca
            </a>

            <div className='flex gap-1 items-center justify-center'>

              <a href="#"
                className='hover:bg-zinc-800 rounded-full duration-300 p-1'>
                <Plus />
              </a>

              <a href="#"
                className='hover:bg-zinc-800 rounded-full duration-300 p-1'>
                <ArrowRight />
              </a>
            </div>
          </div>
          <div className='flex flex-nowrap items-center mx-4 mb-2 gap-1 overflow-x-hidden max-w-screen-lg'>
            <a href="#"
              className='flex items-center whitespace-nowrap bg-zinc-900 p-2 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
              Playlists</a>
            <a href="#"
              className='flex items-center whitespace-nowrap bg-zinc-900 p-2 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
              Artistas</a>
            <a href="#"
              className='flex items-center whitespace-nowrap bg-zinc-900 p-2 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
              Álbuns</a>
            <a href="#"
              className='flex items-center whitespace-nowrap bg-zinc-900 p-2 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
              Podcasts e programas</a>
          </div>
          <div className='flex items-center justify-between mx-4 mb-2 '>
            <a href="#"
              className='flex items-center hover:bg-zinc-800 rounded-full duration-300 p-1'>
              <Search /></a>
            <a href="#"
              className='flex items-center text-sm font-semibold'>
              Recentes<ChevronDown/></a>
          </div>
        </div>

        <div className='h-72 max-w-screen-lg flex flex-col overflow-y-hidden hover:overflow-y-scroll gap-2'>


          {musics.map((musica, id) => {
            return (
              <div key={id} className='flex items-center p-1 gap-1 rounded-lg cursor-pointer hover:bg-zinc-800 mx-4'>
                <img src={musica.icon} className='w-14' alt="music" />
                <div className='flex flex-col'>
                  <h1 className='text-base font-bold text-white'>{musica.name}</h1>
                  <h3 className='text-sm font-semibold' >Playlist {musica.playlist}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Aside
