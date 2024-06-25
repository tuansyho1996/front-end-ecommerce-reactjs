import { TextField } from "@mui/material"
import { MenuItem, Box } from "@mui/material"

const TextFieldInput = ({ label, select = false, data, padding = '' }) => {
  console.log('padding', padding.slice(-4, -1))
  return (

    <TextField
      className={`${padding}`}
      select={select}
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
      value={data ? data[0] : null}
    >
      {
        // select &&
        data?.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))
      }
    </TextField>

  )
}

export default TextFieldInput