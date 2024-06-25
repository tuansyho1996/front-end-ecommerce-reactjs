import PagesHeader from "@layouts/PagesHeader"
import TabsProductsManagement from "@widgets/TabsProductsManagement"

const ProductsManagement = () => {
  return (
    <>
      <PagesHeader title='Products Management' />
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <button className="bg-green px-10 py-3 rounded-full">+ Add New Product</button>
            <button className="bg-sky-500 px-10 py-3 rounded-full">Export CSV</button>
          </div>
          <div className="flex rounded-lg border-2 border-accent px-5 items-center">
            <input type="text" className="flex-1 bg-body outline-none" />
            <i className="icon-search cursor-pointer text-accent" />
          </div>
        </div>
        <TabsProductsManagement />
      </div>
    </>
  )
}

export default ProductsManagement