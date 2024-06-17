import { Select, MenuItem } from "@mui/material"
import SelectSortStyled from "./style"

const SelectSort = ({ sort, setSort, children }) => {
  return (
    <SelectSortStyled
      className="!text-header border-border border-[1px]"
      value={sort}
      onChange={setSort}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      sx={{
        boxShadow: "none",
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
        {
          border: 0,
        },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          border: 0,
        },
      }}
    >
      <MenuItem value='bs'>Best Selling</MenuItem>
      <MenuItem value='htl'>Ratting: High to low</MenuItem>
      <MenuItem value='lth'>Ratting: Low to high</MenuItem>
      <MenuItem value='a-z'>By name:A-Z</MenuItem>
      <MenuItem value='z-a'>By name:Z-A</MenuItem>
    </SelectSortStyled>
  )
}
export default SelectSort
