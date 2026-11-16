import { Box, Container, Typography } from "@mui/material"
import { Store } from "lucide-react"
import ProductList from "../components/ProductList"

const Products = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* heading row: same pattern as the Cart page */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
        {/* icon in a green gradient square */}
        <Box
          sx={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            color: "#fff",
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            boxShadow: "0 6px 16px rgba(5, 150, 105, 0.35)",
          }}
        >
          <Store size={28} />
        </Box>

        <Box>
          {/* heading text filled with the same gradient */}
          <Typography
            variant="h4"
            component="h2"
            sx={{
              width: "fit-content",
              fontWeight: 800,
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Products
          </Typography>
          <Typography color="text.secondary">
            Pick your favourites and add them to your cart
          </Typography>
        </Box>
      </Box>

      <ProductList />
    </Container>
  )
}

export default Products