import React, {useState, useEffect} from "react";
import { appConfig, SystemsAPI, systemData } from "appConfig";
import Table from "components/Systems/Table"

export default () => {
    const getSystems = (): void => {
        appConfig.axios.get<systemData[]>(SystemsAPI.root)
            .then(res => {
                setSystemDatas(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const [systemDatas, setSystemDatas] = useState<systemData[]>([]);
    // リロード更新
    useEffect(getSystems, [])

    return (
        <main>
            <h2>I am Systems</h2>
            <Table datas={systemDatas}></Table>
        </main>
    );
}