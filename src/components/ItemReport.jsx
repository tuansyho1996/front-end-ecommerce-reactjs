import { formatNumber, formatNumberBasic } from "../utils/helpers"
import Trend from "../widgets/Trend"

const ItemReport = ({ name, amount, rate, trend }) => {
  return (
    <div className="flex justify-between w-full p-7 rounded-lg bg-body">
      <div className="w-[70px]">{name}</div>
      <span>{formatNumberBasic(amount, '$')}</span>
      <Trend rate={rate} trend={trend} />
    </div>
  )
}
export default ItemReport