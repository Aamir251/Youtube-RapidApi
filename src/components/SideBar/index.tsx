import { Box, Stack, SxProps, Theme} from "@mui/material"
import Logo from "./Logo"
import Categories from "./Categories"
import { useMemo, useRef, useState } from "react"
import { useClickedOutside } from "../../hooks/useClickedOutside"


const sx: SxProps<Theme> = {
  backgroundColor : "secondary.main",
  width : {
    xs : "100%",
    md : "250px"
  },
  maxWidth : 280,
  zIndex : 10,
  height : {
    md : "92vh"
  },
  position : {
    xs : "fixed",
    md : "static",
    
  },
  right : 0,
  top : '0',
  overflowY : "scroll",
  transition : {
    xs : "transform 0.6s ease",
    md : "none"
  }
}

const SideBar = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(true);

  let ref = useRef<HTMLElement>(null);

  const { isClickedOutside }  = useClickedOutside(ref);

  const transformValue : string = useMemo(() => {
    return isOpen && !isClickedOutside ? "translateX(0px)" : "translateX(100%)";

  },[isOpen, isClickedOutside])

  
  return (
      <Stack
      component={'aside'}
      direction={'column'}
      height={'100%'}
      ref={ref}
      sx={{
        ...sx,
        transform : {
          xs : transformValue,
          md : "translateX(0)"
        }
      }}
      >
      <Box
        width='auto'
        height = "auto"
        color='text.secondary'
        paddingY={2}
        paddingX={2}
        gap={0.8}
        borderRadius={3}
        position='sticky'
        overflow={"hidden"}
        className="primary-sidebar"
        
      >
        <Logo />
        <Categories />
      </Box>
    </Stack>
  )
}

export default SideBar