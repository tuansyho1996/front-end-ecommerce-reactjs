import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: 'New Customers', value: 27153, color: 'chart-dark' },
  { name: 'Frequent Customers', value: 7587, color: 'accent' },
  { name: 'Idle Users', value: 5937, color: 'red' },
  { name: 'Cart Abandoners', value: 2309, color: 'yellow' },
];

const CustomersRetentionRate = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`var(--${entry.color})`} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
export default CustomersRetentionRate