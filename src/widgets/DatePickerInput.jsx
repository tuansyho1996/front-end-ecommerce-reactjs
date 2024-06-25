import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerInput = ({ label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          className="w-full"
          label={label}
          slotProps={{
            textField: { color: 'primary', focused: true },
          }}
          sx={{
            input: { color: 'var(--text)', },
            '.MuiSvgIcon-root': {
              color: 'var(--text)'
            },
            '.MuiStack-root': {
              padding: '0px!important'
            },
            '.MuiFormLabel-root': {
              color: 'var(--text)'
            }
          }}

        />
      </DemoContainer>
    </LocalizationProvider>
  )
}
export default DatePickerInput