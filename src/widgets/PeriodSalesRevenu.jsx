import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';
import { formatNumber } from '../utils/helpers';
import Trend from './Trend';

const data = [
  {
    date: new Date(2023, 8, 12),
    value: 1554,
    trend: 14.56
  },
  {
    date: new Date(2023, 8, 14),
    value: 2741,
    trend: 25.11
  },
  {
    date: new Date(2023, 8, 16),
    value: 1088,
    trend: -12.56
  },
  {
    date: new Date(2023, 8, 18),
    value: 1541,
    trend: 8.25
  },
  {
    date: new Date(2023, 8, 20),
    value: 3874,
    trend: 0.23
  },
  {
    date: new Date(2023, 8, 22),
    value: 2390,
    trend: -0.23
  },
  {
    date: new Date(2023, 8, 24),
    value: 3490,
    trend: -1.15
  }
];
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (

      <>
        <div className="flex flex-col gap-3 p-5 shadow">
          <div className="flex gap-3 items-center">
            <div className="w-[10px] h-[10px] rounded-full bg-green"></div>
            <p>{dayjs(payload[0].payload.date).format('DD MMM')} :</p>
            <p>{payload[0].payload.value}</p>
          </div>
          <Trend rate={Math.abs(payload[0].payload.trend)} trend={payload[0].payload.trend ? 'up' : 'down'} />
        </div>
      </>
    )
  }
}

const PeriodSalesRevenu = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          tickLine={false}
          dataKey='date'
          tickMargin={9}
          tickFormatter={(value) => dayjs(value).format('DD MMM')}
          tick={{
            fill: 'var(--text)'
          }}
        />
        <CartesianGrid vertical={false} />
        <YAxis
          tickLine={false}
          tickFormatter={(value) => formatNumber(value, '$')}
          axisLine={false}
        />
        <Tooltip
          cursor={{ strokeDasharray: '4 4', stroke: 'var(--header)' }}
          content={<CustomTooltip />}
        />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default PeriodSalesRevenu