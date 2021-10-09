import React from "react";

export default function TableHeader({
  priceSl,
  priceTp,
  profit,
  comission,
  reason,
  marketBid,
  marketAsk,
}) {
  return (
    <thead className="table-header">
      <tr>
        <th className="table-heading">Deals</th>
        <th className="table-heading">Login</th>
        <th className="table-heading">Name</th>
        <th className="table-heading">Order</th>
        <th className="table-heading">Date-Time</th>
        <th className="table-heading">Type</th>
        <th className="table-heading">Entry</th>
        <th className="table-heading">Symbol</th>
        <th className="table-heading">Volume</th>
        <th className="table-heading">Price</th>
        <th className={priceSl ? "table-heading visible" : "hidden"}>
          Price SL
        </th>
        <th className={priceTp ? "table-heading visible" : "hidden"}>
          Price Tp
        </th>
        <th className={profit ? "table-heading visible" : "hidden"}>Profit</th>
        <th className={comission ? "table-heading visible" : "hidden"}>
          Commission
        </th>
        <th className={reason ? "table-heading visible" : "hidden"}>Reason</th>
        <th className={marketBid ? "table-heading visible" : "hidden"}>
          Market Bid
        </th>
        <th className={marketAsk ? "table-heading visible" : "hidden"}>
          Market Ask
        </th>
      </tr>
    </thead>
  );
}
