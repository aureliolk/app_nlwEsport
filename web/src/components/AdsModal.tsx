import { Dialog, Transition } from '@headlessui/react'
import { Check, GameController, MagnifyingGlassPlus } from 'phosphor-react'
import { Fragment, useContext, useState, FormEvent } from 'react'
import { FormAds } from './FormAds'




export const AdsModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <>
            <button
                type="button"
                onClick={() => { setIsOpen(true) }}
                className="flex items-center h-7 p-5 rounded bg-violet-500 font-medium gap-x-2" >
                <MagnifyingGlassPlus /> Publicar Anúncio
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-[#2A2634] p-6 text-left align-middle shadow-xl transition-all flex flex-col">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-3xl font-black leading-6 text-white mb-9"
                                    >
                                        Publique um anúncio
                                    </Dialog.Title>
                                    <FormAds setIsOpen={setIsOpen} />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
