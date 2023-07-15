import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white text-gray-600 body-font shadow-lg rounded-2xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">InventorStock</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-green-600 hover:underline">Home</a>
          <a className="mr-5 hover:text-green-600 hover:underline">About</a>
          <a className="mr-5 hover:text-green-600 hover:underline">Contact</a>
        </nav>
        
      </div>
    </header>
  )
}
