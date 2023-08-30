import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

function Detail() {
  const { name } = useParams();
  const url = `https://countries-api-v7sn.onrender.com/countries/slug/${name.toLowerCase()}`;
  const { data: countryData, isPending, error } = useFetch(url);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  console.log(countryData);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1320px] mx-auto px-[20px] mt-[150px]">
          <Link className="dark:text-white" to={-1}>
            <button
              type="button"
              class="flex gap-2 text-[#111517] bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#2B3844] dark:hover:bg-[#354451] focus:outline-none dark:focus:ring-blue-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                  fill="#111517"
                  className="dark:fill-white"
                />
              </svg>
              Back
            </button>
          </Link>
          <div className="mt-[60px] flex extraMd:flex-col">
            <img
              src={countryData?.flags?.png}
              alt=""
              className="w-[540px] h-[350px] xl:h-[300px]"
            />
            <div className="ml-[80px] extraMd:ml-0 extraMd:mt-8">
              <h3 className="font-bold text-3xl text-[#111517] dark:text-white">
                {countryData?.name?.common}
              </h3>
              <div className="flex mt-[23px] extraLg:flex-col">
                <ul className="mr-[141px] xl:mr-[40px] ">
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Native Name:{" "}
                    </span>
                    <span className="text-[#111517] text-[16px] dark:text-white">
                      {countryData?.name?.nativeName}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Population:{" "}
                    </span>
                    <span className="text-[#111517] text-[16px] dark:text-white">
                      {countryData?.population}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Region:{" "}
                    </span>
                    <span className="text-[#111517] text-[16px] dark:text-white">
                      {countryData?.region}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Sub Region:{" "}
                    </span>
                    <span className="text-[#111517] text-[16px] dark:text-white">
                      {countryData?.subregion}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Capital:{" "}
                    </span>
                    <span className="text-[#111517] text-[16px] dark:text-white">
                      {countryData?.capital[0]}
                    </span>
                  </li>
                </ul>
                <ul className="extraLg:mt-8">
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Top Level Domain:{" "}
                    </span>
                    <span className="text-[#111517] text-[16px] dark:text-white">
                      België
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Currencies:{" "}
                    </span>
                    <span className="text-[#111517] text-[16px] dark:text-white">
                      {countryData?.currencies}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                      Languages:{" "}
                    </span>
                    {countryData?.languages.map((item) => {
                      return (
                        <span className="dark:text-white mr-2">{item}</span>
                      );
                    })}
                  </li>
                </ul>
              </div>
              <div className="mt-[68px] extraMd:mt-[30px]">
                <span className="font-bold text-[16px] text-[#111517] dark:text-white">
                  Border Countries:{" "}
                </span>
                {countryData?.borders.map((item) => {
                  return (
                    <Link to={`/countries/${item?.slug.toLowerCase()}`}>
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none shadow-shadow bg-white rounded-lg border  hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        {item?.common}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
