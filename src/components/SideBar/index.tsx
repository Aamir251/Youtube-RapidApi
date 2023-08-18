import { Box, Stack, SxProps, Theme} from "@mui/material"
import Logo from "./Logo"
import Categories from "./Categories"
import { useMemo, useRef, useState } from "react"
import { useClickedOutside } from "../../hooks/useClickedOutside"
import ToggleSidebar from "./ToggleSidebar"



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
    md : "sticky",
    
  },
  right : "-400px",
  top : {
    xs : "0px",
    md : "20px"
  },
  overflowY : {
    xs : "visible",
    md : "hidden"
  },
  transition : {
    xs : "right 0.6s ease",
    md : "none"
  }
}

const SideBar = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  let ref = useRef<HTMLElement>(null);

  const { isClickedOutside }  = useClickedOutside(ref);

  const transformValue : string = useMemo(() => {
    return isOpen && !isClickedOutside ? "0px" : "-400px";

  },[isOpen, isClickedOutside])

  
  return <>
      <Stack
      component={'aside'}
      direction={'column'}
      height={'100%'}
      ref={ref}
      className="primary-sidebar"
      sx={{
        ...sx,
        right : {
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
          position='relative'
          
          
          
        >
          <Logo />
          <Categories />

          {/* this button is only for mobile */}

          
        </Box>
      </Stack>
    <ToggleSidebar isOpen={isOpen} setIsOpen={setIsOpen}  />
    </>
}

export default SideBar;

