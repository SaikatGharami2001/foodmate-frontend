import { useState, useEffect } from "react";
import { API_LINK } from "./utils/utils";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  // Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API_LINK);
      const response = await data.json();
      setAllData(response?.data?.cards);
    };
    fetchData();
  }, []);

  // Search Logic
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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default App;
