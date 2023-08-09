import { Box, Stack} from "@mui/material"
import Logo from "./Logo"
import Categories from "./Categories"

const SideBar = () => {
  return (
    <Stack
      direction={'column'}
    
      height={'100%'}
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
        top={30}
        overflow={"hidden"}
        className="primary-sidebar"
        sx={{
          backgroundColor : "secondary.main",
          width : {
            md : "250px"
          },
          height : {
            md : "92vh"
          }
        }}
        style={{
          overflowY : "scroll"
        }}
      >
        <Logo />
        <Categories />
      </Box>
    </Stack>
  )
}

export default SideBar