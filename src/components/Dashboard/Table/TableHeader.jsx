import React from "react";

export default function TableHeader() {
  return (
    <thead className="table-header">
      <tr>
        <th className="table-heading">Deals</th>
        <th className="table-heading">Login</th>
        <th className="table-heading">Name</th>
        <th className="table-heading">PositionID</th>
        <th className="table-heading">Order</th>
        <th className="table-heading">Date-Time</th>
        {/* <th className="table-heading">Type</th> */}
        <th className="table-heading">Entry</th>
        <th className="table-heading">Symbol</th>
        <th className="table-heading">Volume</th>
        <th className="table-heading">Price</th>
        <th className="table-heading">Commission</th>
      </tr>
    </thead>
  );
}
