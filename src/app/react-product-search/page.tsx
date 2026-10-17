'use client';

import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { current } from "@/data/demos";

const demo = current.find(({ route }) => route === "/react-product-search");

export default function Page() {
  return (
    <main>
      {demo && <HeroDemo title={demo.title} description={demo.description} />}

      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="search">
              Search
            </label>
            <input className="appearance-none block w-full border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="search" type="text" placeholder="search" />
          </div>


          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="username">
              Order by
            </label>
            <div className="relative">
              <select id="countries" className="appearance-none block w-full border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </form>
      <DemoFooter />
    </main>
  );
}
