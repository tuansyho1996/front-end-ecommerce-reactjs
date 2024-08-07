import { TextField } from "@mui/material"
import { MenuItem, Box } from "@mui/material"

const TextFieldInput = ({ error = false, helperText, require = false, value = '', label, select = false, data = [], padding = '', minW = '', change, fullWidth = true, outLine = true, variant = 'outlined', placeholder = '', type = '' }) => {
  return (
    <TextField
      error={error}
      helperText={error ? helperText : false}
      className={`${padding} `}
      select={select}
      onChange={change}
      label={label}
      sx={{
        input: { color: 'var(--text)', },
        label: { paddingTop: padding.slice(-4, -1), },
        '.Mui-focused': {
          color: 'var(--text)',
          border: 'none'
        },
        '.MuiSvgIcon-root': {
          color: 'var(--text)'
        },
        '.MuiSelect-select': {
          textTransform: 'capitalize',
          minWidth: minW
        },
        '.MuiOutlinedInput-notchedOutline': {
          border: !outLine ? '0!important' : '1px solid var(--input-border)!important',
        },
      }}
      SelectProps={{
        MenuProps: {
          sx: {
            '.MuiList-root': {
              backgroundColor: 'var(--widget)',
              color: 'var(--text)',
              textTransform: 'capitalize'
            },
            '.MuiPaper-root': {
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);'
            }
          }
        }
      }}
      focused
      value={select ? data[0] : value}
      variant={variant}
      fullWidth={fullWidth}
      placeholder={placeholder}
      type={type}
      required={require}
    >
      {
        // select &&
        data?.map((option, index) => (
          <MenuItem className="min-w-64" key={index} value={option}>
            {option}
          </MenuItem>
        ))
      }
    </TextField >

  )
}

export default TextFieldInput