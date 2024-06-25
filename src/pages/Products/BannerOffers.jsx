import PagesHeader from "@layouts/PagesHeader"
import { Fragment } from "react"
import collage from '@assets/banners/collage.webp'
import balance from '@assets/banners/balance.webp'
import { formatNumber, formatNumberBasic } from "@utils/helpers"
import ItemIcon from "@widgets/ItemIcon"
import transaction from '@assets/banners/transactions-mini.webp'
import world from '@assets/banners/world.webp'
import map from '@assets/banners/map.webp'
import gear from '@assets/banners/gear.webp'
import phone from '@assets/banners/phone.webp'
import sale from '@assets/banners/sale.webp'
import card from '@assets/banners/cards.webp'
import security from '@assets/banners/security.svg'
import arrow from '@assets/banners/arrow.webp'
import { Link } from "react-router-dom"



const BannerOffers = () => {
  return (
    <Fragment>
      <PagesHeader title='Banners Offers' />
      <div className="grid grid-cols-10 gap-5 h-[700px]">
        <div className=" col-span-8 flex flex-col gap-5">
          <div className=" grid grid-cols-9 h-[300px] gap-5">
            <div className=" col-span-4 relative">
              <div className="h-[200px] bg-gradient-to-r from-blue-500 to-stone-600 rounded-md">
                <div className="absolute left-5 top-5">
                  <div className="text-4xl font-bold">
                    Get Up to <br /> 70% off
                  </div>
                  <p className="font-bold">
                    subscribe
                  </p>
                </div>
                <div className="absolute bottom-0 right-[-50px]">
                  <img src={collage} alt="" />
                </div>
              </div>
            </div>
            <div className="bg-[#01387d] col-span-4 flex gap-5 items-center h-[300px] rounded-md">
              <img className="h-2/3 " src={balance} alt="" />
              <div className="font-bold">
                <div className="text-4xl">{formatNumber(476300, '$')}</div>
                <p>Total balance</p>
              </div>
            </div>
            <div className=" col-span-1 bg-[#00ba9d] relative rounded-md">
              <div className="flex flex-col items-center gap-3 justify-start p-4">
                <ItemIcon icon='transfer' bg='bg-sky-500' />
                <div className="font-bold flex flex-col items-center">
                  <p className="text-2xl">{formatNumberBasic(32987, '$')}</p>
                  <p className="">transaction</p>
                </div>
              </div>
              <img className="absolute right-0 bottom-[-30px] w-full" src={transaction} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-widget flex flex-col items-center justify-center gap-3 font-bold h-[400px] rounded-md">
              <img className="h-1/2" src={phone} alt="" />
              <div className="text-2xl">
                New Iphone Pro
              </div>
              <div className="text-xl">
                Get $200 - $600 in credit toward
              </div>
              <Link>Shop now</Link>
            </div>
            <div className="bg-yellow text-orange flex flex-col items-center justify-center gap-3 font-bold h-[400px] rounded-md">
              <img className="h-1/2" src={sale} alt="" />
              <div className="text-2xl">Hot Offers!</div>
              <button className="py-4 px-20 bg-[--text] text-orange rounded-full ">Get Discount %</button>
            </div>
            <div className="bg-widget flex flex-col items-center justify-center gap-3 font-bold h-[400px] rounded-md relative">
              <img className="absolute left-0 right-0 m-auto top-10 p-10 rounded-full bg-[--glass] shadow shadow-[--glass] backdrop-blur-sm" src={security} alt="" />
              <img className="h-1/2 ml-7" src={card} alt="" />
              <div className="text-2xl">Security Payment</div>
              <p>secure e-commerce platform and payment provider</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 rounded-lg">
              <div className="font-bold">Make your new become a part of <br /> largest marketplace</div>
              <button className="px-10 py-2 bg-green rounded-full">subscribe</button>
            </div>
            <div className="flex justify-between items-center rounded-lg border border-sky-500 px-5 py-3 relative">
              <p className="font-bold">Best offers for subscribe</p>
              <img className="h-[100px] absolute right-0 " src={arrow} alt="" />
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-widget col-span-2 relative rounded-md">
          <img className="absolute m-auto top-0 left-0 right-0" src={world} alt="" />
          <img className="absolute bottom-0 left-0" src={map} alt="" />
          <img className="absolute bottom-0 right-0" src={gear} alt="" />
        </div>
      </div>
    </Fragment>
  )
}

export default BannerOffers