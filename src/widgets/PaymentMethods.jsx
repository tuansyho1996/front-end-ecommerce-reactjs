import { FormControlLabel, Radio } from "@mui/material"

const PaymentMethods = ({ logo, value }) => {
  return (
    <div className="flex flex-col">
      <div className="w-[60px] flex flex-col items-center justify-center">
        <img className="rounded-lg w-full h-[40px] object-contain bg-[--text] px-3 py-2 rounded-lg" src={logo} alt="" />
        <FormControlLabel className="!m-0" value={value} control={<Radio color="primary" sx={{
          '.MuiSvgIcon-root': {
            color: 'var(--input-border)'
          }
        }} />} />
      </div>

    </div>
  )
}

export default PaymentMethods