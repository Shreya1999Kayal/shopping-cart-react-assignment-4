import { RouterProvider } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Toaster } from "sonner"
import Routes from "./routes/Routes"
import theme from "./theme/theme"
import CartProvider from "./context/cart/CartProvider"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster richColors position="top-right" closeButton />

      <CartProvider>
        <RouterProvider router={Routes} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App