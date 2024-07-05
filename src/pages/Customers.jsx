import PagesHeader from "@layouts/PagesHeader"
import { formatNumberBasic } from "@utils/helpers"
import { Fragment } from "react"
import ItemIcon from "@widgets/ItemIcon"
import TableRevenuGeneral from "@components/TableRevenuGeneral"
import Trend from "@widgets/Trend"
import CustomersRetentionRate from "@widgets/CustomersRetentionRate"
import InfoPerCentByLinear from "@components/InfoPercentByLinear"

const rows = [
  { year: 2022, customers: 3234, trend: 10, revenue: 124000 },
  { year: 2023, customers: 12345, trend: 35, revenue: 32000 }
]
const demoGraphics = [
  { label: 'Age 18-25', value: 6680 },
  { label: 'Age 25-45', value: 15234 },
  { label: 'Age 45-65', value: 2034 },
  { label: 'Age over 65', value: 792 }
]

const total = () => {
  return demoGraphics.order(a, b => a + b.value, 0)
}

const Customers = () => {
  return (
    <Fragment>
      <PagesHeader title='Customers' />
      <div className="grid grid-cols-6 gap-5 font-bold">
        <div className="flex flex-col justify-center items-center gap-3 bg-widget card py-10 rounded-lg">
          <ItemIcon icon='users' bg='bg-green' />
          <div className="text-xl">{formatNumberBasic(32978)}</div>
          <div>All</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-widget card py-10 rounded-lg">
          <ItemIcon icon='users' bg='bg-sky-500' />
          <div className="text-xl">{formatNumberBasic(17153)}</div>
          <div>New</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-widget card py-10 rounded-lg">
          <ItemIcon icon='users' bg='bg-red' />
          <div className="text-xl">{formatNumberBasic(7587)}</div>
          <div>Regular</div>
        </div>
        <div className="flex justify-between p-5 col-span-3 bg-widget card rounded-lg items-center">
          <div>
            <div className="text-2xl">Conversion rate</div>
            <TableRevenuGeneral rows={rows} bg='var(--widget)' width="300px" />
          </div>
          <div className="flex gap-10">
            <div>
              <div className="text-2xl">{formatNumberBasic(32547)}</div>
              <div>Regular Customers</div>
              <Trend trend='up' rate='14.2' />
            </div>
            <div>
              <div className="text-2xl">{formatNumberBasic(12345)}</div>
              <div>New Customers</div>
              <Trend trend='up' rate='23.5' />
            </div>
          </div>
        </div>
        <div className="col-span-4 flex justify-between items-center bg-widget rounded-lg card p-5">
          <div className="basis-2/5 h-[400px]">
            <CustomersRetentionRate />
          </div>
          <div className=" basis-3/5 flex flex-col gap-5">
            <div className="text-lg font-bold">Total Customers - 42,986 in 2023</div>
            <p className="font-normal">Donec placerat, ipsum et bibendum blandit, ligula lectus ullamcorper lorem, in viverra nisl elit viverra massa. Nullam sodales rutrum arcu. Maecenas sed lorem ut dolor tincidunt mattis. Vestibulum vitae aliquet felis, at iaculis metus</p>
            <ul className="font-bold flex flex-col gap-3">
              <li className="flex gap-1 items-center">
                <i className="icon-circle text-chart-dark" />
                <p>New Customers - 63%, which is 27,153 visitors</p>
              </li>
              <li className="flex gap-1 items-center" >
                <i className="icon-circle text-accent" />
                <p>Frequent Customers - 18%, which is 7,587 visitors</p>
              </li>
              <li className="flex gap-1 items-center" >
                <i className="icon-circle text-red" />
                <p>Idle Users - 14%, which is 5,937 visitors</p>
              </li>
              <li className="flex gap-1 items-center" >
                <i className="icon-circle text-yellow" />
                <p>Cart Abandoners - 5%, which is 2,309 visitors</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 p-5 bg-widget card flex flex-col gap-5">
          <div className="text-xl">
            Demographic segmentation by age
          </div>
          <div className="flex flex-col gap-3">
            {
              demoGraphics.map((item, index) => {
                return (
                  <InfoPerCentByLinear label={item.label} value={item.value} total={() => total()} />
                )
              })
            }
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl">
              Segmentation By Gender
            </p>
            <div className="flex gap-10 ">
              <div className="flex flex-col gap-3 items-center">
                <ItemIcon icon='male' bg='bg-sky-500' />
                <div className="text-lg">65%</div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <ItemIcon icon='female' bg='bg-sky-500' />
                <div className="text-lg">32%</div>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <ItemIcon icon='circle' bg='bg-sky-500' />
                <div className="text-lg">3%</div>
              </div>
            </div>
            <p className="font-normal">Nullam sodales rutrum arcu. Maecenas sed lorem ut dolor tincidunt mattis</p>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
export default Customers