import { ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import iconUser from '../../public/icon/user.svg'
import HighlightsNight from './HighlightsNight';

function Main() {

  return (
    <main className="flex flex-col flex-1 p-6 rounded-lg bg-main">
      <header className='mb-5'>
        <nav className='sticky top-0 min-w-full'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center gap-5'>
              <a href="#" className='flex items-center justify-center bg-card rounded-full p-1 mx-auto'><ChevronLeft /></a>
              <a href="#" className='flex items-center justify-center bg-card rounded-full p-1 mx-auto'><ChevronRight /></a>
            </div>
            <div className='flex items-center justify-center flex-row gap-2'>
              <a href="#" className='flex items-center justify-center overflow-hidden text-xs px-3 py-2 font-bold bg-white text-black rounded-full'>Ver planos Premium</a>
              <a href="#" className='flex items-center justify-center overflow-hidden text-xs px-3 py-2 font-bold bg-card text-white rounded-full gap-2'>Instalar aplicativo</a>
              <a href="#" className='flex items-center justify-center overflow-hidden bg-card text-white rounded-full p-2'><Bell className='w-4 h-4' /></a>
              <a href="#" className='flex items-center justify-center overflow-hidden bg-white text-white rounded-full p-1'>
                <img className='w-6' src={iconUser} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className='h-main-card overflow-y-scroll'>
        <HighlightsNight />
      </div>
    </main>
  )
}

export default Main
