import React, { VFC, useEffect, useState, useRef } from "react";
import { appConfig, MachinesAPI, machineData, MachineData } from "appConfig";
import Table from "js/components/Machines/Table"

export default () => {
  const updateEvent = useRef<boolean>(false)

  const onClickButton = (e: React.MouseEvent) => {
    testMethod()
  }

  const testMethod = (): void => {
    console.log("a")
  }

  return (
    <main>
      <h2>機材一覧表示</h2>
      <button onClick={onClickButton}>更新</button>
      <Table />
    </main>
  );
};
