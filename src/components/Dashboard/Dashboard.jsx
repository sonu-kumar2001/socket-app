import React, { useContext, useState } from "react";
import { Contx } from "../ContextApi";
import Table from "./Table";
import Header from "../Header";
import Filter from "../Filter";

export default function Dashboard() {
  const { socketData } = useContext(Contx);
  const [addColumns, setAddColumns] = useState(false);
  const [priceSl, setPriceSl] = useState(false);
  const [priceTp, setPriceTp] = useState(false);
  const [profit, setProfit] = useState(false);
  const [reason, setReason] = useState(false);
  const [comission, setComission] = useState(false);
  const [marketBid, setMarketBid] = useState(false);
  const [marketAsk, setMarketAsk] = useState(false);
  return (
    <>
      <Header />
      <Filter
        addColumns={addColumns}
        priceSl={priceSl}
        priceTp={priceTp}
        profit={profit}
        comission={comission}
        reason={reason}
        marketBid={marketBid}
        marketAsk={marketAsk}
        setAddColumns={setAddColumns}
        setPriceSl={setPriceSl}
        setPriceTp={setPriceTp}
        setProfit={setProfit}
        setReason={setReason}
        setComission={setComission}
        setMarketBid={setMarketBid}
        setMarketAsk={setMarketAsk}
      />
      <Table
        data={socketData}
        priceSl={priceSl}
        priceTp={priceTp}
        profit={profit}
        comission={comission}
        reason={reason}
        marketBid={marketBid}
        marketAsk={marketAsk}
      />
    </>
  );
}
