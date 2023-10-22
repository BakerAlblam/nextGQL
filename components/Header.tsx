import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <div className="flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button type="button" className="p-2 sm:mr-4 lg:hidden">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link href="/">
         
          </Link>
        </div>

        <div className="flex items-center justify-end flex-1">
          <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            <Link href="/">
           
            </Link>
          </nav>

          <div className="flex items-center ml-8">
            <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
              <span>
                <Link href="/user/my-cart">
                
                </Link>
              </span>

              <span>
                <Link href="/user/login">
                 
                </Link>
              </span>

              <span className="hidden sm:block">
                <Link href="/">
                  
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;