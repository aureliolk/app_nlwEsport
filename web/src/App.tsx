
import { useContext } from "react";
import { SectionAds } from "./components/SectionAds"
import { CardGames } from "./components/CardGames";
import { UseContexts } from "./contexts/UseContexts";



const App = () => {
  const {cards} = useContext(UseContexts)

  console.log(cards)
  
  return (
    <div className="bg-galaxy bg-no-repeat bg-cover flex flex-col items-center py-20">
      <img src="./logo.svg" alt="Logo Svg" className="w-72" />
      <h1 className="text-6xl font-extrabold my-20">Seu <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-500 to-yellow-500">Duo</span> está Aqui</h1>


      <div className="flex w-11/12 justify-between gap-x-5">
        {cards.map((item) => {
          return (
            <CardGames key={item.id} id={item.id} imgUrl={item.imgUrl} nameGame={item.nameGame} ads={item._count.Ads} />
          )
        })}
      </div>

      <SectionAds />
      
    </div>

  )
}


export default App