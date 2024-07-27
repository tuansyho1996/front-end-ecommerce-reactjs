import products from "@db/products"
import PagesHeader from "@layouts/PagesHeader"
import BoxProductInfo from "@widgets/BoxProductInfo"
import { Fragment, useEffect, useState } from "react"
import imgElectronic from '@assets/products/electronics/1.webp'
import imgFashion from '@assets/products/fashion/1.webp'
import imgFood from '@assets/products/food/1.webp'
import imgService from '@assets/products/services/1.webp'
import ItemIcon from "@widgets/ItemIcon"
import SelectComponent from "@widgets/SelectComponent"
import { sortProducts } from "@utils/helpers"

const categories = [
  { category: 'electronics', label: 'Electronics', value: 7541, color: 'bg-accent', logo: imgElectronic, icon: 'laptop' },
  { category: 'fashion', label: 'Fashion', value: 3897, color: 'bg-red', logo: imgFashion, icon: 't-shirt' },
  { category: 'food', label: 'Groceries', value: 9874, color: 'bg-green', logo: imgFood, icon: 'glass' },
  { category: 'services', label: 'Services', value: 6548, color: 'bg-yellow', logo: imgService, icon: 'miscellaneous_services' },
]

const typeSorts = ['Best Selling', 'Available', 'Price: High to Low', 'Price: Low to High']

const ProductsGrid = () => {
  const [categoryActive, setCategoryActive] = useState(categories[0])
  const [currentProducts, setCurrentProducts] = useState(null)
  const [typeSort, setTypeSort] = useState('Best Selling')



  useEffect(() => {
    const productsFilterCtg = products?.filter(product => product.category === categoryActive.category)
    setCurrentProducts(sortProducts(productsFilterCtg, typeSort))
  }, [categoryActive, typeSort])

  const handleOnChangeCategory = (value) => {
    setCategoryActive(categories.find(category => category.category === value))
  }
  return (
    <>
      <PagesHeader title='Products Grid' />
      <div className="m-b-10 flex justify-between mb-5">
        <div className="p-5 flex gap-5 bg-widget rounded-lg">
          <ItemIcon icon={categoryActive.icon} bg={categoryActive.color} px="px-3" py="py-3" />
          <div className="text-xl font-bold">{categoryActive.label}</div>
        </div>
        <div className="flex gap-5">
          <SelectComponent data={categories.map(ctg => ctg.category)} onChange={handleOnChangeCategory} value={categoryActive.category} />
          <SelectComponent data={typeSorts} onChange={(e) => setTypeSort(e)} value={typeSort} />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 ">
        {
          currentProducts &&
          currentProducts.map((product, index) => {
            return (
              <Fragment key={index}>
                <BoxProductInfo product={product} />

              </Fragment>
            )
          })
        }
      </div>
    </>

  )
}

export default ProductsGrid