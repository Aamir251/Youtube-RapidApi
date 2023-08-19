import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
        <Link to={"/"}>
            <Typography>
                Return To Home Page
            </Typography>
        </Link>
    </div>
  )
}

export default ErrorPage