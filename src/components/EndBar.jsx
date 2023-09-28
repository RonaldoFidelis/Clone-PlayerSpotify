import { Mic2, Volume1, PlaySquare, PictureInPicture, ListMusic, MonitorSpeaker } from 'lucide-react'

function EndBar() {

  return (
    <div className='flex items-center gap-3 justify-center mt-3 mb-3'>
      <a href="#"><PlaySquare className='w-5 text-font' /></a>
      <a href="#"><Mic2 className='w-4 text-font' /></a>
      <a href="#"><ListMusic className='w-5 text-font' /></a>
      <a href="#"><MonitorSpeaker className='w-5 text-font' /></a>
      <div className='flex items-center justify-center' href="#">
        <Volume1 className='w-6 mx-1' />
        <input type="range" className="w-20 h-1 cursor-pointer" />
        </div>
      <a href="#"><PictureInPicture className='w-5' /></a>
    </div>
  )
}

export default EndBar
