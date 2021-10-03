import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({ data }) {
  return (
    <div className="container">
      <table className="table">
        <TableHeader />
        <TableRow data={data} />
      </table>
    </div>
  );
}
