import PagesHeader from "@layouts/PagesHeader"
import LinearProgressPercent from "@widgets/LinearProgressPercent"
import { useEffect, useState } from "react"
import imgElectronic from '@assets/products/electronics/1.webp'
import imgFashion from '@assets/products/fashion/1.webp'
import imgFood from '@assets/products/food/1.webp'
import imgService from '@assets/products/services/1.webp'
import { formatNumber } from "@utils/helpers"
import ItemIcon from "@widgets/ItemIcon"
import SwiperProducts from "@widgets/SwiperProducts"
import HeaderTitleProducts from "@widgets/HeaderTitleProducts"

const data = [
  { label: 'Electronics', value: 7541, color: 'bg-accent', logo: imgElectronic, icon: 'laptop' },
  { label: 'Fashion', value: 3897, color: 'bg-red', logo: imgFashion, icon: 't-shirt' },
  { label: 'Food & Drinks', value: 9874, color: 'bg-green', logo: imgFood, icon: 'glass' },
  { label: 'Services', value: 6548, color: 'bg-yellow', logo: imgService, icon: 'miscellaneous_services' },
]



const TopProducts = () => {
  const [sumCtg, setSumCtg] = useState(0)
  useEffect(() => {
    const sum = data?.reduce((a, b) => a + b.value, 0)
    setSumCtg(sum)
  }, [])

  return (
    <>
      <PagesHeader title='Top Products' />
      <div className="flex flex-col gap-20">
        <div className="grid grid-cols-6 gap-10">
          <div className="bg-widget card col-span-2 p-5 flex flex-col gap-3 rounded-lg">
            <div className="text-lg">Top Sales By Categories</div>
            {
              data.map((ctg, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between">
                      <div>{ctg.label}</div>
                      <div>{ctg.value}</div>
                    </div>
                    <LinearProgressPercent label={ctg.color} value={ctg.value / sumCtg * 100} />
                  </div>
                )
              })
            }
          </div>
          {
            data.map((item, index) => {
              return (
                <div key={index} className="flex  p-5 flex-col gap-3 bg-widget rounded-lg card">
                  <div className="basis-2/3">
                    <img className="rounded-lg object-contain" src={item.logo} alt={item.label} />
                  </div>
                  <div className="flex gap-5 font-bold items-center">
                    {/* <i className={`${item.icon} text-2xl bg-${item.color} px-3 py-2 rounded-lg`} /> */}
                    <ItemIcon icon={item.icon} bg={item.color} py="py-3" px="px-3" />
                    <div className="flex flex-col gap-1">
                      <div>{item.label}</div>
                      <div className="text-xl">
                        {formatNumber(item.value, '$')}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <HeaderTitleProducts title='Electronics' bgIcon='bg-accent' icon='laptop' />
            <SwiperProducts />
          </div>
          <div className="">
            <HeaderTitleProducts title='Fashion' bgIcon='bg-red' icon='t-shirt' />
            <SwiperProducts category="fashion" />
          </div>
          <div className="">
            <HeaderTitleProducts title='Food & Drinks' bgIcon='bg-green' icon='glass' />
            <SwiperProducts category="food" />
          </div>
          <div className="">
            <HeaderTitleProducts title='Services' bgIcon='bg-yellow' icon='miscellaneous_services' />
            <SwiperProducts category="services" />
          </div>
        </div>
      </div>

    </>
  )
}
export default TopProducts