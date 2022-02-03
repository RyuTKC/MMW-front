import React, { useState, useEffect } from "react";
import { appConfig, SystemsAPI, systemData } from "appConfig";
import Table from "components/Systems/Table"
import { useDispatch } from "react-redux";
import { sortsystemDatas, updatesystemDatas } from "reducks/SystemData/operations";

export default () => {
  const dispatch = useDispatch()



  return (
    <main>
      <h2>I am Systems</h2>
      <Table></Table>
    </main>
  );
}