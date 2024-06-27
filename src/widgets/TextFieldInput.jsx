import { TextField } from "@mui/material"
import { MenuItem, Box } from "@mui/material"

const TextFieldInput = ({ label, select = false, data, padding = '', minW = '', change }) => {
  return (
    <TextField
      className={`${padding} !min-w-64`}
      select={select}
      onChange={change}
      label={label}
      sx={{
        input: { color: 'var(--text)', },
        label: { paddingTop: padding.slice(-4, -1), },
        '.Mui-focused': {
          color: 'var(--text)'
        },
        '.MuiSvgIcon-root': {
          color: 'var(--text)'
        },
        '.MuiSelect-select': {
          textTransform: 'capitalize'
        },
        '.MuiInputBase-root': {
          minWidth: minW
        }
      }}
      SelectProps={{
        MenuProps: {
          sx: {
            '.MuiList-root': {
              backgroundColor: 'var(--widget)',
              color: 'var(--text)',
              textTransform: 'capitalize'
            }
          }
        }
      }}
      fullWidth
      focused
      defaultValue={data[0]}
    >
      {
        // select &&
        data?.map((option, index) => (
          <MenuItem className="min-w-64" key={index} value={option}>
            {option}
          </MenuItem>
        ))
      }
    </TextField>

  )
}

export default TextFieldInput