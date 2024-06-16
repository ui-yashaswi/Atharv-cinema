import React, { useEffect, useState } from "react";
import TanStackTable from "./TanstackTable";
import axios from "axios";
import { convertUtcToIst, getRelativeTime } from "../../utils/dateConverter";
const DataTable = () => {
  const headers = [
    // { header: "id", accessorKey: "_id" },
    { header: "name", accessorKey: "name" },
    { header: "phoneNumber", accessorKey: "phoneNumber" },
    { header: "email", accessorKey: "email" },
    { header: "services", accessorKey: "services" },
    { header: "query", accessorKey: "query" },
    { header: "message", accessorKey: "message" },
    { header: "reachedThrough", accessorKey: "reachedThrough" },

    {
      header: "Event on",
      accessorKey: "dateOfEvent",
      cell: (row) => getRelativeTime(row.row.original.createdAt),
    },
    {
      header: "added on",
      accessorKey: "createdAt",
      cell: (row) => {
        console.log(row.row.original.createdAt);
        return convertUtcToIst(row.row.original.createdAt);
      },
    },
  ];
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3000/getdetails");

        console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      {loader ? (
        <div className="flex items-center justify-center text-xl">
          Loading ........
        </div>
      ) : (
        <div className="mt-4">
          <TanStackTable
            headers={headers}
            data={data}
            className="second-bg rounded-t-md"
          />
        </div>
      )}
    </div>
  );
};

export default DataTable;