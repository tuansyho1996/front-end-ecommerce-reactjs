import ItemIcon from "./ItemIcon"
import Trend from "./Trend"
import { formatNumber } from "@utils/helpers"

const RevenuInfoBox = (props) => {
  return (
    <div className="p-5 flex flex-col gap-5 bg-widget basis-1/2 rounded-lg  card font-bold">
      <div className="flex justify-between items-start">
        <ItemIcon bg={props.bg} icon={props.icon} width="w-12" height="h-12" />
        <i className="icon-dots-three-vertical text-2xl" />
      </div>
      <div className="flex justify-between items-center">
        <p>{props.label}</p>
        <Trend rate={Math.abs(props.trend)} trend={props.trend ? 'up' : 'down'} width="" />
      </div>
      <div className="text-2xl">{formatNumber(props.num, '$')}</div>
    </div>
  )
}
export default RevenuInfoBox