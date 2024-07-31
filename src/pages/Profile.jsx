import TextFieldInput from "@widgets/TextFieldInput"
import { useShop } from "@contexts/shopContext"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { editShop } from "@services/admin"
import { Snackbar, Alert, Button, Modal, Box } from "@mui/material"
import { changeAvatar } from "@services/admin"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--widget)',
  border: '1px solid var(--input-border)',
  boxShadow: 24,
  p: 4,
};

const Profile = () => {
  const [logo, setLogo] = useState(null)
  const [previewLogo, setPreviewLogo] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const [severity, setSeverity] = useState('success')
  const [message, setMessage] = useState('')
  const [openModalEditAvatar, setOpenModalEditAvatar] = useState(false)
  const { shop, changeShop } = useShop()
  const location = useLocation()
  const handleSaveChange = async () => {
    if (!name || !email || !phone || !address) {
      setMessage('Missing required fields')
    }
    const res = await editShop({ name, email, phone, address, _id: shop._id })
    if (res.status !== 200) {
      setOpenAlert(true)
      setMessage(res.message)
      setSeverity('error')
      return
    }
    res.metadata.logo = shop.logo
    changeShop(res.metadata)
    setOpenAlert(true)
    setMessage('Updated information profile successfully')
    setSeverity('success')
  }
  const saveAvatar = async () => {
    if (logo) {
      const res = await changeAvatar({ logo, userId: shop?._id })
      if (res.status === 200) {
        setOpenAlert(true)
        setSeverity('success')
        setMessage('Edit Avatar successfully')
        changeShop(res.metadata)
      }
      else {
        setSeverity('error')
        setMessage(res.message)
      }
    }
  }
  const removePreviewLogo = () => {
    setPreviewLogo('')
  }
  const selectFileAvatar = (event) => {
    if (!event.target.files[0]) {
      setLogo(null)
      return
    }
    setLogo(event.target.files[0])
  }
  useEffect(() => {
    if (!logo) {
      setPreviewLogo(null)
      return
    }
    const objectUrl = URL.createObjectURL(logo)
    setPreviewLogo(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [logo])
  useEffect(() => {
    setPreviewLogo(shop?.logo)
    setName(shop?.name)
    setEmail(shop?.email)
    setPhone(shop?.phone)
    setAddress(shop?.address)
  }, [openModalEditAvatar])
  return (
    <>
      <div className="flex gap-5 flex-col items-center mt-10">
        <div className="logo flex flex-col"  >
          <img src={shop?.logo} className="w-32 h-32 rounded-full" alt="" />
          <Button className="!text-accent" onClick={() => setOpenModalEditAvatar(true)}>Edit Avatar</Button>
        </div>
        <div className="flex gap-3">
          <TextFieldInput value={name} label='Name' change={(event) => setName(event.target.value)} />
          <TextFieldInput value={email} label='Email' change={(event) => setEmail(event.target.value)} />
        </div>
        <div className="flex gap-3">
          <TextFieldInput value={address} label='Address' change={(event) => setAddress(event.target.value)} />
          <TextFieldInput value={phone} label='Phone' change={(event) => setPhone(event.target.value)} />
        </div>
        <button onClick={() => handleSaveChange()} className="py-3 px-10 rounded-lg bg-green font-bold">Save change</button>
      </div>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={() => setOpenAlert(false)}>
        <Alert
          onClose={() => setOpenAlert(false)}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Modal
        open={openModalEditAvatar}
        onClose={() => setOpenModalEditAvatar(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center justify-center ">
            {
              previewLogo
                ?
                <div onClick={() => removePreviewLogo()} className="preview-logo relative flex items-center justify-center cursor-pointer">
                  <img src={previewLogo} alt="" className="cursor-pointer w-32 h-32 rounded-full object-contain" />
                  <i className="icon-cancel-circle text-[128px] w-[128px] h-[128px] remove-logo absolute opacity-50 hidden " />
                </div>
                :
                <div>
                  <label htmlFor="logo">
                    <i className="icon-avatar text-[128px]" />
                  </label>
                  <input onChange={(event) => selectFileAvatar(event)} type="file" hidden id="logo" />
                </div>
            }
            <button className="py-2 px-5 bg-accent rounded-lg" onClick={() => saveAvatar()}>Save Avatar</button>
          </div>
        </Box>
      </Modal>
    </>
  )
}
export default Profile