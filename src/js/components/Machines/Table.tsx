import React, { useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { MachineData, machineData } from "appConfig";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel"

type Props = {
  datas?: machineData[]
}
const MyTable = styled.table`
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

export default ({ datas = [new MachineData] }: Props): JSX.Element => {

  return (
    <>
      <MTable>
        <MTableHead>
          <MTableRow>
            {Object.keys(new MachineData).map((v, i) => {
              return (
                <>
                  <MTableCell
                  // sortDirection={orderBy}
                  >{v}</MTableCell>
                  <MTableSortLabel
                  // active={orderBy === v}
                  ></MTableSortLabel>
                </>
              )
            })}
          </MTableRow>
        </MTableHead>
        <MTableBody>
          {datas.map((v, i) => {
            return (
              <MTableRow>
                <MTableCell>{v.machine_id}</MTableCell>
                <MTableCell>{v.machine_name}</MTableCell>
                <MTableCell>{v.administrator}</MTableCell>
                <MTableCell>{v.host_name}</MTableCell>
                <MTableCell>{v.place}</MTableCell>
                <MTableCell>{v.qr_or_barcode}</MTableCell>
                <MTableCell>{v.maintenance_date}</MTableCell>
                <MTableCell>{v.assurance}</MTableCell>
                <MTableCell>{v.serial_number}</MTableCell>
                <MTableCell>{v.purchase_date}</MTableCell>
                <MTableCell>{v.notes}</MTableCell>
                <MTableCell>{v.product_id}</MTableCell>
                <MTableCell>{v.status_type}</MTableCell>
                <MTableCell>{v.role_id}</MTableCell>
                <MTableCell>{v.vender_id}</MTableCell>
                <MTableCell>{v.created_at}</MTableCell>
                <MTableCell>{v.updated_at}</MTableCell>
              </MTableRow>
            )
          })}
        </MTableBody>
      </MTable>
      {/* <MyTable>
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
      </MyTable> */}
    </>
  );
}