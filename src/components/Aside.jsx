import Icon from '../../public/icon/music.svg'
import {Home, Search, Library, Plus, ChevronDown, ArrowRight} from 'lucide-react'

const musics = [
  { name: 'Músicas Curtidas',
    icon: Icon,
    playlist: 'Favoritas',
  },{
    name: 'Funks Hits',
    icon: Icon,
    playlist: 'Hits',
  },{
    name: 'MPB',
    icon: Icon,
    playlist: 'mais tocadas',
  },{
    name: 'Frank Sinatra',
    icon: Icon,
    playlist: 'Artista',
  },{
    name: 'Lil Whind',
    icon: Icon,
    playlist: 'Artista',
  }]

function Aside() {

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <aside className='w-96 p-6 h-1/5 flex items-center rounded-lg bg-aside'>
        <div className='flex flex-col gap-6'>

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

      <aside className='w-96 p-6 h-4/5 rounded-lg bg-aside'>

        <div className='flex items-center justify-between'>
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

        <div className='flex flex-row flex-nowrap gap-3 overflow-x-scroll m-2 p-1'>
          <a href="#"
            className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
            Playlists</a>
          <a href="#"
            className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
            Artistas</a>
          <a href="#"
            className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
            Álbuns</a>
          <a href="#"
            className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >
            Podcasts e programas</a>
        </div>

        <div className='flex justify-between items-center mb-2'>
          <a href="#"
            className='flex items-center justify-center hover:bg-zinc-800 rounded-full duration-300 p-1'>
            <Search /></a>
          <a href="#"
            className='flex items-center justify-center text-sm font-semibold' >
            Recentes<ChevronDown /></a>
        </div>

        <nav className='h-64 flex flex-col flex-nowrap overflow-y-hidden hover:overflow-y-scroll gap-2'>
          {musics.map((musica, id) => {
            return (
              <div key={id} className='flex items-center p-1 gap-1 rounded-lg cursor-pointer hover:bg-zinc-800'>
                <img src={musica.icon} className='w-14' alt="music" />
                <div className='flex flex-col'>
                  <h1 className='text-base font-bold text-white'>{musica.name}</h1>
                  <h3 className='text-sm font-semibold' >Playlist {musica.playlist}</h3>
                </div>
              </div>
            )
          })}
        </nav>
      </aside>
    </div>
  )
}

export default Aside
