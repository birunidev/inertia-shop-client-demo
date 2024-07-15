import CheckoutProvider from "context/CheckoutProvider";
import Router from "./Router";

function App() {
  return (
    <>
      <CheckoutProvider>
        <Router />
      </CheckoutProvider>
    </>
  );
}

export default App;
