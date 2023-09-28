import capa from '../../public/img/Eminem.png'

const highlights = [
  {
    img: capa,
    name: 'Ciência Sem fim'
  },
  {
    img: capa,
    name: 'Nerd Cast'
  },
  {
    img: capa,
    name: 'Rocketseat'
  },
  {
    img: capa,
    name: 'Flow Podcast'
  },
  {
    img: capa,
    name: 'Código Fonte TV'
  },
]

function HighlightsNight() {
  return (
    <section className='flex flex-col p-1 mx-4 mb-6'>
      <h1 className='text-3xl text-white font-bold mb-7'>Boa noite</h1>
      <div className='flex flex-row flex-wrap gap-3'>
        {highlights.map((programs, id) => {
          return (
            <div key={id} className='flex flex-row gap-5 w-highlights items-center rounded-md bg-card hover:bg-zinc-700 duration-500 cursor-pointer'>
              <img className='w-20 rounded-l-md shadow-ft' src={programs.img} alt="img-programs" />
              <h2 className='text-white font-semibold whitespace-nowrap'>{programs.name}</h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HighlightsNight
