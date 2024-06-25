import PagesHeader from "@layouts/PagesHeader"
import TextFieldInput from "@widgets/TextFieldInput"
import moment from "moment";
import DatePickerInput from "@widgets/DatePickerInput";
import { Link } from "react-router-dom";
import MC from '@assets/payment/mc.svg'
import AP from '@assets/payment/applepay.svg'
import BP from '@assets/payment/bitpay.svg'
import GP from '@assets/payment/googlepay.svg'
import PP from '@assets/payment/paypal.svg'
import VS from '@assets/payment/visa.svg'
import PaymentMethods from "@widgets/PaymentMethods";
import { Fragment } from "react";





const dataSelect = {
  category: ['electronics', 'groceries', 'fashtion', 'services'],
  productType: ['simple product', 'variable product', 'grouped product', 'services product'],
  stockStatus: ['in stock', 'low inventory', 'out of stock', 'on demand', 'temporarily unavailable'],
  unit: ['pieces', 'boxes', 'kilogams']
}
const payments = [
  { label: 'Master Card', value: 'MC', logo: MC },
  { label: 'Visa', value: 'VS', logo: VS },
  { label: 'Google pay', value: 'GP', logo: GP },
  { label: 'Appel pay', value: 'AP', logo: AP },
  { label: 'Pay Pal', value: 'PP', logo: PP },
  { label: 'Bit pay', value: 'BP', logo: BP }
]

const ProductEditor = () => {
  return (
    <>
      <PagesHeader title='PRODUCT EDITOR' />
      <div className="py-10 px-5 bg-widget card">
        <p className="text-xl font-bold mb-5">
          Product Setting
        </p>
        <p className="mb-2">Product image</p>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5 basis-2/3 ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <label htmlFor="upload-1" className="basis-2/5 bg-body rounded-md border border-dashed border-[--text] ">
                  <div
                    style={{
                      width: '100%',
                      paddingTop: '100%',
                      position: 'relative'
                    }}
                    type="file"
                  >
                    <input id="upload-1" type="file" style={{ display: 'none' }} />
                    <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center">
                      <i className="icon-image text-4xl" />
                      <p>Image Browse</p>
                    </div>
                  </div>
                </label>
                <label htmlFor="upload-2" className="basis-2/5 bg-body rounded-md border border-dashed border-[--text]">
                  <div
                    style={{
                      width: '100%',
                      paddingTop: '100%',
                      position: 'relative'
                    }}
                    type="file"
                  >
                    <input id="upload-2" type="file" style={{ display: 'none' }} />
                    <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center">
                      <i className="icon-image text-4xl" />
                      <p>Image Browse</p>
                    </div>
                  </div>
                </label>
                <div className="basis-1/5 flex flex-col gap-3">
                  <label htmlFor="upload-2" className=" bg-body rounded-md border border-dashed border-[--text]">
                    <div
                      style={{
                        width: '100%',
                        paddingTop: '100%',
                        position: 'relative'
                      }}
                      type="file"
                    >
                      <input id="upload-2" type="file" style={{ display: 'none' }} />
                      <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center">
                        <i className="icon-image text-4xl" />
                        <p>Image Browse</p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="upload-2" className=" bg-body rounded-md border border-dashed border-[--text]">
                    <div
                      style={{
                        width: '100%',
                        paddingTop: '100%',
                        position: 'relative'
                      }}
                      type="file"
                    >
                      <input id="upload-2" type="file" style={{ display: 'none' }} />
                      <div className="absolute left-0 right-0 bottom-0 top-0 flex flex-col justify-center items-center">
                        <i className="icon-image text-4xl" />
                        <p>Image Browse</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link >More Gallery Options</Link>
                <p>Donec luctus metus nec enim imperdiet, in dignissim risus fringilla. Fusce bibendum vulputate scelerisque. Donec in nunc quam. Suspendisse at lorem eleifend</p>
                <Link>Attachment files <i className="icon-drive_file_move" /></Link>
              </div>
            </div>
            <div>
              <div className="flex gap-3">
                <div className="basis-2/5">
                  <TextFieldInput className='basis-2/5' label='Attributes' data={dataSelect.productType} select={true} />
                </div>
                <div className="basis-2/5">
                  <TextFieldInput className='basis-2/5' label='L*W*H, inches' />
                </div>
                <div className="basis-1/5">
                </div>

              </div>
            </div>
            <div>
              <p className="mb-2">Description</p>
              <textarea rows={4} className="resize w-full rounded-md bg-body p-3" />
            </div>
          </div>
          <div className="flex flex-col basis-1/3 justify-between">
            <div className="flex flex-col gap-3">
              <TextFieldInput label='Product name' />
              <div className="flex gap-3 pt-2">
                <div className="basis-1/2">
                  <TextFieldInput label='Brand name' />
                </div>
                <div className="basis-1/2">
                  <TextFieldInput data={dataSelect.category} select={true} label='category' />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <div className="basis-1/2 ">
                  <TextFieldInput label='Regular price' />
                </div>
                <div className="basis-1/2 ">
                  <TextFieldInput label='Sale price' />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="basis-1/2">
                  <DatePickerInput label='Schedule' />
                </div>
                <div className="basis-1/2">
                  <TextFieldInput label='Promotion' padding="!pt-[8px]" />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <div className="basis-1/2">
                  <TextFieldInput data={dataSelect.productType} select={true} label='Product type' />
                </div>
                <div className="basis-1/2">
                  <TextFieldInput data={dataSelect.stockStatus} select={true} label='Stock status' />
                </div>
              </div>
              <div className="pt-2">
                <TextFieldInput label='SKU ' />
              </div>
              <div className="flex gap-3 pt-2">
                <div className="basis-1/2">
                  <TextFieldInput label='Stock status' select={true} data={dataSelect.stockStatus} />
                </div>
                <div className="basis-1/3">
                  <TextFieldInput label='Quantity in stock' />
                </div>
                <div className="basis-1/6">
                  <TextFieldInput data={dataSelect.unit} select={true} label='Unit' />
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sx">Payment Methods</p>
                <div className="flex gap-3 mt-2 justify-between">
                  {
                    payments.map((pm, index) => {
                      return (
                        <Fragment key={index}>
                          <PaymentMethods value={pm.value} logo={pm.logo} />
                        </Fragment>
                      )
                    })
                  }
                  <div className="h-[40px] w-[60px] bg-body flex justify-center items-center text-2xl font-bold border border-[input-border] rounded-lg">+</div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <button className="px-20 py-4 rounded-full bg-indigo-500">Save to Drafts</button>
              <button className="px-20 py-4 rounded-full bg-green">Publish Product</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductEditor


