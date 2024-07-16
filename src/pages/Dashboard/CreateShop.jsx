import { Alert, Snackbar } from "@mui/material"
import TextFieldInput from "@widgets/TextFieldInput"
import { useEffect, useState } from "react"
import { createNewShop } from "@services/admin"
import { useLocation, useNavigate } from 'react-router-dom';


const CreateShop = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')
  const [logo, setLogo] = useState(null)
  const [preview, setPreview] = useState(null)
  const [open, setOpen] = useState(false)
  const [severity, setSerity] = useState('')
  const [contentAlert, setContentAlert] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    if (!logo) {
      setPreview(null)
      return
    }
    const objectURL = URL.createObjectURL(logo)
    setPreview(objectURL)
    return () => URL.revokeObjectURL(objectURL)
  }, [logo])
  useEffect(() => {
    console.log(open)
  }, [open])

  const selectFileLogo = (event) => {
    if (!event.target.files || !event.target.files.length === 0) {
      setLogo(null)
      return
    }
    setLogo(event.target.files[0])
  }
  const handleCreateShop = async () => {
    if (!name || !email || !password || !confirmPassword || !logo) {
      setSerity('error')
      setContentAlert('You need to fill in all required information')
      setOpen(true)
      return
    }
    if (password !== confirmPassword) {
      setSerity('error')
      setContentAlert('Paswords do not match')
      setOpen(true)
      return
    }
    const newShop = await createNewShop({ name, email, password }, logo)
    if (newShop.status !== 201) {
      setSerity('error')
      setContentAlert(newShop.data.message)
      setOpen(true)
      return
    }
    navigate('/sellers-list', { state: { key: "value" } })
    setSerity('success')
    setContentAlert(newShop.message)
    setOpen(true)
  }

  return (
    <div className="max-w-[600px] container mx-auto my-10 gap-5">
      <div className="basis-2/3 flex flex-col gap-5">
        <div className="bg-widget p-5">
          <div className="flex flex-col gap-5">
            <p className="text-lg font-bold">General</p>
            <div className="flex gap-3">
              <TextFieldInput label='Name' value={name} placeholder="Name" change={(event) => setName(event.target.value)} />
              <TextFieldInput label='Email' value={email} placeholder="Email" change={(event) => setEmail(event.target.value)} />
            </div>
            <div className="flex gap-3">
              <TextFieldInput label='Password' value={password} placeholder="Password" type="password" change={(event) => setPassword(event.target.value)} />
              <TextFieldInput label='Confirm password' value={confirmPassword} placeholder="Confirm password" type="password" change={(event) => setConfirmPassword(event.target.value)} />
            </div>
          </div>
        </div>
        <div className="bg-widget p-5">
          <p className="text-lg font-bold">Media</p>
          {
            preview
              ?
              <div className="flex justify-center items-center relative">
                <div className="p-2 border border-dashed flex justify-center items-center" id="preview-logo">
                  <img className="w-40" src={preview} alt="" />
                  <i id="remove-logo" className="icon-cancel-circle text-9xl absolute opacity-50 hidden cursor-pointer" onClick={() => setLogo(null)} />
                </div>

              </div>
              :
              <label htmlFor="add-logo" className="flex justify-center">
                <div className="p-5 border border-dashed ">
                  <i className="icon-image text-4xl" />
                </div>
              </label>
          }

          <input type="file" id="add-logo" hidden onChange={(event) => selectFileLogo(event)} />
        </div>
        <button className="rounded-full primary py-3 px-10 bg-widget" onClick={() => handleCreateShop()}>
          Create Shop
        </button>
      </div>

    </div>
  )
}

export default CreateShop