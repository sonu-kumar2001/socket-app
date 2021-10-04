import React from "react";
import moment from "moment";
import Loader from "../../Loader";
import { isNil, isEmpty, either } from "ramda";

export default function TableRow({ data }) {
  if (either(isNil, isEmpty)(data)) {
    return <Loader />;
  }
  return (
    <tbody className="table-body">
      {data?.map((rowData, i) => (
        <tr className="table-row" key={i}>
          <td className="td">{rowData?.Order}</td>
          <td className="td">{rowData?.Login}</td>
          <td className="td no-wrap">{rowData?.Name}</td>
          <td className="td">{rowData?.PositionID}</td>
          <td className="td no-wrap">
            {moment(rowData?.Time)
              .utcOffset("+05:30")
              .format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </td>
          <td className="td">{rowData?.Type}</td>
          <td className="td">{rowData?.Entry}</td>
          <td className="td">{rowData?.Symbol}</td>
          <td className="td">{rowData?.Volume}</td>
          <td className="td">{rowData?.Price}</td>
          <td className="td">{rowData?.Commission}</td>
        </tr>
      ))}
    </tbody>
  );
}
