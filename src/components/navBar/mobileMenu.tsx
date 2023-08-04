import React from 'react';
import Link from 'next/link';

interface MenuItem {
  label: string;
  route: string;
}

interface MobileMenuProps {
  navigation: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navigation }) => {
  return (
    <>
      <div className="-mr-2 flex md:hidden">
        {/* <!-- Mobile menu button --> */}
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="absolute top-16 inset-x-0 text-center bg-gray-800 z-10 pb-3 pt-2 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          {navigation.map(({ label, route }) => (
            // Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
            <Link
              key={route}
              href={route}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
