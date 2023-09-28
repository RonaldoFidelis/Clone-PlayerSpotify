import { ChevronLeft, ChevronRight, Bell } from 'lucide-react';
import capa from '../../public/img/Eminem.png';
import iconUser from '../../public/icon/user.svg'
import HighlightsNight from './HighlightsNight';
import Cards from './Cards';

const myPrograms = [
  {
    img: capa,
    name: 'Ciência Sem Fim',
    desc: 'Estúdios Flow'
  },
  {
    img: capa,
    name: 'PodPah',
    desc: 'Igão e Mitico'
  },
  {
    img: capa,
    name: 'Flow Podcast',
    desc: 'Estúdios Flow'
  },
  {
    img: capa,
    name: 'Space Today',
    desc: 'Sergio Sacani'
  },
]


function Main() {

  return (
    <main className="flex flex-col flex-1 rounded-lg bg-main px-2">
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
        <section className='flex flex-col p-1 mx-4 mb-6'>
        <h1 className='text-xl text-white font-bold mb-6'>Seus programas</h1>
          <div className='flex flex-row gap-6'>
            {myPrograms.map((item, id) => {
              return (<Cards
                key={id}
                img={item.img}
                name={item.name}
                desc={item.desc} />)
            })}</div>
        </section>
      </div>

    </main>
  )
}

export default Main
