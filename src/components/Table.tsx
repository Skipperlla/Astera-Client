import React from "react";
import { ITable } from "types/types";
const Table = ({ headers }: ITable) => {
  return (
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-white dark:text-gray-200 dark:bg-gray-900">
              {headers.map((data, index) => {
                return (
                  <th className="px-4 py-3 " key={index}>
                    {data}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-900">
            {headers.map((data, index) => {
              return (
                <tr className="text-gray-700 dark:text-gray-400" key={index}>
                  {headers.map((idfc, index) => {
                    return (
                      <td className="px-4 py-3 text-sm" key={index}>
                        {" "}
                        {idfc}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
