import React, { useState, useEffect } from "react";
import { appConfig, ProductsAPI, productData } from "appConfig"
import Table from "components/Products/Table"

export default () => {
    const getProducts = () => {
        appConfig.axios.get<productData[]>(ProductsAPI.root)
            .then(res => {
                setProductDatas(res.data)
            })
            .catch()
    }

    const [productDatas, setProductDatas] = useState<productData[]>([])
    useEffect(getProducts, [])

    return (
        <main>
            <Table datas={productDatas}></Table>
        </main>
    );
}