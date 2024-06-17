import SelectSort from "@ui/SelectSort"
import RangeDate from "@ui/RangeDates"
import { FormControl } from "@mui/material"
import PagesHeader from "@layouts/PagesHeader"
import sellers from "@db/sellers"
import { Popover } from "@mui/material"
import { useEffect, useState } from "react"
import { sortSellers } from "@utils/helpers"
import { useProfile } from "../contexts/profileContext"
import { Link } from "react-router-dom"
import { Menu, MenuItem } from "@mui/material"

const SellerGrided = () => {
  const [openAnchor, setOpenAnchor] = useState(null)
  const [data, setData] = useState(null)
  const [sort, setSort] = useState('bs')
  const [popoverProfile, setPopoverProfile] = useState(null)


  useEffect(() => {
    setData(sellers)
  }, [])
  useEffect(() => {
    setData(sortSellers([...sellers], sort))
  }, [sort])

  const isOpen = Boolean(openAnchor)
  const { profile, changeProfile } = useProfile()
  return (
    <>
      <PagesHeader title='Seller Profiles' />
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <p>Sale period:</p>
          <RangeDate />
        </div>
        <div className="flex flex-col gap-3 items-end">
          <div>View Profiles: 5/36</div>
          <FormControl >
            {/* <SelectSort /> */}
            <SelectSort sort={sort} setSort={(e) => setSort(e.target.value)} />
          </FormControl>
        </div>
      </div >
      <div className="grid grid-cols-6 gap-5 my-5 ">
        {
          data &&
          data?.map((seller, index) => {
            return (
              <div key={index} className="flex bg-widget h-[182px] items-center justify-center rounded-lg hover:shadow ">
                <div className="flex h-3/4 w-3/4 items-center justify-center bg-[#fff] p-5 rounded-lg"  >
                  <img src={seller.logo} className="w-auto h-full object-contain " alt="" />
                </div>
                <div className="h-3/4">
                  <i className="icon-dots-three-vertical text-[--accent] text-2xl cursor-pointer"
                    onClick={(e) => {
                      setOpenAnchor(e.currentTarget)
                      setPopoverProfile(seller)
                    }}
                  />
                </div>
              </div>
            )
          })
        }
        <Popover
          open={isOpen}
          anchorEl={openAnchor}
          onClose={() => setOpenAnchor(null)}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <div className="flex bg-widget !text-[--accent] py-3 w-[182px] px-3 flex-col gap-3 !shadow">
            <Link className="cursor-pointer" to='/seller-profile' onClick={() => changeProfile(popoverProfile)}><i className="icon-pie-chart" /> Profile</Link>
            <Link className="cursor-pointer"><i className="icon-link" /> Contacts</Link>
            <Link className="cursor-pointer"><i className="icon-mail-forward" /> Share</Link>
          </div>
        </Popover>
      </div>
    </>
  )
}
export default SellerGrided