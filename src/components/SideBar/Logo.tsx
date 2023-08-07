import { Link } from "react-router-dom"
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Link 
        style={{
            textDecoration : "none",
            color : "inherit",
            display : "flex",
            alignItems : "center",
            gap : 10,
            paddingLeft : "1rem",
            marginBottom : "0.8rem"
        }}
        to={"/"}
    >
        <img
            src="/images/youtube-logo.svg"
            alt=""
            width={30}
            height={30}
        />
        <Typography
            variant="body1"
            component={'span'}
            fontSize={12}
            sx={{ 
            display : "block",
            }} 
            >
            YOUTUBE
        </Typography>
    </Link>
  )
}

export default Logo