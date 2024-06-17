import LinearProgressPercent from "./LinearProgressPercent"

const data = [
  { label: 'Referral Program Budget', value: 27 },
  { label: 'Referral Rate by 100 Purchased', value: 67 },
  { label: 'Referral Rate by Campaign', value: 52 }
]

const AverageReferralRate = () => {
  return (
    <div className="flex p-5 flex-col w-full  justify-between">
      <div className="text-2xl">Average Referral Rate</div>
      {
        data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div>{item.label}</div>
                <div>{item.value}%</div>
              </div>
              <LinearProgressPercent value={item.value} />
            </div>
          )
        })
      }

    </div>
  )
}
export default AverageReferralRate