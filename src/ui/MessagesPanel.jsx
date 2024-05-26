import { SwipeableDrawer } from "@mui/material"
import { MESSAGE_OPTIONS } from '@constants/options'
import messages from "@db/messages"
import { useEffect, useState } from "react"
import TruncateMarkup from "react-truncate-markup"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
const step = 6

const MessagesPanel = ({ isOpen, close, open }) => {

  const [activeMessage, setActiveMessage] = useState('all')
  const [displayed, setDisplayed] = useState(step)

  useEffect(() => {
    setActiveMessage('all')
    setDisplayed(step)
  }, [isOpen])

  const getQty = (type) => {
    switch (type) {
      case 'all':
        return messages.length
      case 'archived':
        return messages.filter(msg => msg.archived === true).length
      default:
        return messages.filter(msg => msg.archived === false).length
    }

  }
  const filteredData = () => {
    switch (activeMessage) {
      case 'all':
        return messages
      case 'archived':
        return messages.filter(msg => msg.archived === true)
      default:
        return messages.filter(msg => msg.archived === false)
    }
  }
  const sortedData = () => filteredData().sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)))
  const handleClickLoadMore = () => {
    setDisplayed(displayed + step)
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
          boxShadow: ('var(--shadow)')
        }
      }}
      classes={{
        paper: 'sm:!w-[342px] !bg-widget w-full p-10'
      }}
    >
      <div className="flex justify-between">
        <div className="text-2xl">Messages</div>
        <button
          onClick={close}
        >
          <i className="icon-cancel-circle text-accent" />
        </button>
      </div>
      <div className="flex my-5">
        {
          MESSAGE_OPTIONS?.map((child, index) => {
            return (
              <button className={`pr-3 font-bold ${child.value === activeMessage ? 'text-accent' : ''}`} key={index}
                onClick={() => setActiveMessage(child.value)}
              >
                {`${child.label}(${getQty(child.value)})`}
              </button>
            )
          })
        }
      </div>
      {
        sortedData().slice(0, displayed).map((msg, index) => {
          return (
            <button key={index} className="message-item flex py-3 border-b-2 border-border">
              <img className="w-[50px] rounded-sm mr-3" src={msg.sender.avatar} alt="" />
              <div>
                <h6 className="name">
                  {msg.sender.firstName} {msg.sender.lastName}
                </h6>
                <div className="text-xs text-gray">
                  {dayjs(msg.createdAt).fromNow()}
                  <span className="ml-3">
                    {dayjs(msg.createdAt).format('h:mm A')}
                  </span>
                </div>
                <TruncateMarkup lines={2} >
                  <p className="text-sm">
                    {msg.content}
                  </p>
                </TruncateMarkup>
              </div>
            </button>
          )
        })
      }
      <button className="w-full rounded-md bg-accent mt-5 h-[40px] text-xl font-bold"
        onClick={() => handleClickLoadMore()}
      >
        Load more
      </button>
    </SwipeableDrawer>
  )
}

export default MessagesPanel