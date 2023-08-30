import { Link } from "react-router-dom";

function Country({ countriesData }) {
  return (
    <div className="max-w-[1300px] mx-auto mt-[48px]">
      <ul className="flex flex-wrap justify-center gap-16">
        {countriesData.data &&
          countriesData.data.map((item) => {
            return (
              <Link to={`/countries/${item.name.slug}`}>
                <div
                  className="max-w-[264px] h-[380px]  bg-white border border-[#fff] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                  key={item._id}
                >
                  <img
                    className="rounded-t-lg w-[267px] h-[160px]"
                    src={item?.flags?.png}
                    alt=""
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name.common}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Population: {item.population}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Region: {item.region}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Capital: {item.capital[0]}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default Country;
