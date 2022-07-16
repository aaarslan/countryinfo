import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [country, setCountry] = useState("United Kingdom");
  const [countryInfo, setCountryInfo] = useState(null);
  const [btnText, setBtnText] = useState("Get Info");

  /**
   *
   *
   * Fetch country info data
   */
  const getCountryInfo = async (e) => {
    e.preventDefault();

    try {
      setBtnText("Loading...");
      const res = await axios.get(`/api/info`, {
        params: { country },
      });

      setCountryInfo(res.data[0]);
    } catch (err) {
      console.log(err);
    }

    setBtnText("Get Info");
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Country <span className="text-danger">Info</span> App
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
        Take a quick look at some basic information about a country
      </h3>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Country..."
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button
            className="outline-none border border-danger text-secondary font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={getCountryInfo}
          >
            {btnText}
          </button>
        </form>
      </div>
      {countryInfo && (
        <div className="flex flex-col text-raleway mt-12 w-3/6 h-4/5 md:w-5/6 md:h-full md:mb-12">
          <table className="text-primary border-danger border md:text-sm md:mx-2">
            <tbody>
              <tr>
                <td className="border-danger border px-4 py-4">Name</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.name}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Flag</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.flag}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Code</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.code}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Dial Code</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.dialCode}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Continent</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.continent}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">
                  Currency Code
                </td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.currencyCode}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <p className="block mb-10 text-center text-primary text-xs">
          Abdallah Arslan
        </p>
      </div>
    </div>
  );
}
