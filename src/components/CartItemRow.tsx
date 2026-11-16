import { Box, Button, Chip, Paper, Typography } from "@mui/material"
import { toast } from "sonner"
import useCart from "../hooks/useCart.hook"
import { formatPrice } from "../services/helper/price.helper"
import type { CartItem } from "../types/interface/cart.interface"

interface CartItemRowProps {
  item: CartItem;
}

//step5
const CartItemRow = ({ item }: CartItemRowProps) => {
  const { handleRemoveItem, handleIncreaseQty, handleDecreaseQty } = useCart()

  const onRemove = () => {
    handleRemoveItem(item.id)
    toast.success(`${item.name} removed from cart`)
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
        p: 2,
        borderRadius: 3,
        transition: "box-shadow 0.2s, border-color 0.2s",
        "&:hover": { boxShadow: 3, borderColor: "primary.main" },
      }}
    >
      {/* picture - grey box behind it so a missing picture still looks tidy */}
      <Box
        component="img"
        src={item.image.url}
        alt={item.name}
        sx={{
          width: 88,
          height: 88,
          flexShrink: 0,
          objectFit: "cover",
          borderRadius: 2,
          bgcolor: "grey.100",
          color: "text.secondary",
          fontSize: 12,
          overflow: "hidden",
        }}
      />

      {/* name, category and price of one piece */}
      <Box sx={{ flex: 1, minWidth: 160 }}>
        <Chip label={item.category} size="small" color="secondary" sx={{ mb: 0.5 }} />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", lineHeight: 1.3 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatPrice(item.price)} each
        </Typography>
      </Box>

      {/* quantity stepper: - 2 + */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <Button
          size="small"
          aria-label={`Decrease quantity of ${item.name}`}
          disabled={item.qty <= 1}
          onClick={() => handleDecreaseQty(item.id)}
          sx={{ minWidth: 36, fontSize: 18, borderRadius: 0 }}
        >
          −
        </Button>
        <Typography sx={{ minWidth: 32, textAlign: "center", fontWeight: "bold" }}>
          {item.qty}
        </Typography>
        <Button
          size="small"
          aria-label={`Increase quantity of ${item.name}`}
          onClick={() => handleIncreaseQty(item.id)}
          sx={{ minWidth: 36, fontSize: 18, borderRadius: 0 }}
        >
          +
        </Button>
      </Box>

      {/* price of this row = price * qty */}
      <Typography
        variant="subtitle1"
        sx={{ minWidth: 90, textAlign: "right", fontWeight: "bold", color: "primary.main" }}
      >
        {formatPrice(item.price * item.qty)}
      </Typography>

      <Button color="error" size="small" onClick={onRemove} sx={{ textTransform: "none" }}>
        Remove
      </Button>
    </Paper>
  )
}

export default CartItemRow