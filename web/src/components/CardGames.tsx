interface Games{
    id: string
    nameGame: string
    imgUrl: string
    ads: number
}

export const CardGames = (props: Games)=>{
    return (
        <div key={props.id} className=" w-full text-center relative" >
          
          <img className="w-full object-cover" src={props.imgUrl} alt={props.nameGame} />
          <div className="w-full rounded-tl flex items-start flex-col py-5 px-2 absolute bottom-0 left-0 bg-gradient-to-t from-gray-900 to-gray-900/50">
            <strong>{props.nameGame}</strong>
            <span className="font-light text-sm">{props.ads} Anucios</span>
          </div>
        </div>
      )
}

