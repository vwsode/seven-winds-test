import React from "react";
import "./App.style.scss";

import { Table } from "./components/Table";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import { useGetRowsQuery } from "./api/outlayRowsApi";
import { COLUMNS, eID, menuLinks } from "./constants";

export function App() {
  const { data, isLoading } = useGetRowsQuery(eID);

  if (!data && isLoading) {
    return null;
  }

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar links={menuLinks} />
        <Table columns={COLUMNS} rows={data ?? []} />
      </div>
    </div>
  );
}
