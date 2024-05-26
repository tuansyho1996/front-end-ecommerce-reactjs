
import Tooltip from "@mui/material/Tooltip"
import { tooltipClasses } from "@mui/material/Tooltip"

const CustomTooltip = ({ children, title, open }) => {
  return (
    <Tooltip
      open={open}
      title={title}
      classes={{
        popper: 'p-[15px]',
        tooltip: `!bg-widget shadow p-5 !rounded-md !font-body !text-body-text`,
        arrow: '!text-widget'
      }}
      arrow={true}
    >
      {children}
    </Tooltip>
  )
}
export default CustomTooltip