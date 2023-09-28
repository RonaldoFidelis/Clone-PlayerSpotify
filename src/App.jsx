import './App.css'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {

  return (
    <div className='h-screen flex flex-col p-2'>
      <div className='flex flex-1 gap-2'>
        <Aside />
        <Main />
      </div>
      <Footer/>
    </div>
  )
}

export default App
