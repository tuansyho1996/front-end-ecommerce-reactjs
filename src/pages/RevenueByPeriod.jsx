import PagesHeader from "../layouts/PagesHeader"
import RangeDate from "@ui/RangeDates"
import { Stack } from "@mui/material"
import ItemIcon from "../widgets/ItemIcon"
import Trend from "@widgets/Trend"
import { formatNumber, formatNumberBasic } from "../utils/helpers"
import RevenuInfoBox from "@widgets/RevenuInfoBox"
import SalesVolumeChart from "@widgets/SalesVolumeChart"
import ChartSalesStatics from "@components/ChartSalesStatics"
import ProfitPerformance from "@widgets/ProfitPerformance"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import AverageReferralRate from "@widgets/AverageReferralRate"



const tags = ['Top Rated', 'New in', 'Best Sellers', 'A-Z', 'Reviews']
const rows = [
  { year: 2022, customers: 3234, trend: 10, revenue: 124000 },
  { year: 2023, customers: 12345, trend: 35, revenue: 32000 }
]
const total = [
  { label: 'Total Balance', value: 176200 },
  { label: 'Total Expense', value: 32100 },
  { label: 'Total Profit', value: 144100 }
]
const COLORS = [
  'var(--header)',
  'var(--green)'
]

const RevenueByPeriod = () => {

  return (
    <>
      <PagesHeader />
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
        <div className="flex basis-1/3 bg-widget card rounded-lg ">
          <SalesVolumeChart />
        </div>
        <div className=" basis-1/4 flex gap-5 flex-col  ">
          <div className=" flex gap-5 ">
            <RevenuInfoBox bg='bg-yellow' icon='money' label='Income 2022' trend={10} num={96100} />
            <RevenuInfoBox bg='bg-red' icon='diamond' label='Profit 2022' trend={78} num={2100} />
          </div>
          <div className=" flex gap-5 ">
            <RevenuInfoBox bg='bg-sky-500' icon='money' label='Income 2023' trend={-12} num={396100} />
            <RevenuInfoBox bg='bg-green' icon='diamond' label='Profit 2023' trend={65} num={80100} />
          </div>
        </div>
        <div className="flex flex-col basis-5/12 bg-widget card rounded-lg px-5 py-2 font-bold">
          <div className="flex justify-between items-center ">
            <div className="text-xl">Profit Performance</div>
            <i className="icon-info" />
          </div>
          <ProfitPerformance />
        </div>
      </div>
      <div className="flex gap-5 mt-5 ">
        <div className="flex flex-col p-5 basis-1/3 gap-5 bg-widget rounded-lg card">
          <div className="flex justify-between">
            <div className="text-xl">Conversion Rate</div>
            <i className="icon-info" />
          </div>
          <div className="flex gap-5">
            <div className=" basis-7/12 flex flex-col gap-3">
              <TableContainer component={Paper}
                style={{
                  backgroundColor: 'var(--widget)',
                }}
              >
                <Table aria-label="simple table" padding="checkbox" >
                  <TableHead>
                    <TableRow >
                      <TableCell>Year</TableCell>
                      <TableCell >Customers</TableCell>
                      <TableCell >Trend</TableCell>
                      <TableCell >Revenu</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.year}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.year}
                        </TableCell>
                        <TableCell >{row.customers}</TableCell>
                        <TableCell >{row.trend}</TableCell>
                        <TableCell >{row.revenue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="flex gap-3 font-bold justify-between">
                <div className="flex flex-col ">
                  <div className="text-2xl">{formatNumberBasic(32451)}</div>
                  <div>Regular Customers</div>
                  <Trend rate={14} trend='up' />
                </div>
                <div className="flex flex-col ">
                  <div className="text-2xl">{formatNumberBasic(12451, '+')}</div>
                  <div>New Customers</div>
                  <Trend rate={24} trend='up' />
                </div>
              </div>
            </div>
            <div className=" basis-5/12">
              <ResponsiveContainer >
                <PieChart>
                  <Pie
                    data={rows}
                    labelLine={false}
                    fill="#8884d8"
                    startAngle={180}
                    endAngle={0}
                    dataKey="revenue"
                    innerRadius={40}
                    stroke='var(--widget)'
                    strokeWidth={5}
                    fontSize={6}
                  >
                    {rows.map((entry, index) => (
                      <Cell key='year' fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex bg-widget rounded-lg card">
          <AverageReferralRate />
        </div>
        <div className="basis-5/12 flex flex-col justify-between font-bold">
          {
            total?.map((item, index) => {
              return (
                <div key={index} className="bg-widget flex justify-between card rounded-lg p-5">
                  <div>{item.label}</div>
                  <div>{formatNumber(item.value, '$')}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default RevenueByPeriod