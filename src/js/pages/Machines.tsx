import React, { VFC, useEffect, useState } from "react";
import { appConfig, MachinesAPI } from "appConfig";
import { Link } from "react-router-dom";
import axios from "axios";

interface typeA {
  administrator: string
  assurance: string
  created_at: string
  host_name: string
  machine_id: number
  machine_name: string
  maintenance_date: string
  notes: string
  place: string
  product_id: number
  purchase_date: string
  qr_or_barcode: string
  role_id: number
  serial_number: string
  status_type: number
  updated_at: string
  vender_id: number
}

export default () => {
  const getMachines = (): void => {
    appConfig.axios.get<typeA[]>(MachinesAPI.root)
      .then(res => {
        setJasonValue(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const [jsonValue, setJasonValue] = useState<typeA[]>([]);
  // リロード更新
  useEffect(getMachines, [])

  return (
    <main>
      <h2>I am Machines</h2>
      <button onClick={getMachines}>now</button>
      <table>
        <thead></thead>
        <tbody>
          {jsonValue.map((value) => {
            return (
              <tr>
                <td>{value.machine_id}</td>
                <td>{value.machine_name}</td>
                <td>{value.host_name}</td>
                <td>{value.administrator}</td>
                <td>{value.place}</td>
                <td>{value.product_id}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>
  );
};
