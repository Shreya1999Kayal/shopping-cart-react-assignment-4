import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { toast } from "sonner"
import useCart from "../hooks/useCart.hook"
import { ProductData } from "../services/json/products.data"
import { formatPrice } from "../services/helper/price.helper"
import type { Product } from "../types/interface/cart.interface"
import { ShoppingCart } from "lucide-react"

//step5
const ProductList = () => {
  const { cartState, handleAddItem } = useCart()

  // how many of this product are already in the cart (0 if none)
  const getQtyInCart = (id: number) => {
    return cartState.items.find((item) => item.id === id)?.qty ?? 0
  }

  const onAddToCart = (product: Product) => {
    handleAddItem(product)
    toast.success(`${product.name} added to cart`)
  }

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        },
      }}
    >
      {ProductData.map((product) => {
        const qtyInCart = getQtyInCart(product.id)

        return (
          <Card
            key={product.id}
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              overflow: "hidden",
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={product.image.url}
              alt={product.name}
              sx={{ objectFit: "cover", bgcolor: "grey.100" }}
            />

            <CardContent sx={{ flex: 1 }}>
              <Chip label={product.category} size="small" color="secondary" sx={{ mb: 1 }} />
              <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", lineHeight: 1.3 }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {product.description}
              </Typography>
            </CardContent>

            <CardActions
              sx={{ justifyContent: "space-between", alignItems: "center", px: 2, pb: 2 }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
                  {formatPrice(product.price)}
                </Typography>
                {qtyInCart > 0 && (
                  <Typography variant="caption" color="text.secondary">
                    In cart: {qtyInCart}
                  </Typography>
                )}
              </Box>

              <Button
                variant="contained"
                onClick={() => onAddToCart(product)}
                sx={{ textTransform: "none", fontWeight: "bold", borderRadius: 2, fontSize: 12 }}
              >
                <ShoppingCart size={20} />
             
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        )
      })}
    </Box>
  )
}

export default ProductList