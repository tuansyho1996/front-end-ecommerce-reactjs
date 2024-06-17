import { formatNumber } from '@utils/helpers';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


const data = [
  { name: '2022', value: 8400 },
  { name: '2023', value: 5300 },
];

const COLORS = [
  'var(--header)',
  'var(--green)'
]
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className='bg-widget shadow flex justify-between p-5 gap-5 font-bold text-[--text] rounded-lg opacity-75 text-xl'>
        <div>Profit {payload[0].payload.name}:</div>
        <div>{formatNumber(payload[0].payload.value, '$')}</div>
      </div>
    )
  }
}

const ProfitPerformance = () => {
  return (
    <ResponsiveContainer >
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          fill="#8884d8"
          dataKey="value"
          stroke='var(--widget)'
          strokeWidth={5}
          fontSize={6}
        >
          {data.map((entry, index) => (
            <Cell key='name' fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )
}
export default ProfitPerformance