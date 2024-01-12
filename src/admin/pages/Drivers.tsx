import React from "react";
import DriversTable from "../features/DriversTable";

export default function Drivers() {
  return (
    <>
      <div className="mb-4">
        <div className="flex flex-row relative items-center mt-5 align-middle">
          <h1 className="text-lg font-normal">All Drivers</h1>
          <p className="text-lg absolute right-10 font-normal">filter/sort</p>
        </div>
        <div className="mt-5 mb-5">
          <DriversTable />
        </div>
      </div>
    </>
  );
}
