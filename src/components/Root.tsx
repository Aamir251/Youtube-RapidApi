import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import { Grid } from "@mui/material";
import SearchBar from "./Navbar/SearchBar";

const Root = () => {
  return (
    <Grid container spacing={3} >
        <Grid item xs='auto' >
          <SideBar />
        </Grid>
        <Grid item xs >
          <SearchBar />
          <Outlet />
        </Grid>

    </Grid>
  )
}

export default Root