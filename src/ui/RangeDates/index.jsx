import RangeDatePicker from "./styles";
import dayjs from "dayjs";
const RangeDate = () => {
  return (
    <RangeDatePicker
      focused
      className="bg-body p-2 border-border border-[1px]"
      format="YYYY/MM/DD"
      defaultValue={[
        dayjs('2024-01-01', 'YYYY/MM/DD'),
        dayjs('2024-09-01', 'YYYY/MM/DD'),
      ]}
    />
  )
}
export default RangeDate