import React, { useState, useEffect } from "react";
import { appConfig, SystemsAPI, systemData } from "appConfig";
import { useDispatch } from "react-redux";
import Table from "pages/Systems/Table/Table";

export default () => {
  const dispatch = useDispatch()

  return (
    <main>
      <h2>I am Systems</h2>
      <Table></Table>
    </main>
  );
}