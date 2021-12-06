import React, { useState } from "react";
import { render } from "react-dom";


type Props = {
  datas: MMW.machineData[]
}

export default ({ datas }: Props): JSX.Element => {

  return (
    <table>
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
        {datas.map((value) => {
          return (
            <tr>
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
    </table>
  );
}