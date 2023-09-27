import './App.css'
import { Search, Home, Plus, Library, ArrowRight, ChevronDown } from 'lucide-react'
import icon from '../public/icon/music.svg'

function App() {

  return (
    <div className=' h-screen flex flex-col p-2'>
      <div className='flex flex-1 gap-2 mb-5'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <aside className='w-96 p-6 h-1/4 rounded-lg bg-aside'>
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
          <aside className='w-96 p-6 h-3/4 rounded-lg bg-aside'>
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
                className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >Playlists</a>
              <a href="#"
                className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >Artistas</a>
              <a href="#"
                className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >Álbuns</a>
              <a href="#"
                className='flex items-center justify-center whitespace-nowrap bg-zinc-900 p-3 rounded-full text-white text-xs font-medium hover:bg-zinc-800 duration-500' >Podcasts e programas</a>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <a href="#"
                className='flex items-center justify-center hover:bg-zinc-800 rounded-full duration-300 p-1'>
                <Search /></a>
              <a href="#"
                className='flex items-center justify-center text-sm font-semibold' >
                Recentes<ChevronDown /></a>
            </div>
            <div className=' h-52 flex flex-col flex-nowrap overflow-y-scroll gap-2'>
              <div className='flex items-center p-1 gap-1 rounded-lg hover:bg-zinc-800 cursor-pointer'>
                <img src={icon} className='w-14'/>
                <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-base'>Músicas Curtidas</h1>
                  <h3 className='text-sm font-semibold' >Playlist 147 músicas</h3>
                </div>
              </div>
              <div className='flex items-center p-1 gap-1 rounded-lg hover:bg-zinc-800 cursor-pointer'>
                <img src={icon} className='w-14'/>
                <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-base'>Músicas Curtidas</h1>
                  <h3 className='text-sm font-semibold' >Playlist 147 músicas</h3>
                </div>
              </div>
              <div className='flex items-center p-1 gap-1 rounded-lg hover:bg-zinc-800 cursor-pointer'>
                <img src={icon} className='w-14'/>
                <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-base'>Músicas Curtidas</h1>
                  <h3 className='text-sm font-semibold' >Playlist 147 músicas</h3>
                </div>
              </div>
              <div className='flex items-center p-1 gap-1 rounded-lg hover:bg-zinc-800 cursor-pointer'>
                <img src={icon} className='w-14'/>
                <div className='flex flex-col'>
                  <h1 className='text-white font-bold text-base'>Músicas Curtidas</h1>
                  <h3 className='text-sm font-semibold' >Playlist 147 músicas</h3>
                </div>
              </div>

            </div>
          </aside>
        </div>
        <main className='flex-1 p-6 rounded-lg bg-main'>MAIN</main>
      </div>
      <footer className='bg-footer p-6'>FOOTER</footer>
    </div>
  )
}

export default App
