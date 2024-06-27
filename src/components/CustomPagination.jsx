import { Pagination } from "@mui/material"

const CustomPagination = ({ num, onChange }) => {
  return (
    <Pagination
      className="pt-5 text-[--text]"
      count={num}
      color="primary"
      size="large"
      sx={{
        '.MuiButtonBase-root': {
          color: 'var(--text)'
        }
      }}
      onChange={(event, value) => onChange(value)}
    />
  )
}
export default CustomPagination