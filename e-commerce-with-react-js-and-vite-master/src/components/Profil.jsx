import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './imgs/logo.png';
import { useUser } from './UserContext';

const Profil = () => {
  const { user } = useUser();
  const defaultImage = "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  const [userImageSrc, setUserImageSrc] = useState(defaultImage);

  useEffect(() => {
    const images = import.meta.glob('./imgs/*');
    
    if (user?.image && images[`./imgs/${user.image}`]) {
      images[`./imgs/${user.image}`]().then((module) => {
        setUserImageSrc(module.default);
      }).catch(() => {
        setUserImageSrc(defaultImage);
      });
    }
  }, [user]);

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
        <div style={{ marginBottom: "10%" }}></div>
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
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Historique des orders
              </li>
            </Link>
            <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
              Profile
            </li>
            <Link to="/notifications">
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Notifications
              </li>
            </Link>
            <Link to="/contact2">
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          <div className="mx-auto my-10 flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
            <div className="mb-4 md:mr-0 md:mb-0">
              <img
                className="h-56 rounded-lg object-cover md:w-full"
                src={userImageSrc}
                alt=""
              />
            </div>
            <div>
              <p className="text-xl font-medium text-gray-700">{user.last_name} {user.first_name}</p>
              <p className="mb-4 text-sm font-medium text-gray-500">Client</p>
              <div className="flex space-x-2">
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">ArticlesE</p>
                  <p className="text-3xl font-medium text-gray-600">13</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">ArticlesA</p>
                  <p className="text-3xl font-medium text-gray-600">7</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Contact</p>
                  <p className="text-3xl font-medium text-gray-600">7</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Montant</p>
                  <p className="text-3xl font-medium text-gray-600">2.5k</p>
                </div>
                <div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2">
                  <p className="text-sm font-medium text-gray-500">Change</p>
                  <p className="text-3xl font-medium text-gray-600">10</p>
                </div>
              </div>
              <div className="mb-3"></div>
              <div className="flex space-x-2">
                <button className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">Declaration</button>
                <button className="w-full rounded-lg border-2 border-transparent bg-[#0B253E] px-4 py-2 font-medium text-white">More Informations</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
