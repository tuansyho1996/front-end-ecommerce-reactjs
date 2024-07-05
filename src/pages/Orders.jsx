import PagesHeader from "@layouts/PagesHeader"
import RangeDate from "@ui/RangeDates"
import TextFieldInput from "@widgets/TextFieldInput"
import LinearProgressPercent from "@widgets/LinearProgressPercent"
import { Fragment, useEffect, useState } from "react"
import BoxStatusOrder from "@components/BoxStatusOrders"
import TableListData from "@components/TableListData"
import orders from "@db/orders"
import CustomPagination from "@components/CustomPagination"
import { sortOrder } from "@utils/helpers"

const numOrdersPerPagination = 5

const select = {
  category: ['all', 'electronics', 'groceries', 'fashion', 'services'],
  sort: ['default', 'by name: A-Z', 'by name Z-A', 'rating:high to low', 'rating:low to high'],
  status: [
    {
      label: 'Orders Completed',
      icon: 'playlist_add_check',
      number: 2345,
      bg: "bg-sky-500"
    },
    {
      label: 'Orders Confirmed',
      icon: 'angellist',
      number: 323,
      bg: "bg-green"

    },
    {
      label: 'Orders Canceled',
      icon: 'blocked',
      number: 17,
      bg: "bg-red"
    },
    {
      label: 'Orders Refunded',
      icon: 'mail-forward',
      number: 2,
      bg: "bg-gray"
    }
  ]
}

const Orders = () => {
  const [pageActive, setPageActive] = useState(1)
  const [currentOrder, setCurrentOrder] = useState(null)
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')
  useEffect(() => {
    let copyOrders = [...orders]
    if (category !== 'all') {
      copyOrders = copyOrders.filter(order => order.category === category)
    }
    copyOrders = sortOrder(copyOrders, sort)
    setCurrentOrder(copyOrders.slice(pageActive * numOrdersPerPagination - numOrdersPerPagination, pageActive * numOrdersPerPagination))
  }, [pageActive, category, sort])


  return (
    <>
      <PagesHeader title='Orders' />
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">
            Sales period:
          </div>
          <RangeDate />
        </div>
        <div className="flex gap-5">
          <TextFieldInput select={true} data={select.category} change={(e) => setCategory(e.target.value)} minW="150px" />
          <TextFieldInput select={true} data={select.sort} change={(e) => setSort(e.target.value)} minW="150px" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 my-5">
        <div className="font-bold p-5 flex flex-col gap-3 col-span-2 bg-widget rounded-lg">
          <div className="text-2xl">Average Rate (%)</div>
          <div>
            <p className="flex justify-between"> <span>Product views</span> <span>87%</span></p>
            <LinearProgressPercent size="10px" value={87} />
          </div>
          <div>
            <p className="flex justify-between"><span>Cart Abadonment Rate</span> <span>23%</span></p>
            <LinearProgressPercent size="10px" value={23} />
          </div>
        </div>
        {
          select?.status?.map((item, index) => {
            return (
              <Fragment key={index}>
                <BoxStatusOrder data={item} />
              </Fragment>
            )
          })
        }
      </div>
      <TableListData data={currentOrder} />
      <CustomPagination num={orders.length / numOrdersPerPagination} onChange={(value) => setPageActive(value)} />
    </>
  )
}
export default Orders