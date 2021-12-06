import React, { useState, useEffect } from "react";
import { appConfig, ProductsAPI } from "appConfig"
import Table from "components/Products/Table"

export default () => {
    const getProducts = () => {
        appConfig.axios.get<MMW.productData[]>(ProductsAPI.root)
            .then(res => {
                setProductDatas(res.data)
            })
            .catch()
    }

    const [productDatas, setProductDatas] = useState<MMW.productData[]>([])
    useEffect(getProducts, [])

    return (
        <main>
            <Table datas={productDatas}></Table>
        </main>
    );
}