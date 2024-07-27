import { useEffect, useState } from "react"
import PagesHeader from "../../layouts/PagesHeader.jsx"
import RangeDate from "../../ui/RangeDates/index.jsx"
import { FormControl, MenuItem, InputLabel, Stack, Pagination } from "@mui/material"
import SelectSort from "../../ui/SelectSort/index.jsx"
import ItemIcon from "../../widgets/ItemIcon.jsx"
import Counter from "../../widgets/Counter.jsx"
import { getAllShops } from '../../services/admin.js'
import ModalCreateShop from "@components/ModalCreateShop.jsx"
import { sortSellers } from "@utils/helpers.js"

const shops = await getAllShops()

const sellerPerPagination = 4

const SellerLists = () => {
  const [data, setData] = useState(null)
  const [sort, setSort] = useState('bs')
  const [pageActive, setPageActive] = useState(1)
  const [openModalCreateShop, setOpenModalCreateShop] = useState(false)
  const handleOnChange = (event, value) => {
    setPageActive(value)
  }


  useEffect(() => {
    let newShops = sortSellers(shops, sort)
    newShops = shops?.slice((sellerPerPagination * pageActive - sellerPerPagination), (sellerPerPagination * pageActive))
    setData(newShops)
  }, [sort, pageActive])

  return (
    <>
      <PagesHeader title='Seller Profiles' />
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p>Sale period:</p>
          <RangeDate />
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div>View Profiles: {data?.length}/{shops?.length}</div>
          <FormControl >
            <SelectSort sort={sort} setSort={(e) => setSort(e.target.value)} />
          </FormControl>
        </div>

      </div >
      <button className='my-10 w-20' onClick={() => setOpenModalCreateShop(true)}>
        <i className="icon-plus bg-widget text-accent p-5 rounded-lg" />
      </button>
      {
        data &&
        data.map((seller, index) => {
          return (
            <div key={index} className="item-seller flex gap-5 my-5 bg-widget p-5 items-center rounded-lg shadow">
              <div className="basis-1/6 flex flex-col gap-3 justify-between !h-full">
                <img src={seller.logo} alt="" className="rounded-lg" />
                <button className="bg-accent rounded-full h-[40px]">Profile</button>
              </div>
              <div className="basis-1/6 flex flex-col gap-3">
                <div className="text-3xl">{seller.name}</div>
                <a href={`#${seller.name}`}>{seller.email}</a>
                {/* <p>{seller.address}</p>
                <p>{seller.phone}</p> */}
                <p>{seller.email}</p>
              </div>
              <div className="basis-1/6 h-[230px] rounded-lg !bg-accent"></div>
              <div className="basis-1/6 flex flex-col gap-3 font-bold">
                <div className="text-3xl font-bold">Statistics:</div>
                <div className="flex gap-2">
                  <ItemIcon icon='cart-plus' bg='bg-sky-600' />
                  <div className="flex flex-col gap-1">
                    <Counter number={234} />
                    <p>New Orders</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <ItemIcon icon='diamond' bg='bg-green' />
                  <div className="flex flex-col gap-1">
                    {/* <Counter number={seller.sales} /> */}
                    <p>Income</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-2xl">Review rate:</p>
                  {/* <Rating value={seller.rating} readOnly /> */}
                </div>
              </div>
              {/* <div className="basis-1/3 grow flex flex-col gap-3">
                {
                  (seller.profit && seller.totalProfit) &&
                  Object.keys(seller.profit).map((item, indexProfit) => {
                    return (
                      <div key={indexProfit}>
                        <p>{item}</p>
                        <LinearProgressCenter value={((seller.profit[item] / seller.totalProfit) * 100)} label={item} />
                      </div>
                    )
                  })
                }
              </div> */}
            </div>
            // <div key={index} className="basis-1/6 py-5">
            //   <p>{seller.name}</p>
            //   <p>{seller.email}</p>
            //   <hr />
            // </div>
          )
        })
      }
      <Stack spacing={2}>
        <Pagination
          onChange={handleOnChange}
          page={pageActive}
          className="text-header"
          count={shops?.length % sellerPerPagination === 0 ? shops?.length / sellerPerPagination : Math.floor(shops?.length / sellerPerPagination) + 1}
          shape="rounded"
          size="lg"
          variant="outlined"
          sx={{
            '.MuiButtonBase-root,.MuiPaginationItem-root': {
              color: 'var(--text)',
              borderColor: 'var(--border)',
              padding: '20px'
            },
            '.MuiPaginationItem-root.Mui-selected': {
              backgroundColor: 'var(--accent)'
            }
          }}
        />
      </Stack>
      <ModalCreateShop isOpen={openModalCreateShop} handleClose={() => setOpenModalCreateShop(false)} />

    </>

  )
}
export default SellerLists