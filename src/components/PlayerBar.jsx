import {SkipForward,SkipBack,Shuffle,Repeat } from 'lucide-react';

function PlayerBar() {

  return(
    <div className='flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center gap-5'>
        <a href="#"><Shuffle className='w-5 text-font hover:text-white duration-500'/></a>
        <a href="#"><SkipBack className='w-5 text-font hover:text-white duration-500'/></a>
        <a className='flex items-center justify-center' href="#"><img src='icon/play.svg' className='w-8'/></a>
        <a href="#"><SkipForward className='w-5 text-font hover:text-white duration-500'/></a>
        <a href="#"><Repeat className='w-5 text-font hover:text-white duration-500'/></a>
      </div>
      <div className='mt-2 flex flex-row items-center justify-center gap-2'>
        <p className='text-xs text-font font-normal'>0:02</p>
        <input type="range" className="w-playerBar h-1 cursor-pointer" />
        <p className='text-xs text-font font-normal'>3:20</p>
      </div>
    </div>
  )
}

export default PlayerBar
