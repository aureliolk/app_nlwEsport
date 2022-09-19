import {AdsModal} from "./AdsModal"


export const SectionAds = () => {
  return (
    <div className="w-11/12 mt-20 flex justify-between  items-center border-t-2 rounded border-green-500 p-5 bg-[#2A2634]">
      <div>
        <h2 className="font-black text-[24px]">Não encontrou seu duo?</h2>
        <span className="font-light text-base">Publique um anúncio para encontrar novos players!</span>
      </div>

      <AdsModal />
    </div>
  )
}

