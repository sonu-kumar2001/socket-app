import React, { useContext } from "react";
import { Contx } from "../ContextApi";
import Table from "./Table";

export default function Dashboard() {
  const { socketData } = useContext(Contx);
  return <Table data={socketData} />;
}
