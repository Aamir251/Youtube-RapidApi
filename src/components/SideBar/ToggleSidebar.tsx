import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import { SxProps, Theme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react'
type PropType = {
    isOpen : boolean,
    setIsOpen : Dispatch<SetStateAction<boolean>>
}

const style : SxProps<Theme> = {
  position : "fixed",
  top : 16,
  right : 16,
  width : 30,
  height : 30,
  zIndex : 100,
  display : {
    sx : "block",
    md : "none"
  }
}

const ToggleSidebar = ({ isOpen, setIsOpen } : PropType) => {
  return (
    isOpen ? <CancelIcon
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      setIsOpen(false)
    }}
    cursor={'pointer'}
    sx={style}
  />
  :
  <MenuIcon
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
      setIsOpen(true)
    }}
    cursor={'pointer'}
    sx={style}
  />
  )
}

export default ToggleSidebar