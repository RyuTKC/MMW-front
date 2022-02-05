import { companyData, initialCompanyData } from "./company";

interface productData {
    product_id: number,
    product_name: string,
    model_number: string,
    product_type: number,
    manufacturer: companyData,
}

const isProductData=(target: any): target is productData=>{
    return target.product_id !== undefined
}

const initialProductData: productData = {
    product_id: -1,
    product_name: "-",
    model_number: "-",
    product_type: -1,
    manufacturer: initialCompanyData,
}

export { productData, initialProductData, isProductData };
