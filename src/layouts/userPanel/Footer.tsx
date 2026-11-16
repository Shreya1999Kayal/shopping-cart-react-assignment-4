import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "primary.contrastText",
        textAlign: "center",
        py: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Shopping Cart. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer