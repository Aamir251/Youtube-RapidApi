
import { ChangeEvent } from "react"
import { Input, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const handleSubmit = () => {

  }
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    
  }
  return (
    <Paper 
     
      component={'form'} 
      onSubmit={handleSubmit}
      sx={{
        pl : 2,
        boxShadow : "none",
        borderRadius : 5,
        backgroundColor : "transparent",
        display : "flex",
        alignItems : "center",
        gap : 1,
        border : "1px solid #263153",
        width : "calc(100% - 25px)",
        maxWidth : 600
      }} 
      style={{
      }}
      >
        <SearchIcon 
          sx={{
            fill : "#2D3354"
          }}
          
        />
        <Input
          placeholder="Search..."
          onChange={handleChange}
          sx={{
            width : "100%",
            backgroundColor : "transparent",
            border : "none",
            paddingY : 0.3,
            ":before" : {
              border : "none",
            },
            color : "text.secondary",
            ":hover": {
              borderBottom : "none !important",
              ":before" : {
                borderBottom : "none !important"
              },
             
            }
          }}
        />
    </Paper>
  )
}

export default SearchBar