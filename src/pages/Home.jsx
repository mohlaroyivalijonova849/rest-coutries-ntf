import { useFetch } from "../hooks/useFetch";

import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import Country from "../components/Country";

function Home() {
  const regions = [
    {
      name: "Filter by region",
    },
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
  ];
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const {
    data: countriesData,
    // isPending,
    // error,
  } = useFetch(
    searchText
      ? searchText
      : "https://countries-api-v7sn.onrender.com/countries?limit=250"
  );

  const handleSearchFilterInput = (type, value) => {
    if (type === "search") {
      setSearchText(
        `https://countries-api-v7sn.onrender.com/countries?search=${value}`
      );
    } else if (type === "region") {
      if (value === "Filter by region") {
        setSearchText(
          "https://countries-api-v7sn.onrender.com/countries?limit=250"
        );
        setSelectedRegion(""); // Reset selected region state
      } else {
        setSelectedRegion(value);
        setSearchText(
          `https://countries-api-v7sn.onrender.com/countries?region=${value}`
        );
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="max-w-[1300px] mx-auto flex items-center justify-between mt-[150px] container p-8 sm:flex-col sm:justify-start sm:items-start">
            <div className="w-[480px] sm:mb-10 sm:w-full">
              {/*  md:flex-row md:items-center md:justify-between */}
              <form className="form-search" autoComplete="off">
                <div className="relative mr-5 sm:mr-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm shadow-shadow text-gray-900 border border-[#fff] rounded-lg bg-[#fff]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search for a country…"
                    onChange={(e) =>
                      handleSearchFilterInput("search", e.target.value)
                    }
                  />
                </div>
              </form>
            </div>
            {/* select options */}
            <form>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className="w-52 py-3 px-4 outline-none shadow rounded text-[#2B3844] dark:text-gray-400 dark:bg-[#2B3844] dark:focus:bg-[#2B3844]"
                value={selectedRegion}
                onChange={(e) =>
                  handleSearchFilterInput("region", e.target.value)
                }
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div>
            {countriesData && <Country countriesData={countriesData} />}
          </div>
        </div>
      )}
    </>
  );
  // Country
}

export default Home;
