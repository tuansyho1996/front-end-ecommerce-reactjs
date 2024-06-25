const BoxProductInfo = ({ product }) => {
  return (
    <div className="flex flex-col justify-between gap-10 p-5 bg-widget rounded-lg font-bold card">
      <div className="flex flex-col justify-between flex-1 gap-5">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <img className="rounded-md" src={product.img} alt="" />
            <i className="icon-dots-three-vertical" />
          </div>
          <div className="text-xl">{product.name}</div>
        </div>
        <div className="fex flex-col gap-1">
          <div className="text-green">Available: {product.in_stock}</div>
          <div className="text-sky-500">Already sold: {product.sold}</div>
          <div>Regular price:{product.regular_price}</div>
          <div>Sale price:{product.sale_price}</div>
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        <button className="border border-yellow text-yellow hover:bg-yellow hover:text-white py-2 px-7 rounded-full">Edit</button>
        <button className="border border-red text-red hover:bg-red hover:text-white py-2 px-7 rounded-full">Delete</button>
      </div>
    </div>
  )
}
export default BoxProductInfo