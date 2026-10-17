'use client';

export default function Page() {
  return (
    <main>
      <h1>Search Products</h1>

      <div className="flex flex-wrap -mx-3 mb-6">
        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="search">
          Search 
          <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="search" />

        </label>


        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="username">
          Order by
          <select id="countries" className="hadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </label>
      </div>



    </main>
  );
}