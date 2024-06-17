import { Popover } from "@mui/material"
import { useState } from "react"
import ItemReport from "./ItemReport"

const TotalReport = () => {
  const [openInfo, setOpenInfo] = useState(null)
  const open = Boolean(openInfo)
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div>
          <p className="text-2xl">Total Report</p>
          <p>All periods per 01/01/2022-08/28/2023</p>
        </div>
        <div>
          <i className="icon-info" onClick={(e) => setOpenInfo(e.currentTarget)} />
          <Popover
            open={open}
            onClose={() => setOpenInfo(null)}
            anchorEl={openInfo}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <div className="flex flex-col gap-3 px-10 py-3 bg-body  ">
              <button>Share</button>
              <button>Print</button>
            </div>
          </Popover>
        </div>
      </div>
      <ItemReport name='Revenu' amount={176210} rate={45} trend='up' />
      <ItemReport name='expense' amount={310452} rate={12} trend='down' />
      <ItemReport name='profit' amount={342689} rate={14.56} trend='up' />
      <button className="py-3 align-middle bg-accent rounded-full">More Details</button>
    </div>
  )
}
export default TotalReport