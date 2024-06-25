import PagesHeader from "../../layouts/PagesHeader"
import logo from "@assets/logo/zone style-logo/logo.png"
import { useState } from "react"
import { Popover } from "@mui/material"
import Counter from "../../widgets/Counter"
import Balance from "@components/Balance"
import ChartSalesStatics from "../../components/ChartSalesStatics"
import TotalReport from "../../components/TotalReport"
import ItemIcon from "../../widgets/ItemIcon"
import Trend from "../../widgets/Trend"


const SalesAnalytics = () => {
  const [openInfo, setOpenInfo] = useState(null)
  const open = Boolean(openInfo)
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <PagesHeader title='Sales Analytics' />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-[300px] bg-widget rounded-lgp-5 items-center flex gap-6 p-10">
          <div className=" p-10 border-border rounded-lg border-[1px] bg-body">
            <img className="w-[150px] rounded-lg" src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3>ShopPoint - Retail</h3>
              <p>Aliquam erat volutpat. Duis molestie ultrices tempus. Mauris sem orci, euismod sit amet.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <h5>Average rate 2023</h5>
                <div className="">
                  <i className="icon-info cursor-pointer"
                    onClick={(e) => {
                      setOpenInfo(e.currentTarget)
                    }}
                  />
                  <Popover
                    open={open}
                    anchorEl={openInfo}
                    onClose={() => setOpenInfo(null)}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                  >
                    <div className="flex flex-col gap-3 p-5 top-[20px] bg-body ">
                      <button>View Profile</button>
                      <button>Contacts</button>
                      <button>Share</button>
                    </div>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="flex gap-6 w-full font-bold">
              <div className="flex gap-3">
                <ItemIcon px='px-4' py="py-4" icon='diamond' bg='bg-emerald-600' />
                <div className="flex flex-col gap-1">
                  <Counter number={15346} />
                  <p>Income</p>
                  <Trend rate={45.5} trend='up' />
                </div>
              </div>
              <div className="flex gap-3">
                <ItemIcon px='px-4' py="py-4" icon='banknote' bg='bg-red' />
                <div className="flex flex-col gap-1">
                  <Counter number={53421} />
                  <p>Income</p>
                  <Trend rate={12} trend='down' />
                </div>
              </div>
              <div className="flex gap-3">
                <ItemIcon px='px-4' py="py-4" icon='cart-plus' bg='bg-sky-600' />
                <div className="flex flex-col gap-1">
                  <Counter number={5362} />
                  <p>Income</p>
                  <Trend rate={14.3} trend='up' />
                </div>
              </div>
            </div>

          </div>
        </div>
        <Balance balance={476300} nameClass='h-[300px] rounded-lg px-10 flex items-center gap-10 font-bold bg-accent' />
        <div className="h-[500px] bg-widget rounded-lg p-5">
          <ChartSalesStatics />
        </div>
        <div className="h-[500px] bg-widget rounded-lg p-5">
          <TotalReport />
        </div>
      </div>
    </>
  )
}

export default SalesAnalytics