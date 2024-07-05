import LinearProgressPercent from "@widgets/LinearProgressPercent"

const InfoPerCentByLinear = ({ label, value, total, size }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <LinearProgressPercent value={value / total * 100} size={size} />
    </div>
  )
}

export default InfoPerCentByLinear