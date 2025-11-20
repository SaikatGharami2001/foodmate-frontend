import { useEffect, useState } from "react";
import { API_LINK } from "./utils/utils";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_LINK);
      const json = await response.json();
      setAllData(json);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#111827]">
        {/* Navbar stays at top */}
        <Navbar allData={setAllData} setFilteredData={setFilteredData} />

        {/* Body grows */}
        <div className="flex-grow">
          <Body filteredData={filteredData} />
        </div>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </>
  );
}

export default App;
