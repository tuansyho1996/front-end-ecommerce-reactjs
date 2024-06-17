import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatNumber } from '../utils/helpers';

const data = [
  { name: 'Jan', revenue: 4000, expense: 2400 },
  { name: 'Feb', revenue: 3000, expense: 1398 },
  { name: 'Mar', revenue: 2000, expense: 9800 },
  { name: 'Apr', revenue: 3450, expense: 3908 },
  { name: 'May', revenue: 8000, expense: 4800 },
  { name: 'Jun', revenue: 2390, expense: 6800 },
  { name: 'Jul', revenue: 1900, expense: 4300 },
  { name: 'Aug', revenue: 8900, expense: 4500 },
  { name: 'Sep', revenue: 5600, expense: 10000 },
  { name: 'Oct', revenue: 6450, expense: 1200 },
  { name: 'Nov', revenue: 7840, expense: 3000 },
  { name: 'Dec', revenue: 3490, expense: 4300 }
];

const ChartSalesStatics = () => {


  return (
    <ResponsiveContainer>
      <BarChart
        // width={}
        // height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"
          vertical={false}
        />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={value => formatNumber(value, '$')}
        />
        <Tooltip
          formatter={value => formatNumber(value, '$')}
        />
        <Bar dataKey="revenue" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        <Bar dataKey="expense" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>

  )
}
export default ChartSalesStatics