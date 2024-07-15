import "./App.css";
import Navbar from "./navbar";
import Carousel from "./carousels";
import Listings from "./listings";
import Footer from "./footer";
import { useState } from "react";

function App() {
  //State function to count when Add to Cart Clicked
  const [count, setCount] = useState(0);
  //Add to Cart Clicked Increment Function
  const handleInc = () => {
    setCount((previous) => previous + 1);
  };
  //Remove from Cart Clicked Decrement Function
  const handleDec = () => {
    setCount((previous) => previous - 1);
  };

  return (
    <>
      <header>
        {/* Count props passed to show cart items count  */}
        <Navbar count={count} />
        <Carousel />
      </header>
      <main>
        {/* Add to Cart Increment and remove from cart Decrement function passed */}
        <Listings handleInc={handleInc} handleDec={handleDec} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
