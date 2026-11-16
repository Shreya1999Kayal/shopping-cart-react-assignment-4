import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import CartItemRow from "../components/CartItemRow"
import useCart from "../hooks/useCart.hook"
import { formatPrice } from "../services/helper/price.helper"
import { ShoppingCart } from "lucide-react"

const Cart = () => {
    const { cartState, cartCount, totalPrice } = useCart()

    // empty cart -> friendly message + one button back to products
    if (cartState.items.length === 0) {
        return (
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Paper
                    variant="outlined"
                    sx={{ textAlign: "center", py: 8, px: 3, borderRadius: 3, borderStyle: "dashed" }}
                >
                    <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", mb: 1 }}>
                        Your cart is empty
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                        Add some products and they will show up here.
                    </Typography>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        sx={{ textTransform: "none", fontWeight: "bold", borderRadius: 2, px: 4, py: 1 }}
                    >
                        Browse Products
                    </Button>
                </Paper>
            </Container>
        )
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* heading row: title + item count on the left, Browse Products on the right */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    mb: 4,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                        <ShoppingCart size={28} />
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
                            Your Cart
                        </Typography>
                        <Typography color="text.secondary">
                            {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
                        </Typography>
                    </Box>
                </Box>

                <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        borderRadius: 2,
                        px: 3,
                        py: 1,
                        borderWidth: 2,
                        "&:hover": {
                            borderWidth: 2,
                            backgroundColor: "primary.main",
                            color: "primary.contrastText",
                        },
                    }}
                >
                    Browse Products
                </Button>
            </Box>

            {/* left = cart rows, right = order summary (stacked on small screens) */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1fr 320px" },
                    gap: 3,
                    alignItems: "start",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {cartState.items.map((item) => (
                        <CartItemRow key={item.id} item={item} />
                    ))}
                </Box>

                <Paper
                    variant="outlined"
                    sx={{
                        p: 3,
                        borderRadius: 3,
                        position: { md: "sticky" },
                        top: { md: 16 },
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                        Order Summary
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                        <Typography color="text.secondary">Items</Typography>
                        <Typography>{cartCount}</Typography>
                    </Box>

                    <Divider sx={{ mb: 1.5 }} />

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h6">Total</Typography>
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "primary.main" }}>
                            {formatPrice(totalPrice)}
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default Cart