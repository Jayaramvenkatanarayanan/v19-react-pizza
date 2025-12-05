import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import CartProvider from "../Presentation/providers/cartProvider";
import Header from "../Presentation/Components/Header";
import PizzaOfTheDay from "../Presentation/Components/PizzaOfTheDay";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "../Presentation/Components/ErrorBoundary";

const RootLayout = () => (
  <>
    <ErrorBoundary>
      <CartProvider>
        <Header />
        <Outlet />
        <PizzaOfTheDay />
      </CartProvider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </ErrorBoundary>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
