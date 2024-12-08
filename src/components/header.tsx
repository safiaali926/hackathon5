"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, Mail, PhoneCall, User, ChevronDown } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2 px-10 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-6 mx-5">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>mhhasanul@gmail.com</span>
          </div>
          <div className="flex items-center">
            <PhoneCall className="w-4 h-4 mr-2" />
            <span>(12345)67890</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 mx-9">
          <select
            className="bg-transparent border-none outline-none text-white cursor-pointer"
            aria-label="Select Language"
          >
            <option className="text-gray-800">English</option>
            <option className="text-gray-800">Spanish</option>
            <option className="text-gray-800">French</option>
          </select>
          <select
            className="bg-transparent border-none outline-none text-white cursor-pointer"
            aria-label="Select Currency"
          >
            <option className="text-gray-800">USD</option>
            <option className="text-gray-800">EUR</option>
            <option className="text-gray-800">GBP</option>
          </select>
          <Link href="#" className="flex items-center hover:underline">
            <User className="w-4 h-4 mr-2" />
            Login
          </Link>
          <Link href="#" className="flex items-center hover:underline">
            <Heart className="w-4 h-4 mr-2" />
            Wishlist
          </Link>
          <Link href="#" className="relative">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center py-5 px-10">
        {/* Logo */}
        <h1 className="font-bold text-[34px] text-indigo-950">Hekto</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm font-medium">
            {/* Home with Clickable Sublinks */}
            <li className="relative">
              <button
                onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                className="flex items-center hover:text-pink-500 focus:outline-none"
              >
                Home <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* Dropdown Menu */}
              {homeDropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md z-10">
                  <li>
                    <Link href="/home/option1" className="block px-4 py-2 hover:bg-gray-100">
                     Home 1
                    </Link>
                  </li>
                  <li>
                    <Link href="/home/option2" className="block px-4 py-2 hover:bg-gray-100">
                      Home 2
                    </Link>
                  </li>
                  <li>
                    <Link href="/home/option3" className="block px-4 py-2 hover:bg-gray-100">
                      Home 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/aboutus" className="hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-pink-500">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-pink-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-pink-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              className="py-2 pl-4 pr-12 w-72 text-sm border border-gray-300 focus:outline-none"
            />
            <button className="absolute top-0 bottom-0 right-0 px-4 bg-pink-500 text-white hover:bg-pink-600">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
