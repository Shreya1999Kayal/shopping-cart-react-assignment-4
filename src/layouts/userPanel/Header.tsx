import { NavLink } from "react-router-dom"
import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@mui/material"
import useCart from "../../hooks/useCart.hook"

const Navbar = () => {
  // Navbar only needs the count, but it reads it from the same shared cart state as ProductList and Cart
  const { cartCount } = useCart()

  const links = [
    { name: "Products", path: "/" },
  ]

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="h1">
          Shopping Cart
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {links.map((link) => (
            <Button
              key={link.path}
              component={NavLink}
              to={link.path}
              end
              sx={{
                color: "primary.contrastText",
                fontWeight: "normal",
                "&.active": { color: "secondary.main", fontWeight: "bold" },
                "&:hover": { color: "secondary.light" },
              }}
            >
              {link.name}
            </Button>
          ))}

          {/* cart link - Badge shows the total quantity from CartContext */}
          <Button
            component={NavLink}
            to="/cart"
            sx={{
              color: "primary.contrastText",
              fontWeight: "normal",
              "&.active": { color: "secondary.main", fontWeight: "bold" },
              "&:hover": { color: "secondary.light" },
            }}
          >
            <Badge
              badgeContent={cartCount}
              color="secondary"
              sx={{ "& .MuiBadge-badge": { right: -14 } }}
            >
              Cart
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar