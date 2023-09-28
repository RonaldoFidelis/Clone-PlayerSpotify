import './App.css'
import { Play, SkipForward, SkipBack, Shuffle, Repeat2 } from 'lucide-react'
import Aside from './components/Aside'
import Main from './components/Main'


function App() {

  return (
    <div className='h-screen flex flex-col p-2'>
      <div className='flex flex-1 gap-2 mb-2'>
        <Aside/>
        <Main />
      </div>
      <footer className='bg-footer p-6'>FOOTER</footer>
    </div>
  )
}

export default App
