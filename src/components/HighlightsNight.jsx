import Icon from '../../public/icon/music.svg'

const highlights = [
  {
    img: Icon,
    name: 'Ciência Sem fim'
  },
  {
    img: Icon,
    name: 'Nerd Cast'
  },
  {
    img: Icon,
    name: 'Rocketseat'
  },
  {
    img: Icon,
    name: 'Flow Podcast'
  },
  {
    img: Icon,
    name: 'Código Fonte TV'
  },
]

function HighlightsNight() {
  return (
    <section className='flex flex-col m-6'>
      <h1 className='text-3xl text-white font-bold mb-7'>Boa noite</h1>
      <div className='grid md:grid-cols-3 gap-2'>
        {highlights.map((programs, id) => {
          return (
            <div key={id} className='col-span-1 flex flex-row items-center rounded-lg bg-card hover:bg-zinc-700 duration-500 cursor-pointer'>
              <img className='w-20' src={programs.img} alt="img-programs" />
              <h2 className='text-white font-semibold whitespace-nowrap'>{programs.name}</h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HighlightsNight
