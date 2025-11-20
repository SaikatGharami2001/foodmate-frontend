import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#111827]">
        {/* Navbar stays at top */}
        <Navbar />

        {/* Body grows */}
        <div className="flex-grow">
          <Body />
        </div>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App;
