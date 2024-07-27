import sellers from "@db/sellers"
import { importManyShops } from "@services/admin"

const ImportData = () => {
  const handleClickImportShop = async () => {
    const res = await importManyShops(sellers)
    console.log(res)
  }
  return (
    <>
      <button className="p-5 bg-green mt-5 w-1/3 rounded-lg" onClick={() => handleClickImportShop()}>Import Shop</button>
    </>
  )
}
export default ImportData