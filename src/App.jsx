import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

const apple = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const { a, b, c, d, e } = apple;
function App() {
  return (
    <>
      <Navbar />
      <Card name={((a, b), c)} status="Rich" howMuchRich="Very Rich" />
      <Footer />
    </>
  );
}

export default App;
