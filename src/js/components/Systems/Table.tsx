import { systemData } from "js/config/appConfig";
import React, { useState } from "react";
import { render } from "react-dom";


type Props = {
  datas?: systemData[]
}

export default ({ datas }: Props): JSX.Element => {
  return (
      <table>
        <thead>
          <tr>
            <td>system_id</td>
            <td>system_name</td>
            <td>system_en_name</td>
            <td>created_at</td>
            <td>updated_at</td>
          </tr>
        </thead>
        <tbody>
          {datas?.map((value) => {
            return (
              <tr>
                <td>{value.system_id}</td>
                <td>{value.system_name}</td>
                <td>{value.system_en_name}</td>
                <td>{value.created_at}</td>
                <td>{value.updated_at}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  );
}