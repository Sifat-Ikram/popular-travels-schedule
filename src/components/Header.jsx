const Header = () => {
  const navLinks = (
    <>
      <li className="cursor-pointer">Dashboard</li>
      <li className="cursor-pointer">Master Price</li>
      <li className="cursor-pointer">Custom Price</li>
      <li className="cursor-pointer">Calender</li>
      <li className="cursor-pointer">Reports</li>
    </>
  );
  return (
    <div className="flex justify-between px-8 items-center bg-blue-950 py-3">
      <div>
        <ul className="flex justify-center items-center gap-8 text-slate-300 font-semibold">
          {navLinks}
        </ul>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-5">
          <li className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </li>
          <li className="w-10 rounded-full">
            <img
            className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
