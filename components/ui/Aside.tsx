import Link from "next/link";

export const Aside = () => {
  return (
    <aside className="basis-1/4 p-8">
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search a movie"
        type="text"
        name="search"
      />

      <div className="flex gap-4 p-4 justify-center">
        <Link
          href="upcoming"
          className="rounded-full bg-sky-400 hover:bg-sky-500 text-white p-2 text-xs"
        >
          Upcoming
        </Link>
        <Link
          href="/"
          className="rounded-full bg-sky-400 hover:bg-sky-500 text-white p-2 text-xs"
        >
          Populars
        </Link>
        <Link
          href="top-rated"
          className="rounded-full bg-sky-400 hover:bg-sky-500 text-white p-2 text-xs"
        >
          Top Rated
        </Link>
      </div>

      <h1 className="font-sans text-2xl mt-2">Popular Movies</h1>

      <div className="border-solid border-2 border-sky-400 rounded-lg p-3 mt-3 hover:bg-sky-400 hover:text-white">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <p>Sort</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="border-solid border-2 border-sky-400 rounded-lg p-3 mt-3 hover:bg-sky-400 hover:text-white">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <p>Where to watch</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="border-solid border-2 border-sky-400 rounded-lg p-3 mt-3 hover:bg-sky-400 hover:text-white">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <p>Filters</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
};
