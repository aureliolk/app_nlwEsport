import axios from "axios";
import { createContext, useEffect, useState } from "react";


interface ContextsProps {
    cards: Cards[]
    setReloadCards: (data:boolean)=>void
}

export const UseContexts = createContext({} as ContextsProps)



export interface Cards {
    id: string
    nameGame: string
    imgUrl: string
    _count: {
      Ads: number
    }
  }
  
export interface ChildrenProps {
    children: React.ReactNode
}


export const ContexsProvider = ({children}: ChildrenProps)=>{
    const [cards, setCards] = useState<Cards[]>([])
    const [reloadCard, setReloadCards] = useState(false)


    useEffect(() => {
      axios.get("https://api-nlwesports.vercel.app/games")
      .then(res => {
        return setCards(res.data)
      })
    
    },[reloadCard])
    
    return(
        <UseContexts.Provider value={{cards,setReloadCards}}>
            {children}
        </UseContexts.Provider>
    )
}