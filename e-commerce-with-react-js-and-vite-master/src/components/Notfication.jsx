import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './imgs/logo.png';

const Notif = () => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * {
          font-family: 'Source Sans Pro';
        }
      `}</style>

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
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
              checked={isNotificationsOpen}
              onChange={() => setIsNotificationsOpen(!isNotificationsOpen)}
            />
            <label
              htmlFor="select-1"
              className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
            >
              Notifications
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition ${
                isNotificationsOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <ul
              className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 ${
                isNotificationsOpen ? 'max-h-56 py-3' : ''
              }`}
            >
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                Notifications
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                Team
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                Others
              </li>
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
            <Link to="/profil">
            <li to="/profil" className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
         Profile
          </li>
          </Link>
          <Link to="/notifications">
          <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">
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
          <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
            <div className="border-b pt-4 pb-8">
              <h1 className="py-2 text-2xl font-semibold">Notification settings</h1>
              <p className="font- text-slate-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="grid border-b py-6 sm:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold leading-4 text-slate-700">Comments</h2>
                <p className="font- text-slate-600">
                  Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.
                </p>
              </div>
              <div className="mt-4 flex items-center sm:justify-end">
                <div className="flex flex-col gap-3">
                  <label htmlFor="push-comments" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="push-comments"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                  </label>
                  <label htmlFor="email-comments" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="email-comments"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                  </label>
                  <label htmlFor="sms-comments" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="sms-comments"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid border-b py-6 sm:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold leading-4 text-slate-700">Reminders</h2>
                <p className="font- text-slate-600">
                  Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.
                </p>
              </div>
              <div className="mt-4 flex items-center sm:justify-end">
                <div className="flex flex-col gap-3">
                  <label htmlFor="push-reminders" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="push-reminders"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                  </label>
                  <label htmlFor="email-reminders" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="email-reminders"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                  </label>
                  <label htmlFor="sms-reminders" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="sms-reminders"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid border-b py-6 sm:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold leading-4 text-slate-700">Updates</h2>
                <p className="font- text-slate-600">
                  Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.
                </p>
              </div>
              <div className="mt-4 flex items-center sm:justify-end">
                <div className="flex flex-col gap-3">
                  <label htmlFor="push-updates" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="push-updates"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                  </label>
                  <label htmlFor="email-updates" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="email-updates"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                  </label>
                  <label htmlFor="sms-updates" className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      id="sms-updates"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notif;
