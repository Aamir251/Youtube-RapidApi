import { ThemeOptions } from "@mui/material"

export const getDesignTokens = () : ThemeOptions => ({
    palette : {
      background : {
        default : '#142043',
      },
      primary : {
        main : "#142043",
        dark : "#142043",
        
      },
      secondary : {
        main : "#263153"
      },
      text : {
        secondary : "#D6E0FF",
        primary : "#CDDAEC"
      }
     
    }
})