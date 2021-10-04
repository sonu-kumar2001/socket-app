import React, { useContext } from "react";
import { Contx } from "../ContextApi";
import Table from "./Table";
import Header from "../Header";

export default function Dashboard() {
  const { socketData } = useContext(Contx);
  return (
    <>
      <Header/>
      <Table data={socketData} />;
    </>
  );
}
