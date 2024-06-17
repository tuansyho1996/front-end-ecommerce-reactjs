import PagesHeader from "@layouts/PagesHeader"
import SelectSort from "@ui/SelectSort"
import RangeDate from "@ui/RangeDates"
import { FormControl } from "@mui/material"
import sellers from '@db/sellers.js'
import { useEffect, useState } from "react"
import { Table } from "antd"
import { COLUMN_SELLER_TABLE } from "@constants/columnDefs"
import _ from 'lodash'
import { sortSellers } from "../utils/helpers"

const SellerTable = () => {
  const [data, setData] = useState(null)
  const [sort, setSort] = useState('bs')
  useEffect(() => {
    setData(sellers)
  }, [])
  useEffect(() => {
    setData(sortSellers([...sellers], sort))
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
          <div>View Profiles: 5/{sellers.length}</div>
          <FormControl >
            {/* <SelectSort /> */}
            <SelectSort sort={sort} setSort={(e) => setSort(e.target.value)} />
          </FormControl>
        </div>
      </div >
      {
        data &&
        <Table
          columns={COLUMN_SELLER_TABLE}
          dataSource={data}
          pagination={{
            pageSize: 5,
            position: ['topCenter', 'bottomCenter'],
          }}

        />
      }

    </>
  )
}
export default SellerTable