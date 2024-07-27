import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react'
import products from '@db/products'
import { useEffect, useState } from 'react'
import { Rating } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const SwiperProducts = ({ category = 'electronics' }) => {
  const [currentProduct, setCurrentProduct] = useState(null)
  useEffect(() => {
    setCurrentProduct(products.filter(product => product.category === category).slice(0, 6))
  }, [])
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1536: {
            slidesPerView: 3,
          }
        }}
        spaceBetween={20}
        slidesPerView={1}
        speed={1500}
        rewind={false}
        loop
      >
        {
          currentProduct?.map((product, index) => {
            return (
              <SwiperSlide key={index} className='!h-auto'>
                <div className="flex gap-2 bg-widget p-5 font-bold !h-full  ">
                  <div className="flex flex-col gap-3 justify-between">
                    <div className="flex flex-col gap-3">
                      <div className="w-full">
                        <img className='rounded-lg' src={product.img} alt={product.name} />
                      </div>
                      <div className="text-xl">{product.name}</div>
                    </div>
                    <flex className="flex-col gap-3">
                      <Rating value={product.rating} />
                      <div className="text-green">Available: {product.in_stock}</div>
                      <div className="text-sky-500">Already sold: {product.sold}</div>
                    </flex>
                  </div>
                </div>

              </SwiperSlide>

            )
          })
        }

      </Swiper>
    </>
  )
}
export default SwiperProducts