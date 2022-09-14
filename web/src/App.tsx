import {MagnifyingGlassPlus} from "phosphor-react"

const App = ()=>{
  const card = [
    {
      img:"/leagueoflegends.png",
      game: "League of Legends",
      ads: 4
    },{
      img:"/apex.png",
      game: "Apex",
      ads: 4
    },{
      img:"/cs.png",
      game: "Counter Strike",
      ads: 4
    },{
      img:"/warcraft.png",
      game: "Word of Warcraft",
      ads: 4
    },{
      img:"/dota.png",
      game: "Dota 2",
      ads: 4
    },{
      img:"/fortnite.png",
      game: "Fortnite",
      ads: 4
    }
  ]

  console.log(card)

  return (
    <div className="bg-galaxy bg-no-repeat bg-cover flex flex-col items-center py-20">
      <img src="./logo.svg" alt="Logo Svg" className="w-72" />
      <h1 className="text-6xl font-extrabold my-20">Seu <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-500 to-yellow-500">Duo</span> está Aqui</h1>
      <div className="flex w-11/12 justify-between gap-x-5">
        {card.map((item,i)=>{
          return (
            <div key={i} className=" w-full text-center relative" >
              <img className="w-full object-cover" src={item.img} alt={item.game} />
              <div className="w-full rounded-tl flex items-start flex-col py-5 px-2 absolute bottom-0 left-0 bg-gradient-to-t from-gray-900 to-gray-900/50">
                <strong>{item.game}</strong>
                <span className="font-light text-sm">{item.ads} Anucios</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className="w-11/12 mt-20 flex justify-between  items-center border-t-2 rounded border-green-500 p-5 bg-[#2A2634]">
        <div>
          <h2 className="font-black text-[24px]">Não encontrou seu duo?</h2>
          <span className="font-light text-base">Publique um anúncio para encontrar novos players!</span>
        </div>
        <button className="flex items-center h-7 p-5 rounded bg-violet-500 font-medium gap-x-2" >
          <MagnifyingGlassPlus/> Publicar Anúncio
        </button>
      </div>
    </div>
  )
}



export default App