import { SwipeableDrawer } from "@mui/material"
import Drawer from "./style"
import logo from '@assets/logo/zone style-logo/cover.png'
import ROUTES from "@constants/routes"
import { Collapse } from "@mui/material"
import { NavLink } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


const SideBar = ({ isOpen, close, open }) => {
  const [active, setActive] = useState('')
  const [activeSubmenu, setActiveSubmenu] = useState('')
  const [activeLinkMenu, setActiveLinkMenu] = useState('')
  let location = useLocation()

  useEffect(() => {
    ROUTES.forEach((route) => {
      if (route.links) {
        route.links.forEach(link => {
          if (link.path === location.pathname) {
            setActiveSubmenu(link.name)
            setActive(route.name)
          }
        })
      }
      if (route.path === location.pathname) {
        setActiveLinkMenu(route.name)
      }
    })
  }, [location.pathname])

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={close}
      onOpen={open}
    >
      <div className="logo">
        <img className="h-[100px]" src={logo} alt="zone style" />
      </div>
      <nav className="menu">
        {
          ROUTES && ROUTES.length > 0 &&
          ROUTES.map((route, index) => {
            return (
              <Fragment key={route.name}>
                {route.links ?
                  <>
                    <div className={`menu_item ${active === route.name ? 'active' : ''} `} key={`${route.name}${index}`}
                      onClick={() => setActive(active === route.name ? '' : route.name)}
                    >
                      <i className={`icon-${route.icon} mr-3`}></i>
                      {route.name}
                    </div>
                    <Collapse in={active === route.name} className="flex flex-col sub-menu_item " unmountOnExit>
                      {
                        route.links.map((link, indexLink) => {
                          return (
                            <NavLink key={indexLink}
                              to={link.path}
                            >
                              <div className={`menu_item gap-2.5 !ml-5 !text-base ${activeSubmenu === link.name ? 'active' : ''}`}
                                onClick={() => {
                                  setActiveSubmenu(link.name)
                                  setActiveLinkMenu('')
                                  close()
                                }}
                              >
                                <i className="icon-radio-unchecked text-[8px]" />
                                {
                                  link.name
                                }
                              </div>
                            </NavLink>
                          )
                        })
                      }
                    </Collapse>
                  </>
                  :
                  <NavLink to={route.path}>
                    <div key={`${route.name}${index}`} className={`menu_item ${activeLinkMenu === route.name ? 'active' : ''}`}
                      onClick={() => {
                        setActiveLinkMenu(route.name)
                        setActive('')
                        setActiveSubmenu('')
                        close()
                      }}
                    >
                      <i className={`icon-${route.icon} mr-3`}></i>
                      {route.name}
                    </div>
                  </NavLink>}
              </Fragment>

            )
          })
        }
      </nav>
    </Drawer>
  )
}
export default SideBar