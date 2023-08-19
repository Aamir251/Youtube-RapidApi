import { Box, Stack, SxProps, Theme} from "@mui/material"
import Logo from "./Logo"
import Categories from "./Categories"
import { useRef, useState, MouseEvent } from "react"
import ToggleSidebar from "./ToggleSidebar"



const sx: SxProps<Theme> = {
  
  width : {
    xs : "100%",
    md : 230
  },
  zIndex : 10,
  height : {
    xs : "100vh",
    md : "92vh"
  },
  position : {
    xs : "fixed",
    md : "sticky",
    
  },
  right : "-100%",
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

  let sidebarRef = useRef<HTMLElement>(null);
  
  const transformValue : string = isOpen  ? "0px" : "-100%";
  const handleClick = (e : MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if(!target.classList.contains('sidebar-container')) {
      setIsOpen(false)
    }
  }

  return <>
      <Stack
      component={'aside'}
      direction={'column'}
      ref={sidebarRef}
      className="primary-sidebar"
      onClick={handleClick}
      sx={{
        ...sx,
        right : {
          xs : transformValue,
          md : "translateX(0)"
        }
      }}
      >
        <Box
          width={'100%'}
          height = "auto"
          color='text.secondary'
          paddingY={2}
          paddingX={2}
          gap={0.8}
          borderRadius={3}
          position='relative'
          maxWidth={{
            xs : 280,
            md : '100%'
          }}
          marginLeft={'auto'}
          sx={{
            backgroundColor  :"#263153",
            height : "100%",
            overflowY : "scroll"
          }}
          className="sidebar-container"
          
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

