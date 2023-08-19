
import { ChangeEvent } from "react"
import { Input, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, FormEvent } from 'react';
import { convertToSlug, slugToWords } from "../../utils/helpers";
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = () => {

  const { pathname } = useLocation()
  const [ searchQuery, setSearchQuery ] = useState<string>('')
  const isSearchPage = pathname.includes("search");
  const navigate = useNavigate()


  useEffect(() => {
    if(isSearchPage) {
      const query = pathname.split("/")[2]
      setSearchQuery(slugToWords(query));
    }
  },[])
  
  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!searchQuery) return;

    navigate(`/search/${convertToSlug(searchQuery)}`)
  }
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery('')
  }
  return (
    <Paper 
      component={'form'} 
      onSubmit={handleSubmit}
      sx={{
        boxShadow : "none",
        borderRadius : 5,
        backgroundColor : "transparent",
        display : "flex",
        alignItems : "center",
        gap : 1,
        border : "1px solid #263153",
        width : "calc(100% - 25px)",
        maxWidth : 600,
        pr : 1.5,
        pl : 3,
      }} 
    >
      
      <Input
        placeholder="Search..."
        onChange={handleChange}
        value={searchQuery}
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
      {
        searchQuery ? <ClearIcon
          onClick={clearSearch}
          sx={{
            fill : "#2D3354",
            cursor : "pointer"
          }}
        /> : <SearchIcon
        type="submit"
        sx={{
          fill : "#2D3354",
          cursor : "pointer"
        }}
      />
      }
    </Paper>
  )
}

export default SearchBar