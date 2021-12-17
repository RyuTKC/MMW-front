import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { MachineData, machineData, productData, systemData } from "appConfig";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel"

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
// const dataSort = () => {
//   // datas.sort();

// }

// type----------------------------------------------------
type datasType = (machineData | systemData | productData)[]
type dataType = machineData | systemData | productData

type sortType = "asc" | "desc"
type sortObject = {
  rows: machineData[],
  order: sortType,
  orderBy: keyof machineData
}

type Props = {
  datas: machineData[],
}
export default ({ datas = [] }: Props): JSX.Element => {
  const sortColumn = (targetColumn: keyof machineData) => (e: React.MouseEvent) => {
    if (sortState.orderBy === targetColumn) {
    }

    const sortResult = sortState.rows.slice().sort((a, b) => {
      if (a[targetColumn] < b[targetColumn])
        return 1
      else if (a[targetColumn] > b[targetColumn])
        return -1
      else
        return 0
    })
    console.log(sortResult);
  }

  const columns: (keyof machineData)[] = datas.length !== 0 ? (Object.keys(datas[0])) as (keyof machineData)[] : [];

  const [sortState, setSortState] = useState<sortObject>(
    {
      rows: datas,
      order: "asc",
      orderBy: columns[0]
    }
  )
  useEffect(() => setSortState({
    rows: datas,
    order: "desc",
    orderBy: columns[0]
  }), [datas])

  return (
    <>
      <MTable>
        <MTableHead>
          <MTableRow>
            {columns.map((v, i) => (
              <React.Fragment key={i}>
                <MTableCell
                  sortDirection={sortState.orderBy === v ? sortState.order : false}
                >
                  <MTableSortLabel
                    active={sortState.orderBy === v}
                    direction={sortState.order}
                    onClick={sortColumn(v)}
                  >
                    {v}
                    {/* <span>
                        {order === "desc"? "sorted descending": "sorted ascending"}
                      </span> */}
                  </MTableSortLabel>
                </MTableCell>
              </React.Fragment>
            )
            )}
          </MTableRow>
        </MTableHead>
        <MTableBody>
          {sortState.rows.map((v, i) => (
            <MTableRow key={i}>
              {Object.values(v).map((v2, i2) => (
                <MTableCell key={i2}>
                  {v2}
                </MTableCell>
              ))}
            </MTableRow>
          )
          )}
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