import React, { useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { DataGrid, GridColDef, GridValueGetterParams } from "@material-ui/data-grid"
import { getNameOfDeclaration } from "typescript";

type Props = {
  datas?: MMW.machineData[]
}
const Table = styled.table`
  font-size: 16px;
  color: #42a5f5;
  @media (max-width: 640px){
    font-size: 32px;
    color: #444444;
  }
  @media print{
    font-size: 32px;
    color: #444444;
  }
  `
export default ({ datas }: Props): JSX.Element => {
  type mappedConst<T extends string>  ={
    [key in T]: key;
  };
  type a = mappedConst<keyof MMW.machineData>
  console.log()
  // const columns: GridColDef[]=[
  //   {
  //     field: b
  //   }
  // ]

  return (
    <Table>
      <thead>
        <tr>
          <td>machine_id</td>
          <td>machine_name</td>
          <td>host_name</td>
          <td>administrator</td>
          <td>place</td>
          <td>assurance</td>
          <td>product_id</td>
          <td>vender_id</td>
          <td>serial_number</td>
          <td>role_id</td>
          <td>notes</td>
          <td>purchase_date</td>
          <td>maintenance_date</td>
          <td>created_at</td>
          <td>updated_at</td>
        </tr>
      </thead>
      <tbody>
        {datas?.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.machine_id}</td>
              <td>{value.machine_name}</td>
              <td>{value.host_name}</td>
              <td>{value.administrator}</td>
              <td>{value.place}</td>
              <td>{value.assurance}</td>
              <td>{value.product_id}</td>
              <td>{value.vender_id}</td>
              <td>{value.serial_number}</td>
              <td>{value.role_id}</td>
              <td>{value.notes}</td>
              <td>{value.purchase_date}</td>
              <td>{value.maintenance_date}</td>
              <td>{value.created_at}</td>
              <td>{value.updated_at}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}