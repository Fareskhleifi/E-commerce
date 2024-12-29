import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import logo from './imgs/logo.png';

const LatestPayments = () => {
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
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Order En cours
            </li>
            </Link>
            <Link to="/setting">
            <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
              Accounts
            </li>
            </Link>
            <Link to="/orderhistory">
            <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
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
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-900">Latest Payments</p>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-start sm:justify-end">
                <div className="flex items-center">
                  <label
                    htmlFor="sort"
                    className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"
                  >
                    Sort by:
                  </label>
                  <select
                    name="sort"
                    id="sort"
                    className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                  >
                    <option className="whitespace-no-wrap text-sm">Recent</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow"
                >
                  <svg
                    className="mr-1 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border shadow">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr>
                  <td
                    width="50%"
                    className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                  >
                    Invoice
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Date
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Amount
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Status
                  </td>
                </tr>
              </thead>
              <tbody className="lg:border-gray-300">
                <tr>
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Standard Plan - Feb 2022
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">07 February, 2022</p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    07 February, 2022
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $59.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Standard Plan - Jan 2022
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">09 January, 2022</p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    09 January, 2022
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $59.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-200 py-1 px-2 text-left font-medium text-red-500 lg:hidden">
                      Canceled
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">
                      Canceled
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Basic Plan - Dec 2021
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">15 December, 2021</p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    15 December, 2021
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Basic Plan - Nov 2021
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">14 November, 2021</p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    14 November, 2021
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-200 py-1 px-2 text-left font-medium text-blue-500 lg:hidden">
                      Pending
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-200 py-1 px-2 text-blue-500">
                      Pending
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Basic Plan - Oct 2021
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">15 October, 2021</p>
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    15 October, 2021
                  </td>
                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPayments;
