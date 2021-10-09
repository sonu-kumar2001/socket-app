import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export default function Table({
  data,
  priceSl,
  priceTp,
  profit,
  comission,
  reason,
  marketBid,
  marketAsk
}) {
  return (
    <div className="container">
      <table className="table">
        <TableHeader
          priceSl={priceSl}
          priceTp={priceTp}
          profit={profit}
          comission={comission}
          reason={reason}
          marketBid={marketBid}
          marketAsk={marketAsk}
        />
        <TableRow
          data={data}
          priceSl={priceSl}
          priceTp={priceTp}
          profit={profit}
          comission={comission}
          reason={reason}
          marketBid={marketBid}
          marketAsk={marketAsk}
        />
      </table>
    </div>
  );
}
