import { UseContexts } from '../contexts/UseContexts'
import { FormEvent, useContext, useState } from 'react';
import { Check, GameController, Spinner } from 'phosphor-react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import * as Checkbox from '@radix-ui/react-checkbox';
import classNames from 'classnames';
import axios from 'axios';

interface FormAdsProps {
    setIsOpen: (data: boolean) => void
}


export const FormAds = ({ setIsOpen }: FormAdsProps) => {
    const { cards, setReloadCards } = useContext(UseContexts)
    const [playGames, setPalyGames] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [msgErro, setMsgErro] = useState("")

    const daysPlay = [
        {
            id: "0",
            init: "D",
            day: "Domingo"
        }, {
            id: "1",
            init: "S",
            day: "Segunda"
        }, {
            id: "2",
            init: "T",
            day: "Terça"
        }, {
            id: "3",
            init: "Q",
            day: "Quarta"
        }, {
            id: "4",
            init: "Q",
            day: "Quinta"
        }, {
            id: "5",
            init: "S",
            day: "Sexta"
        }, {
            id: "6",
            init: "S",
            day: "Sabádo"
        }

    ]

    interface FormDataPros {
        whatGame: string
        yearsPlaying: String
        nickName: String
        idDiscord: String
        startPlay: String
        endPlay: String
        chatVoice: String
        daysPlaying: String

    }

    const msgErr = (msg: string) => {
        setMsgErro(msg)
        setIsLoading(false)
        setTimeout(() => {
            setMsgErro("")
        }, 3000);
    }

    const HandleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setReloadCards(false)
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        console.log(playGames)

        if (!data.whatGame) {
            return msgErr("Escolha um game!")
        } else if (!data.nickName) {
            return msgErr("Insira seu nome de Usuario no jogo!")
        } else if (!data.yearsPlaying) {
            return msgErr("Insira a quanto tempo você joga esse jogo!")
        } else if (!data.idDiscord) {
            return msgErr("Insira seu id do Discord!")
        } else if (playGames.length === 0) {
            return msgErr("Insira os dias que você joga esse jogo!")
        } else if (!data.startPlay) {
            return msgErr("Insira o horario que você começa a jogar esse jogo!")
        } else if (!data.endPlay) {
            return msgErr("Insira o horario que você termina de jogar esse jogo!")
        }

        axios.post(`https://api-nlwesports.vercel.app/${data.whatGame}/ads`, {
            ...data,
            daysPlaying: playGames.toString(),
            whatGame: undefined,
            chatVoice: data.chatVoice || "off" 

        }).then(res => {
            console.log(res.data)
            setIsLoading(false)
            setReloadCards(true)
            return setIsOpen(false)
        })
    }


    return (
        <form className='flex flex-col gap-4' onSubmit={HandleSubmit}>
            <div className='flex flex-col gap-2'>
                <label htmlFor="whatGame" className='font-semibold'>Qual é o game</label>
                <select name="whatGame" id="whatGame" defaultValue={'DEFAULT'} className='bg-zinc-900 py-3 px-4 text-zinc-500 text-sm rounded' placeholder='Selecione o game que deseja jogar'>
                    <option value="DEFAULT" disabled hidden>Escolha seu Game!</option>
                    {cards.map((item) => {
                        return (
                            <option key={item.id} value={item.id}>{item.nameGame}</option>
                        )
                    })}
                </select>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="nickName" className='font-semibold'>Seu nome {"(ou nickname)"} </label>
                <input name='nickName' id='nickName' type="text" className='bg-zinc-900 py-3 px-4 text-zinc-500 text-sm rounded' placeholder='Como te chamam dentro do game?' />
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying" className='font-semibold'> Joga a quanto tempo? </label>
                    <input name='yearsPlaying' id='yearsPlaying' type="text" className='bg-zinc-900 py-3 px-4 text-zinc-500 text-sm rounded' placeholder='Tudo bem ser ZERO' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="idDiscord" className='font-semibold'> Qual seu Discord </label>
                    <input name='idDiscord' id='idDiscord' type="text" className='bg-zinc-900 py-3 px-4 text-zinc-500 text-sm rounded' placeholder='Usuario#000' />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="daysPlay" className='font-semibold'> Quando costuma jogar?</label>
                    <ToggleGroup.Root type='multiple' className='grid grid-cols-4 gap-2' onValueChange={(value) => {
                        setPalyGames(value.map(item => item))
                    }} >
                        {daysPlay.map(item => {
                            return (
                                <ToggleGroup.Item key={item.id} value={item.id} className={classNames("w-10 p-2 items-center justify-center rounded bg-[#181818]", { "bg-emerald-500": playGames.includes(item.id) })}>
                                    {item.init}
                                </ToggleGroup.Item>
                            )
                        })}
                    </ToggleGroup.Root>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="idDiscord" className='font-semibold'> Qual horário do dia? </label>
                    <div className='grid grid-cols-2 gap-2'>
                        <input name='startPlay' id='startPlay' type="time" className='bg-zinc-900 py-3 px-4 text-zinc-500 text-sm rounded' placeholder='Usuario#000' />
                        <input name='endPlay' id='endPlay' type="time" className='bg-zinc-900 py-3 px-4 text-zinc-500 text-sm rounded' placeholder='Usuario#000' />
                    </div>
                </div>
            </div>
            <Checkbox.Root className='flex gap-2' name='chatVoice'>
                <div className='bg-zinc-900 w-6 h-6 flex items-center justify-center gap-2 rounded'>
                    <Checkbox.Indicator >
                        <Check className='text-emerald-500' />
                    </Checkbox.Indicator>
                </div>
                Costumo me conectar ao chat de voz
            </Checkbox.Root>
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    className="bg-zinc-500 p-3 rounded font-medium w-28"
                    onClick={() => setIsOpen(false)}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="bg-violet-500 p-3 rounded font-medium w-44 flex items-center justify-center gap-2 "
                >
                    {isLoading ? <Spinner className='animate-spin' /> : <><GameController /> Encontar Duo</>}
                </button>
            </div>
            {msgErro && <>
                <div className='bg-red-500/50 p-2 rounded font-medium flex justify-center items-center'>
                    {msgErro}
                </div>
            </>}
        </form>
    )
}


