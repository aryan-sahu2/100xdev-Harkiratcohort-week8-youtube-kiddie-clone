export function Searchbar() {
  return (
    <div className="">
      <form>
        <div className="w-96 flex  text-zinc-800 border border-gray-500 rounded-full text-sm ">
          <input
            type="text"
            id="default-search"
            className="w-full bg-transparent pl-4 text-white border-none outline-none"
            placeholder="Search"
            required
          />
          <button className="text-gray-400 border-l-[1px]  border-gray-500 font-bold py-3 px-4  inline-flex items-center">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
