import React, { useState } from "react";
import Activity from "./Activity";
import Invoice from "./Invoice";
import Cashflow from "./Cashflow";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AccountWatchlist from "./AccountWatchlist";

const Directory = () => {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <div className="w-10/12 bg-gray-100">
          <Header />
          <div className="main p-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="shadow-sm bg-white rounded-md p-4 h-80">
                <div className="flex justify-between pb-2 border-b">
                  <h2 className="font-bold text-gray-600 text-md">
                    Checking Account
                  </h2>
                  <button className="h-8 text-sm px-4 bg-gray-100 text-green-400 font-semibold rounded-md border border-slate-200">
                    {" "}
                    New Sales Invoice
                  </button>
                </div>
                <Activity />
              </div>

              <div className="shadow-sm bg-white rounded-md p-4 h-80">
                <div className="flex justify-between pb-2 border-b">
                  <h2 className="font-bold text-gray-600 text-md">
                    Invoices owed to you
                  </h2>
                  <button className="h-8 text-sm px-4 bg-gray-100 text-green-400 font-semibold rounded-md border border-slate-200">
                    {" "}
                    New Sales Invoice
                  </button>
                </div>
                <Invoice />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 my-10">
              <div className="shadow-sm bg-white rounded-md p-4 h-80">
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

              <div className="shadow-sm bg-white rounded-md p-4 h-80">
                <div className="pb-2 border-b">
                  <h2 className="font-bold text-gray-600 text-md">
                    Account Watchlist
                  </h2>
                </div>
                {/* Table */}
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
