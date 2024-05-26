import { SwipeableDrawer } from "@mui/material"
import notifications from "../db/notifications"
import { NOTIFICATION_OPTIONS } from "../constants/options"
import { useEffect, useState } from "react"


const NotificationsPanel = ({ isOpen, close, open }) => {
  const [typeNotification, setTypeNotification] = useState('all')

  useEffect(() => {

  }, [])

  const getQty = (type) => {
    if (type === 'all') {
      return notifications.length
    }
    else {
      return notifications.filter(noti => noti.category === type).length
    }
  }
  const filteredData = () => {
    if (typeNotification == 'all') {
      return notifications
    }
    return notifications.filter(noti => noti.category === typeNotification)
  }
  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={close}
      onOpen={open}
      sx={{
        '& .MuiDrawer-paper': {
          color: 'var(--text)',
          boxShadow: 'var(--shadow)',
        }
      }}
      classes={{
        paper: '!bg-widget flex flex-col !w-full sm:!w-[342px] p-10'
      }}
    >
      <div className="flex justify-between ">
        <span className="font-bold text-2xl">Notifications</span>
        <button className="icon" onClick={close} aria-label="close-notifications">
          <i className="icon-cancel-circle" />
        </button>
      </div>
      <div className="flex list-noti-type">
        {
          NOTIFICATION_OPTIONS.map((noti, index) => {
            return (
              <button key={index} className={`pr-2 pt-3 font-bold ${typeNotification === noti.value ? 'text-accent' : ''}`}
                onClick={() => setTypeNotification(noti.value)}
              >
                {
                  `${noti.label}(${getQty(noti.value)})`
                }
              </button>
            )
          })
        }
      </div>
      <div className="list-noti-item mt-3">
        {
          filteredData().map((noti, index) => {
            return (
              <div key={index} className="border-b-2 flex border-border py-3">
                <img className="rounded w-[50px] h-[50px]" src={noti.user.avatar} alt="" />
                <div className="pl-3">
                  <div className=" name">{noti.user.firstName} {noti.user.lastName}</div>
                  <div className="text-noti">{noti.text}</div>
                  <div className="sub-noti">{noti.subcategory}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </SwipeableDrawer>
  )
}
export default NotificationsPanel