import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { API_LINK } from "./utils/utils";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API_LINK);
      const response = await data.json();
      setAllData(response?.data?.cards);
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    if (value.trim() === "") {
      setFilteredData(null);
      return;
    }

    const matched = allData.filter((res) => {
      const cuisines = res?.card?.card?.info?.cuisines || [];
      const name = res?.card?.card?.info?.name || "";
      const cuisinesMatch = cuisines.some((res) =>
        res.toLowerCase().includes(value)
      );
      const nameMatch = name.toLowerCase().includes(value);
      return cuisinesMatch || nameMatch;
    });

    setFilteredData(matched);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar allData={allData} handleSearch={handleSearch} />

      <div className="flex-grow">
        <Body
          allData={allData}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
