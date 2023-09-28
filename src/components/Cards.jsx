function Cards({ id, img, name, desc }) {

  return (
    <div key={id} className="flex flex-col justify-center rounded-lg bg-card py-5 px-4 hover:bg-zinc-700 duration-500 cursor-pointer">
      <img className="w-44 rounded-md shadow-caps" src={img} alt="ft" />
      <h2 className="text-base text-white font-semibold mt-2 text-left">{name}</h2>
      <p className="text-font text-sm font-semibold mt-2 mb-3">{desc}</p>
    </div>
  )
}

export default Cards
