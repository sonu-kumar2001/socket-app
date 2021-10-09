import React from "react";
import moment from "moment";
import Loader from "../../Loader";
import { isNil, isEmpty, either } from "ramda";
import { reasonData, entryData } from "../../../Helper/helper";
export default function TableRow({
  data,
  priceSl,
  priceTp,
  profit,
  comission,
  reason,
  marketBid,
  marketAsk,
}) {
  if (either(isNil, isEmpty)(data)) {
    return <Loader />;
  }

  return (
    <tbody className="table-body">
      {data?.map((rowData, i) => (
        <tr className="table-row" key={i}>
          {console.log(rowData)}
          <td className="td">{rowData?.Deal}</td>
          <td className="td">{rowData?.Login}</td>
          <td className="td no-wrap">{rowData?.Name}</td>
          <td className="td">{rowData?.Order}</td>
          <td className="td no-wrap">
            {moment(rowData?.Time).utcOffset(330).format("L, h:mm:ss a")}
          </td>
          <td className="td">{rowData?.Action === 1 ? "SELL" : "BUY"}</td>
          <td className="td">{entryData(rowData?.Entry)}</td>
          <td className="td">{rowData?.Symbol}</td>
          <td className="td">{rowData?.Volume / 10000}</td>
          <td className="td">{rowData?.Price}</td>
          <td className={priceSl ? "visible td" : "hidden"}>
            {rowData?.PriceSL}
          </td>
          <td className={priceTp ? "visible td" : "hidden"}>
            {rowData?.PriceTP}
          </td>
          <td className={profit ? "visible td" : "hidden"}>
            {rowData?.Profit}
          </td>
          <td className={comission ? "visible td" : "hidden"}>
            {rowData?.Commission}
          </td>
          <td className={reason ? "visible td" : "hidden"}>
            {reasonData(rowData?.Reason)}
          </td>
          <td className={marketBid ? "visible td" : "hidden"}>
            {rowData?.MarketBid}
          </td>
          <td className={marketAsk ? "visible td" : "hidden"}>
            {rowData?.MarketAsk}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
