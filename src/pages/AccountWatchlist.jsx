import React from "react";

const AccountWatchlist = () => {
  const tableData = [
    { account: "Sales", thisMonth: "$500", ytd: "$2000" },
    { account: "Advertising", thisMonth: "$700", ytd: "$2500" },
    { account: "Inventory", thisMonth: "$400", ytd: "$1800" },
    { account: "Entertainment", thisMonth: "$500", ytd: "$2000" },
    { account: "Product", thisMonth: "$700", ytd: "$2500" },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 text-left text-sm text-gray-400">Account</th>
              <th className="py-2 text-left text-sm text-gray-400">
                This Month
              </th>
              <th className="py-2 text-left text-sm text-gray-400">YTD</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="py-2 text-sm text-gray-700">{row.account}</td>
                <td className="py-2 text-sm text-gray-700">{row.thisMonth}</td>
                <td className="py-2 text-sm text-gray-700">{row.ytd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountWatchlist;
