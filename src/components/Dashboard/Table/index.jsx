import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({ data }) {
  return (
      <table className="table container">
        <TableHeader />
        <TableRow data={data} />
      </table>
  );
}
