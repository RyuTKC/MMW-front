interface statusData {
    status_id: number
    status_name: string
}
const initialStatusData: statusData = {
    status_id: -1,
    status_name: "-",
}

const isStatusData = (target: any): target is statusData => {
    return target.status_id !== undefined
}

interface roleData {
    role_id: number
    role_name: string
}
const initialRoleData: roleData = {
    role_id: -1,
    role_name: "-",
}

const isRoleData = (target: any): target is roleData => {
    return target.role_id !== undefined
}

interface productTypeData {
    product_type_id: number
    product_type_name: string
}
const initialProductTypeData: productTypeData = {
    product_type_id: -1,
    product_type_name: "-",
}

const isProductTypeData = (target: any): target is productTypeData => {
    return target.product_type_id !== undefined
}

export { statusData, initialStatusData, isStatusData };
export { roleData, initialRoleData, isRoleData };
export { productTypeData, initialProductTypeData, isProductTypeData };
