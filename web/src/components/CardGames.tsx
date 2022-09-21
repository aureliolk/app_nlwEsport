import { GamesModal } from "./GamesModal"

interface Games{
    id: string
    nameGame: string
    imgUrl: string
    ads: number
}

export const CardGames = (props: Games)=>{
    return (
        <GamesModal id={props.id} nameGame={props.nameGame} >
          <div key={props.id} className=" w-full text-center relative group cursor-pointer hover:animate-up-cards " >
          
          <img className="w-full object-cover" src={props.imgUrl} alt={props.nameGame} />
          <div className="w-full rounded-tl flex items-start flex-col absolute bottom-0 px-2 pb-8 pt-2 left-0 bg-gradient-to-t from-gray-900 to-gray-900/50 overflow-hidden group-hover:underline">
            <strong>{props.nameGame}</strong>
            <div className="font-light text-sm  absolute bottom-[-22px] group-hover:animate-up-ads">{props.ads} Anucios</div>
          </div>
        </div>
        </GamesModal>
      )
}

