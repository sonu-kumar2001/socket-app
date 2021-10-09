import React from "react";

export default function Filter({
  addColumns,
  priceSl,
  priceTp,
  profit,
  comission,
  reason,
  marketBid,
  marketAsk,
  setAddColumns,
  setPriceSl,
  setPriceTp,
  setProfit,
  setReason,
  setComission,
  setMarketBid,
  setMarketAsk,
}) {
  return (
    <div className="filter">
      <p className="pointer" onClick={() => setAddColumns(!addColumns)}>
        Columns +/-
      </p>
      <p
        className={addColumns === true ? "visible pointer" : "hidden"}
        onClick={() => setPriceSl(!priceSl)}>
        {priceSl ? "Price SL -" : "Price SL +"}
      </p>
      <p
        className={addColumns === true ? "visible pointer" : "hidden"}
        onClick={() => setPriceTp(!priceTp)}>
        {priceTp ? "Price TP -" : "Price TP +"}
      </p>
      <p
        className={addColumns === true ? "visible pointer" : "hidden"}
        onClick={() => setProfit(!profit)}>
        {profit ? "Profit -" : "Profit +"}
      </p>
      <p
        className={addColumns === true ? "visible pointer" : "hidden"}
        onClick={() => setComission(!comission)}>
        {comission ? "Comission -" : "Comission +"}
      </p>
      <p
        className={addColumns === true ? "visible pointer" : "hidden"}
        onClick={() => setReason(!reason)}>
        {reason ? "Reason -" : "Reason +"}
      </p>
      <p
        className={addColumns === true ? "visible pointer" : "hidden"}
        onClick={() => setMarketBid(!marketBid)}>
        {marketBid ? "Market Bid -" : "Market Bid +"}
      </p>
      <p
        className={addColumns === true ? "visible pointer" : "hidden"}
        onClick={() => setMarketAsk(!marketAsk)}>
        {marketAsk ? "Market Ask -" : "Market Ask +"}
      </p>
    </div>
  );
}
