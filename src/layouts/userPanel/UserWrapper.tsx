import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { Box } from "@mui/material"



const UserWrapper = () => {
  return (
    <Box sx={{ display: "fleX", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  )
}

export default UserWrapper