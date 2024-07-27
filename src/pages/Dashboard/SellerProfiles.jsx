import PagesHeader from "@layouts/PagesHeader"
import { LinearProgress, Rating, Stack } from "@mui/material"
import RangeDate from "@ui/RangeDates"
import { useProfile } from "../../contexts/profileContext"
import { Link } from "react-router-dom"
import ItemIcon from "@widgets/ItemIcon"
import Trend from "@widgets/Trend"
import Counter from "@widgets/Counter"
import SaleActive from "@widgets/SaleActive"
import { formatNumber } from "@utils/helpers"
import imgCreditCard from "@assets/credit-card.webp"
import imgWallet from "@assets/wallet.webp"
import PeriodSalesRevenu from "@widgets/PeriodSalesRevenu"
import LinearProgressPercent from "@widgets/LinearProgressPercent"

const tags = ['Top Rated', 'New in', 'Best Sellers', 'A-Z', 'Reviews']



const SellerProfiles = () => {
  const { profile } = useProfile()
  const sumProfit = () => {
    if (profile) {
      const sum = Object.keys(profile?.profit).reduce((accumulator, key) => {
        return accumulator + profile?.profit[key]
      }, 0)
      return sum
    }
  }

  return (
    <>
      <PagesHeader title='Seller Profile Details' />
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p>Sale period:</p>
          <RangeDate />
        </div>
        <div className="flex flex-col gap-3 items-end">
          <p className="text-2xl bold">
            Popular Tags:
          </p>
          <div className="flex ">
            <Stack direction='row' spacing={2}>
              {
                tags.map((tag, index) => {
                  return (
                    <button key={index} className="rounded-full border border-solid border-accent py-2 px-5 hover:bg-accent focus:bg-accent">{tag}</button>
                  )
                })
              }
            </Stack>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="basis-1/3 h-[182px] bg-widget card rounded-lg flex items-center px-5 gap-5">
          <div className="flex h-3/4 w-auto items-center justify-center "  >
            <img src={profile?.logo} className="w-auto h-full object-contain " alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl">{profile?.name}</p>
            <Link>{profile?.website}</Link>
            <p>{profile?.phone}</p>
            <p>{profile?.email}</p>
          </div>
        </div>
        <div className="basis-1/6 h-[182px] bg-widget card rounded-lg">
          <div className="flex justify-between p-5">
            <div className="flex flex-col gap-1 font-bold">
              <ItemIcon px="px-5" icon='transfer' bg='bg-green' />
              <div>Transactions</div>
              <Trend trend='up' rate={45.5} />
              <span className="text-xl flex items-center gap-0.5">
                ${<Counter number={96} />}K
              </span>
            </div>
            <i className="icon-dots-three-vertical text-2xl" />
          </div>
        </div>
        <div className="basis-1/4 h-[182px] bg-widget card rounded-lg">
          <SaleActive />

        </div>
        <div className="basis-1/4 h-[182px] flex flex-col justify-between rounded-lg  rounded-lg font-bold">
          <div className="flex gap-3 bg-widget p-5 card rounded-lg">
            <div className="flex ">
              <img className="h-[40px]" src={imgCreditCard} alt="" />
            </div>
            <div className="flex justify-between items-center flex-1">
              <span>Total Expense</span>

              <span>{formatNumber(32000, '$')}</span>

            </div>
          </div>
          <div className="flex gap-3 bg-widget p-5 card rounded-lg">
            <div className="flex ">
              <img className="h-[40px]" src={imgWallet} alt="" />
            </div>
            <div className="flex flex-1 justify-between items-center">
              <span>Total Profit</span>
              <span>{formatNumber(144100, '$')}</span>

            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 flex gap-5">
        <div className="flex basis-1/2 bg-widget  p-5 card rounded-lg">
          <PeriodSalesRevenu />
        </div>
        <div className="flex  gap-5 flex-col  basis-1/2 ">
          <div className="flex flex-col gap-3 font-bold p-5 bg-widget rounded-lg card">
            <div className="text-xl">Sales Profit by Category </div>
            {
              profile &&
              Object.keys(profile?.profit).map((key, index) => {
                return (
                  <div key={index} className="flex flex-col gap-2 ">
                    <div className="flex justify-between">
                      <p>{key}</p>
                      <p>{formatNumber(profile?.profit[key], '$')}</p>
                    </div>
                    <LinearProgressPercent label={key} value={(profile?.profit[key] / sumProfit() * 100)} />
                  </div>
                )
              })
            }
            <div className="flex justify-between">
              <div className="flex flex-col items-center gap-3">
                <p className="text-xl">
                  Review Rate
                </p>
                <Rating value={profile?.rating} />
              </div>
              <div className="flex flex-col justify-between">
                <p>From 432 Responders</p>
                <Link to='/'>View All Reviews</Link>
              </div>
            </div>
          </div>
          <div className="flex gap-10  font-bold">
            <div className="flex gap-3 p-5 bg-widget basis-1/3 card rounded-lg items-center">
              <ItemIcon px="px-3" py="py-3" icon='diamond' bg='bg-sky-500' />
              <div className=" flex flex-col justify-between">
                <div className="text-xl">
                  {formatNumber(sumProfit(), '$')}
                </div>
                <div className="text-md">Income</div>

              </div>
            </div>
            <div className="flex gap-3 p-5 bg-widget basis-1/3 card rounded-lg items-center">
              <ItemIcon px="px-3" py="py-3" icon='cart' bg='bg-green' />
              <div className=" flex flex-col justify-between">
                <div className="text-xl">
                  {formatNumber(profile?.sales, '$')}
                </div>
                <div>New Orders</div>

              </div>
            </div>
            <div className="flex gap-3 p-5 bg-widget basis-1/3 card rounded-lg items-center">
              <ItemIcon px="px-3" py="py-3" icon='money' bg='bg-red' />
              <div className=" flex flex-col justify-between">
                <div className="text-xl">
                  {formatNumber(profile?.sales, '$')}
                </div>
                <div>Expense</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SellerProfiles