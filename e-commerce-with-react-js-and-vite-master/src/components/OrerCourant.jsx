import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import logo from './imgs/logo.png';

const OrderHistory = () => {
  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <div className="flex flex-shrink-0 items-center">
             <Link to="/">
              <img
                alt="Your Company"
                src={logo}
                className="h-14 w-auto"
              />
                            </Link>

              <div style={{marginBottom : "10%"}}>

              </div>
              </div>
      <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
        <div className="relative my-4 w-56 sm:hidden">
          <input className="peer hidden" type="checkbox" name="select-1" id="select-1" />
          <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
          >
            Accounts
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Accounts</li>
            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Team</li>
            <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">Others</li>
          </ul>
        </div>

        <div className="col-span-2 hidden sm:block">
          <ul>
          <Link to="/ordercourant">
          <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
          Order En cours
            </li>
            </Link>
            <Link to="/setting">
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Accounts
            </li>
            </Link>
            <Link to="/orderhistory">
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Historique des orders
            </li>
            </Link>
            <Link to="/profil">
            <li to="/profil" className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
         Profile
          </li>
          </Link>
          <Link to="/notifications">
            <li to="/profil" className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
         Notifications
          </li>
          </Link>
          <Link to="/contact2">
          <li  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
          Contact
            </li>
            </Link>
          </ul>
        </div>

        <div className="col-span-8  overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
        <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          * {
            font-family: 'Source Sans Pro';
          }
        `}
      </style>
        <div className="mx-auto mt-8 max-w-screen-lg px-2 mb-6">
        <div className=" bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-2 py-10">
        <div className="mt-4 w-full">
          <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
            <form className="relative flex w-full max-w-2xl items-center">
              <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" name="search" className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Search by Order ID, Date, Customer" />
            </form>

            <button type="button" className="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <svg className="mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
          <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr>
                <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                  Order Date
                  <svg xmlns="http://www.w3.org/2000/svg" className="float-right mt-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Order ID</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Description</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Shop</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Customer</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Dimensions</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Weight</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Price
                  <svg xmlns="http://www.w3.org/2000/svg" className="float-right mt-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Status</td>
              </tr>
            </thead>

            <tbody className="bg-white lg:border-gray-300">
              {/* Example Row */}
              <tr>
                <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                  07 February, 2022
                  <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Jane Doeson
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                      Desktop Computer
                    </div>
                    <div>24 x 10 x 5 cm</div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                      1 Kg
                    </div>
                  </div>
                </td>
                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">62345231143</td>
                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Desktop Computer</td>
                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                  <img className="h-8 w-8 overflow-hidden rounded-full border p-1" src="" alt="" />
                </td>
                <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Jane Doeson</td>
                <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">24 x 10 x 5 cm</td>
                <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">1.0 Kg</td>
                <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">₺12.00</td>
                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell lg:text-left">Shipped</td>
              </tr>
              {/* Repeat <tr> block for more rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
