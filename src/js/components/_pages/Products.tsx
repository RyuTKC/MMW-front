import React, { useState, useEffect } from "react";
import Table from "components/Products/Table"
import { useDispatch } from "react-redux";
import { sortProductDatas, updateProductDatas } from "reducks/ProductData/operations";

export default () => {
    const dispatch = useDispatch()

    return (
        <main>
            <Table></Table>
        </main>
    );
}