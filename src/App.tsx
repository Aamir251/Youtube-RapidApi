import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChannelDetail, VideoDetail, SearchFeed, Feed } from "./components"
import Root from './components/Root'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { useMemo } from 'react'
import "./App.css";
import { getDesignTokens } from './theme/getDesignTokens'

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
        path : "/category/:id",
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




function App() {
  const theme = useMemo(() => createTheme(getDesignTokens()),[])

  return (
   <ThemeProvider theme={theme} >
    <CssBaseline />
      <RouterProvider router={router} />
   </ThemeProvider>
  )
}

export default App
