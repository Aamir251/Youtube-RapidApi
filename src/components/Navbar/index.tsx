import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack 
        direction={'row'}
        alignItems='center'
        p={2}
        justifyContent='space-between'
        sx={{
            position : 'sticky',
            background : "#000",
            top : 0,
        }}
    >
        <Link 
            to='/' 
            style={{
                display : "flex",
                alignItems : "center" 
            }} 

        >
            <img
                src={"/images/youtube-logo.svg"}
                alt="logo"
                height={30}
                width={30}
            />
        </Link>

        <SearchBar />
    </Stack>
  )
}

export default Navbar;