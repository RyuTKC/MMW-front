interface ipAddress {
    ip_id: number,
    ipv4_address: string,
    machine_id: number,
    wiredflg: boolean
}

const initialIpAddress: ipAddress = {
    ip_id: -1,
    ipv4_address: "",
    machine_id: -1,
    wiredflg: false,
}

const isIpAddress= (target: any): target is ipAddress=>{
    return target.ip_id !== undefined
}

export { ipAddress, initialIpAddress, isIpAddress }
