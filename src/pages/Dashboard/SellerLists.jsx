import { useEffect, useState } from "react"
import PagesHeader from "../../layouts/PagesHeader.jsx"
import RangeDate from "../../ui/RangeDates/index.jsx"
import { Select, FormControl, FormHelperText, MenuItem, InputLabel, Stack, Pagination } from "@mui/material"
import SelectSort from "../../ui/SelectSort/index.jsx"
import sellers from "../../db/sellers.js"
import ItemIcon from "../../widgets/ItemIcon.jsx"
import Counter from "../../widgets/Counter.jsx"
import { Rating } from "@mui/material"
import LinearProgressCenter from "../../widgets/LinearProgressPercent.jsx"

const sellerPerPagination = 4

const SellerLists = () => {
  const [data, setData] = useState(null)
  const [sort, setSort] = useState('bs')
  const [pageActive, setPageActive] = useState(1)
  const handleOnChange = (event, value) => {
    setPageActive(value)
  }

  useEffect(() => {
    sellers.map((seller) => {
      const totalProfitSeller = Object.keys(seller.profit).map(key => seller.profit[key]).reduce((a, b) => a + b, 0)
      seller.totalProfit = totalProfitSeller
      return seller
    })
  }, [])
  useEffect(() => {
    const newData = sellers?.slice((sellerPerPagination * pageActive - sellerPerPagination), (sellerPerPagination * pageActive))
    setData(newData)
  }, [pageActive])
  useEffect(() => {
    if (sort === 'z-a') {
      let newData = sellers?.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA > nameB) {
          return -1
        }
        if (nameB > nameA) {
          return 1
        }
        return 0
      })
      newData = newData?.slice((sellerPerPagination * pageActive - sellerPerPagination), (sellerPerPagination * pageActive))
      setData(newData)
    }
    if (sort === 'a-z') {
      let newData = sellers?.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA > nameB) {
          return 1
        }
        if (nameB > nameA) {
          return -1
        }
        return 0
      })
      newData = newData?.slice((sellerPerPagination * pageActive - sellerPerPagination), (sellerPerPagination * pageActive))
      setData(newData)
    }
    if (sort === 'htl') {
      let newData = sellers.sort((a, b) => b.rating - a.rating)
      newData = newData?.slice((sellerPerPagination * pageActive - sellerPerPagination), (sellerPerPagination * pageActive))
      setData(newData)
    }
    if (sort === 'lth') {
      let newData = sellers.sort((a, b) => a.rating - b.rating)
      newData = newData?.slice((sellerPerPagination * pageActive - sellerPerPagination), (sellerPerPagination * pageActive))
      setData(newData)
    }
    if (sort === 'bs') {
      let newData = sellers.sort((a, b) => b.sales - a.sales)
      newData = newData?.slice((sellerPerPagination * pageActive - sellerPerPagination), (sellerPerPagination * pageActive))
      setData(newData)
    }
  }, [sort])
  return (
    <>
      <PagesHeader title='Seller Profiles' />
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p>Sale period:</p>
          <RangeDate />
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div>View Profiles: 4/{sellers.length}</div>
          <FormControl >
            <SelectSort sort={sort} setSort={(e) => setSort(e.target.value)} />
          </FormControl>
        </div>

      </div >
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
                <a href={`#${seller.name}`}>{seller.website}</a>
                <p>{seller.address}</p>
                <p>{seller.phone}</p>
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
                    <Counter number={seller.sales} />
                    <p>Income</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-2xl">Review rate:</p>
                  <Rating value={seller.rating} readOnly />
                </div>
              </div>
              <div className="basis-1/3 grow flex flex-col gap-3">
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
              </div>
            </div>
          )
        })
      }
      <Stack spacing={2}>
        <Pagination
          onChange={handleOnChange}
          page={pageActive}
          className="text-header"
          count={((sellers?.length) / sellerPerPagination)}
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
    </>

  )
}
export default SellerLists