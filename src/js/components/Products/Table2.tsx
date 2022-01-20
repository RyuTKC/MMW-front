import React, { useState } from "react";
import { productData } from "appConfig";
import { render } from "react-dom";


type Props = {
  datas?: productData[]
}

export default ({ datas }: Props): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <td>product_id</td>
          <td>product_name</td>
          <td>model_number</td>
          <td>prod_type</td>
          <td>company_id</td>
          <td>created_at</td>
          <td>updated_at</td>
        </tr>
      </thead>
      <tbody>
        {datas?.map((value) => {
          return (
            <tr>
              <td>{value.product_id}</td>
              <td>{value.product_name}</td>
              <td>{value.model_number}</td>
              <td>{value.prod_type}</td>
              <td>{value.company_id}</td>
              <td>{value.created_at}</td>
              <td>{value.updated_at}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}