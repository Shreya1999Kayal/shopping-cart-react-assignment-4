import { createBrowserRouter } from "react-router-dom"
import UserWrapper from "../layouts/userPanel/UserWrapper"
import Products from "../pages/Products"
import Cart from "../pages/Cart"
import NotFound from "../pages/NotFound"

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <UserWrapper />,
        children: [
            { index: true, element: <Products /> },
            { path: "cart", element: <Cart /> }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default Routes