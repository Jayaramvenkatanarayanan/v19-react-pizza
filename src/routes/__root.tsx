import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import CartProvider from "../Presentation/providers/cartProvider";
import Header from "../Presentation/Components/Header";
import PizzaOfTheDay from "../Presentation/Components/PizzaOfTheDay";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const RootLayout = () => (
  <>
    <CartProvider>
      <Header />
      <Outlet />
      <PizzaOfTheDay />
    </CartProvider>
    <TanStackRouterDevtools />
    <ReactQueryDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
