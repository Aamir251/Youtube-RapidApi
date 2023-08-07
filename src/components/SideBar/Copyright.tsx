import { Typography } from "@mui/material/"


const Copyright = () => {
  return (
    <Typography 
        position='sticky'
        bottom={0}
        variant='body2'
        sx={{
            mt : 1.5,
            color : "text.secondary",
            opacity : 0.6,
        }}
    >
        Copyright 2022 Ecodeshub
    </Typography>
  )
}

export default Copyright