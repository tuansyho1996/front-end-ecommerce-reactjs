
const Trend = ({ trend, rate, width = 'w-[90px]' }) => {
  return (
    <div className={`${width}`}>
      {
        trend === 'up' &&
        <p className="text-emerald-600">
          <i className="icon-arrow-up" />&nbsp;
          {rate}%</p>
      }
      {
        trend === 'down' &&
        <p className="text-red">
          <i className="icon-arrow-down" />&nbsp;
          {rate}%</p>
      }
    </div>
  )
}

export default Trend