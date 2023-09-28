import { ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import iconUser from '../../public/icon/user.svg'
import HighlightsNight from './HighlightsNight';

function Main() {

  return (
    <main className="flex flex-col flex-1 rounded-lg bg-main px-3 py-0">
      <nav className='sticky top-0 min-w-full shadow-md py-2'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center gap-5'>
              <a href="#" className='flex items-center justify-center hover:bg-card duration-500 rounded-full p-1 mx-auto'><ChevronLeft /></a>
              <a href="#" className='flex items-center justify-center hover:bg-card duration-500 rounded-full p-1 mx-auto'><ChevronRight /></a>
            </div>
            <div className='flex items-center justify-center flex-row gap-2 mb-2'>
              <a href="#" className='flex items-center justify-center overflow-hidden text-xs px-3 py-2 font-bold bg-white text-black rounded-full mb-2'>Ver planos Premium</a>
              <a href="#" className='flex items-center justify-center overflow-hidden text-xs px-3 py-2 font-bold bg-card text-white rounded-full gap-2 mb-2'>Instalar aplicativo</a>
              <a href="#" className='flex items-center justify-center overflow-hidden bg-card text-white rounded-full p-2 mb-2'><Bell className='w-4 h-4' /></a>
              <a href="#" className='flex items-center justify-center overflow-hidden bg-white text-white rounded-full p-1 mb-2'>
                <img className='w-6' src={iconUser} alt="" />
              </a>
            </div>
          </div>
        </nav>
      <div className='h-main-card max-w-screen-lg overflow-y-hidden hover:overflow-y-scroll'>
        <HighlightsNight />

      </div>
    </main>
  )
}

export default Main
