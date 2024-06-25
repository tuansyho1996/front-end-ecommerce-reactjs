import { Box, Select, InputLabel, MenuItem, FormControl } from "@mui/material"

const SelectComponent = ({ data, onChange, value, }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            color: 'var(--text)',
            border: 'solid 1px var(--accent)'
          }}
          classes={{
            icon: '!text-[--text]'
          }}
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
            ".MuiInputBase-input": {
              padding: '10px 60px 10px 10px!important',
            }
          }}
        >
          {
            data?.map((item, index) => {
              return (
                <MenuItem

                  key={index}
                  value={item}
                >
                  {item}
                </MenuItem>
              )
            })
          }

        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectComponent




