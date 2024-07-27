import { createContext, useContext, useEffect, useState } from "react"
import sellers from "@db/sellers"

const ProfileContext = createContext(undefined)

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null)

  const changeProfile = (profile) => {
    setProfile(profile)
  }

  useEffect(() => {
    setProfile(sellers[0])
  }, [])


  return (
    <ProfileContext.Provider value={{ profile: profile, changeProfile: changeProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => useContext(ProfileContext)