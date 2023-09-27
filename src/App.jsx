import './App.css'
import { Play, SkipForward, SkipBack, Shuffle, Repeat2 } from 'lucide-react'
import Aside from './components/Aside'


function App() {

  return (
    <div className=' h-screen flex flex-col p-2'>
      <div className='flex flex-1 gap-2 mb-5'>
        <Aside/>
        <main className='flex-1 p-6 rounded-lg bg-main'>MAIN</main>
      </div>
      <footer className='bg-footer p-6'>FOOTER</footer>
    </div>
  )
}

export default App
