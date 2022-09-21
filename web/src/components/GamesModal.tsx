import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { Spinner, User, X } from 'phosphor-react';
import { useEffect, useState } from 'react';

interface GamesModalProps {
    children: React.ReactNode
    id: string
    nameGame: string
}

interface AllAdsGameProps {
    id: string
    chatVoice: string
    daysPlaying: string
    endPlay: string
    idDiscord: string
    nickName: string
    startPlay: string
    yearsPlaying: string

}

export const GamesModal = ({ children, id, nameGame }: GamesModalProps) => {
    const [allAdsGame, setAllAdsGame] = useState<AllAdsGameProps[]>([])


    const getAllAdsInGame = () => {
        axios.get(`https://api-nlwesports.vercel.app/${id}/games`)
            .then(res => {
                setAllAdsGame(res.data.Ads)
                // console.log(res.data.Ads)
            })
    }

    const days = (days: string) => {
        const day = days.split(",")
        var allDay: string[] = []
        day.forEach(item => {
            if (item === "0") {
                allDay.push(" Domingo ")
            } else if (item === "1") {
                allDay.push(" Segunda-Feira ")
            } else if (item === "2") {
                allDay.push(" Terça-Feira ")
            } else if (item === "3") {
                allDay.push(" Quarta-Feira ")
            } else if (item === "4") {
                allDay.push(" Quinta-Feira ")
            } else if (item === "5") {
                allDay.push(" Sexta-Feira ")
            } else if (item === "6") {
                allDay.push(" Sabado ")
            }
        })
        return allDay.toString()
    }
    return (
        <Dialog.Root>
            <Dialog.Trigger onClick={getAllAdsInGame}>
                {children}
            </Dialog.Trigger>

            <Dialog.Portal >
                <Dialog.Overlay className='w-full bg-galaxy bg-cover bg-no-repeat top-0 bottom-0 absolute'>
                    <Dialog.Content className=' fixed inset-0 w-[90%] h-[90%] m-auto p-4 rounded'>
                        <Dialog.Title> <strong className='text-transparent text-4xl bg-clip-text font-black bg-gradient-to-r from-indigo-500 via-green-500 to-yellow-500 '>{nameGame}</strong> </Dialog.Title>
                        <Dialog.Description>Todos os Anuncios</Dialog.Description>
                        <div className='my-2 rounded grid grid-cols-3 gap-2 scrollbar scrollbar-hidden hover:scrollbar-auto pr-2 h-[90%] auto-rows-max'>
                            {allAdsGame ? allAdsGame.map(item => {
                                return (
                                    <div key={item.id} className="flex p-4 gap-2 border border-zinc-600 rounded max-h-48 bg-gradient-to-t from-gray-900/50 to-gray-900/50">
                                        <User size={35} className='border' />
                                        <div className='text-sm flex flex-col gap-1'>
                                            <div className='flex gap-2 items-center justify-start'><strong className='bg-green-600/10 rounded text-xs px-1 font-black' >Nickname :</strong> {item.nickName}</div>
                                            <div className='flex gap-2 items-center justify-start'><strong className='bg-violet-600/10 rounded text-xs px-1 font-black'>ID Discord :</strong>{item.idDiscord}</div>
                                            <div className='flex gap-2 items-center justify-start'><strong className='bg-yellow-600/10 rounded text-xs px-1 font-black'>Dias de Jogo :</strong>{days(item.daysPlaying)}</div>
                                            <div className='grid grid-cols-2 gap-2'>
                                                    <div className='flex flex-col bg-green-500/10 rounded text-xs p-1 font-black'>
                                                        <strong >Horario de Inicio</strong>
                                                        <span className='font-normal'>{item.startPlay}</span>
                                                    </div>
                                                    <div className='flex flex-col bg-red-500/10 rounded text-xs p-1 font-black'>
                                                        <strong >Horario de Termino</strong>
                                                        <span className='font-normal'>{item.endPlay}</span>
                                                    </div>
                                                </div>
                                            <div className='flex gap-2 items-center justify-start'>
                                                <strong>Usar Chat de Voz?</strong> {item.chatVoice}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }): <Spinner className='animate-spin' /> }
                        </div>
                        <Dialog.Close className='absolute top-7 right-5 bg-red-500 rounded p-1'><X size={15} /></Dialog.Close>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>

        </Dialog.Root>
    )
}