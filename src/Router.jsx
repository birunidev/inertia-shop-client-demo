import loadable from "@loadable/component";

// convert to loadable
const Home = loadable(() => import("pages/Home"));
const Shop = loadable(() => import("pages/Shop"));
const ShopDetail = loadable(() => import("pages/ShopDetail"));
const Checkout = loadable(() => import("pages/Checkout"));
const CheckoutSuccess = loadable(() => import("pages/CheckoutSuccess"));
const MyAccount = loadable(() => import("pages/MyAccount"));
const MyAddresses = loadable(() => import("pages/MyAddresses"));
const MyOrderDetail = loadable(() => import("pages/MyOrderDetail"));
const MyOrders = loadable(() => import("pages/MyOrders"));
const Login = loadable(() => import("pages/Auth/Login"));
const Register = loadable(() => import("pages/Auth/Register"));
const ForgotPassword = loadable(() => import("pages/Auth/ForgotPassword"));
const ResetPassword = loadable(() => import("pages/Auth/ResetPassword"));
const VerifyEmail = loadable(() => import("pages/Auth/VerifyEmail"));
const VerifiedEmail = loadable(() => import("pages/Auth/VerifiedEmail"));
const RestrictedRoute = loadable(() => import("containers/RestrictedRoute"));
const ProtectedRoute = loadable(() => import("containers/ProtectedRoute"));

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    children: [
      {
        path: "",
        element: <Shop />,
      },
      {
        path: ":slug",
        element: <ShopDetail />,
      },
    ],
  },
  {
    path: "/checkout",
    children: [
      {
        path: "",
        element: <Checkout />,
      },
      {
        path: "success",
        element: <CheckoutSuccess />,
      },
    ],
  },
  {
    path: "/my-account",
    element: <ProtectedRoute />,
    children: [
      {
        path: "orders",
        children: [
          {
            path: "",
            element: <MyOrders />,
          },
          {
            path: ":order_code",
            element: <MyOrderDetail />,
          },
        ],
      },
      {
        path: "addresses",
        element: <MyAddresses />,
      },
      {
        path: "",
        element: <MyAccount />,
      },
    ],
  },
  {
    path: "/auth",
    element: <RestrictedRoute />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "verify-email/success",
        element: <VerifiedEmail />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
