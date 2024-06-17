import { colors } from '@mui/material';
import { formatNumber } from '@utils/helpers';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Trend from './Trend';

const data = [
  { name: 'Q1', 2022: 10874, 2023: 5874, trend: 14.46 },
  { name: 'Q2', 2022: 8471, 2023: 8974, trend: -4.19 },
  { name: 'Q3', 2022: 15874, 2023: 7000, trend: 12.88 },
  { name: 'Q4', 2022: 10455, 2023: 12584, trend: 50.14 }
];

const Customtooltip = ({ active, payload, label }) => {
  if (active) {
    const rate = Math.floor((payload[0].payload[2023] - payload[0].payload[2022]) / payload[0].payload[2023] * 10000) / 100
    return (
      <div className='flex flex-col font-bold gap-3 shadow '>
        <div className="text-xl">Gross Sales</div>
        <div className="flex justify-between gap-5">
          <div>{label}</div>
          <Trend rate={Math.abs(rate)} trend={rate === Math.abs(rate) ? 'up' : 'down'} />
        </div>
      </div>
    )
  }
}

const SalesVolumeChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
          className=' font-bold'
        >
          <CartesianGrid
            vertical={false}
          />
          <XAxis dataKey="name" tickLine={false} tickMargin={10} tick={{ fill: 'var(--text)' }} />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => formatNumber(value, '$')} tick={{ fill: 'var(--text)' }} />
          <Tooltip content={<Customtooltip />} />
          <Legend verticalAlign='top' wrapperStyle={{ paddingBottom: '20px' }} />
          <Line type="monotone" dataKey="2022" stroke="#8884d8" strokeWidth={5} />
          <Line type="monotone" dataKey="2023" stroke="#82ca9d" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}
export default SalesVolumeChart