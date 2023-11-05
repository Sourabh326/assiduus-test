import React from "react";
import Activity from "./Activity";
import Invoice from "./Invoice";
import Cashflow from "./Cashflow";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AccountWatchlist from "./AccountWatchlist";

const Directory = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="w-full lg:w-10/12 bg-gray-100">
          <Header />
          <div className="main p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="lg:col-span-1 shadow-sm bg-white rounded-md p-4 h-80 mb-4 lg:mb-0">
                <div className="flex justify-between pb-2 border-b">
                  <h2 className="font-bold text-gray-600 text-md">
                    Checking Account
                  </h2>
                  <div className="flex justify-between gap-2">
                    <div>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Manage</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div>
                      <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>January</option>
                        <option value="US">Februry</option>
                        <option value="CA">March</option>
                        <option value="FR">April</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                </div>
                <Activity />
              </div>

              <div className="lg:col-span-1 shadow-sm bg-white rounded-md p-4 h-80">
                <div className="flex justify-between pb-2 border-b">
                  <h2 className="font-bold text-gray-600 text-md">
                    Invoices owed to you
                  </h2>
                  <button className="h-8 text-sm px-4 bg-gray-100 text-green-400 font-semibold rounded-md border border-slate-200">
                    New Sales Invoice
                  </button>
                </div>
                <Invoice />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
              <div className="lg:col-span-1 shadow-sm bg-white rounded-md p-4 h-80 mb-4 lg:mb-0">
                <div className="flex justify-between pb-2 border-b">
                  <h2 className="font-bold text-gray-600 text-md">
                    Total cash flow
                  </h2>
                  <div className="flex justify-between gap-1">
                    <button className="h-6 text-sm px-2 bg-green-400 text-white font-semibold rounded-md border border-slate-200">
                      {" "}
                      In
                    </button>
                    <button className="h-6 text-sm px-4 bg-green-400 text-white font-semibold rounded-md border border-slate-200">
                      {" "}
                      Out
                    </button>
                  </div>
                </div>
                <Cashflow />
              </div>

              <div className="lg:col-span-1 shadow-sm bg-white rounded-md p-4 h-80">
                <div className="pb-2 border-b">
                  <h2 className="font-bold text-gray-600 text-md">
                    Account Watchlist
                  </h2>
                </div>
                <AccountWatchlist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Directory;
