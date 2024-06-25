import imgBalance from '@assets/banners/balance.webp'
import { formatNumber } from '../utils/helpers'

const Balance = ({ balance, nameClass }) => {
  return (
    <div className={`${nameClass} `}>
      <img className='w-[200px]' src={imgBalance} alt="" />
      <div className="flex flex-col gap-5">
        <p className="text-4xl">{formatNumber(balance, '$')}</p>
        <p>Total Balance </p>
      </div>
    </div>
  )
}
export default Balance