import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Period 1', expense: 4000, income: 2400 },
  { name: 'Period 2', expense: 3000, income: 1398 },
  { name: 'Period 3', expense: 2000, income: 7000 },
  { name: 'Period 4', expense: 2780, income: 3908 },
  { name: 'Period 5', expense: 1890, income: 4800 },
  { name: 'Period 6', expense: 2390, income: 3800 },
  { name: 'Period 7', expense: 3490, income: 4300 }
];

const CustomTooltip = ({ }) => {
  return (
    <div className="flex flex-col p-5 gap-2">

    </div>
  )
}

const SaleActive = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          // width={500}
          // height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="name"
            hide={true}
          />
          <YAxis
            hide={true}
          />
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: 'var(--widget)',
              borderRadius: '6px',
              border: 'none',
              boxShadow: 'var(--shadow)'
            }}
          />
          <Bar dataKey="expense" radius={6} barSize={12} fill="#8884d8" />
          <Bar dataKey="income" radius={6} barSize={12} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>

  )
}

export default SaleActive