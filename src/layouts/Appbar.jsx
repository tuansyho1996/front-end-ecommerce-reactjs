import Headroom from "react-headroom"
import { Search } from "@ui/Search"
import { LOCALES } from "@constants/options"
import CustomTooltip from "@ui/CustomTooltip"
import { useEffect, useState } from "react"
import NotificationsPanel from "@ui/NotificationsPanel"
import MessagesPanel from "@ui/MessagesPanel"
import SideBar from "./SideBar"
import { useNavigate } from "react-router-dom"
import { useShop } from "@contexts/shopContext"


const LocaleMenu = ({ active, setActive, setOpen }) => {
  return (
    <div className="flex flex-col gap-2.5 p-2">
      {
        LOCALES.map((locale, index) => {
          return (
            <button key={index} className={`w-fit flex gap-2.5 items-center ${locale.alias === active ? 'text-accent' : ''}`}
              onClick={() => {
                setActive(locale.alias)
                setOpen(false)
              }}
            >
              <img className="w-7 rounded-full" src={`${locale.flag}`} />
              <span>{locale.name}</span>
              <span>({locale.alias})</span>
            </button>
          )

        })
      }
    </div>

  )
}

export const AppBar = ({ theme, toggleTheme }) => {
  const [activeLocale, setActiveLocale] = useState('EN')
  const [flagActive, setFlagActive] = useState(LOCALES[0].flag)
  const [openOptionFlag, setOpenOptionFlag] = useState(false)
  const [openNotification, setOpenNotification] = useState(false)
  const [openMessages, setOpenMessages] = useState(false)
  const [openSideBar, setOpenSideBar] = useState(false)
  const navigate = useNavigate()
  const { shop } = useShop()
  useEffect(() => {
    const locale = LOCALES.find(item => item.alias === activeLocale)
    setFlagActive(locale.flag)
  }, [activeLocale])
  return (
    <Headroom>
      <div className="flex items-center justify-between">
        <button className="icon text-2xl leading-none"
          onClick={() => setOpenSideBar(true)}
        >
          <i className="icon-bars" />
        </button>
        <div className="flex-1">
          <Search wrapperClass={'ml-3 search  max-w-[1054px] mr-auto'} />
        </div>
        <div className="flex items-center xl:gap-[26px]">
          {
            theme === 'light' ?
              <button className="icon "
                onClick={() => toggleTheme()}
              >
                <i className="icon-sun text-2xl" />
              </button>
              :
              <button className="icon "
                onClick={() => toggleTheme()}
              >
                <i className="icon-moon-o text-2xl" />
              </button>
          }
          <CustomTooltip title={<LocaleMenu active={activeLocale} setActive={setActiveLocale} setOpen={setOpenOptionFlag} />} open={openOptionFlag} >
            <button className='w-fit'
              onClick={() => setOpenOptionFlag(!openOptionFlag)}
            >
              <img className="rounded-full w-10" src={flagActive} alt="" />
            </button>
          </CustomTooltip>
          <div className="relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5">
            <button className="text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]"
              onClick={() => setOpenNotification(true)}
            >
              <i className="icon-bell-o" />
            </button>
            <span className="absolute -top-1.5 -right-1.5 xl:-top-5 xl:-right-4 rounded-full bg-red w-3 h-3 xl:w-6 xl:h-6 xl:flex xl:items-center xl:justify-center border-[2px] border-body">
              <span>7</span>
            </span>
          </div>
          <div className="relative h-fit mt-1.5 xl:self-end xl:mt-0 xl:mr-1.5">
            <button className="text-lg leading-none text-gray dark:text-gray-red xl:text-[20px]"
              onClick={() => setOpenMessages(true)}
            >
              <i className="icon-message-square" />
            </button>
            <span className="absolute -top-1.5 -right-1.5 xl:-top-5 xl:-right-4 rounded-full bg-green w-3 h-3 xl:w-6 xl:h-6 xl:flex xl:items-center xl:justify-center border-[2px] border-body ">
              <span>2</span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <button onClick={() => navigate('/profile')} className="flex items-center justify-center account bg-blue-900 rounded-full w-[50px] h-[50px]">
              {/* <i className="icon-user text-2xl" /> */}
              <img className=" rounded-full w-[50px] h-[50px]" src={shop.logo} alt="" />
            </button>
          </div>

        </div>
        <NotificationsPanel
          isOpen={openNotification}
          close={() => setOpenNotification(false)}
          open={() => setOpenNotification(true)}
        />
        <MessagesPanel
          isOpen={openMessages}
          close={() => setOpenMessages(false)}
          open={() => setOpenMessages(true)}
        />
        <SideBar
          isOpen={openSideBar}
          close={() => setOpenSideBar(false)}
          open={() => setOpenSideBar(true)}
        />
      </div>
    </Headroom>
  )
}
