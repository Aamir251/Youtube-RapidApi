import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChannelDetail, VideoDetail, SearchFeed, Feed } from "./components"
import Root from './components/Root'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, ThemeOptions } from '@mui/material'
import { useMemo } from 'react'
import "./App.css";
import { CategoryContextProvider } from './Context/CategoryContext'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root />,
    children : [
      {
        path : "/",
        element : <Feed />
      },
      {
        path : "/video/:id",
        element : <VideoDetail />
      },
      {
        path : "/channel/:id",
        element : <ChannelDetail />
      },
      {
        path : "/search/:searchTerm",
        element : <SearchFeed />
      },
    ]
  },
 
])

const getDesignTokens = () : ThemeOptions => ({
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


function App() {
  const theme = useMemo(() => createTheme(getDesignTokens()),[])

  return (
   <ThemeProvider theme={theme} >
    <CssBaseline />
    <CategoryContextProvider>
      <RouterProvider router={router} />
    </CategoryContextProvider>
   </ThemeProvider>
  )
}

export default App
