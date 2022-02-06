import { companyData, initialCompanyData } from "./company";
import { initialProductTypeData, productTypeData } from "./enum";

interface productData {
    product_id: number,
    product_name: string,
    model_number: string,
    product_type: productTypeData,
    manufacturer: companyData,
}

const isProductData=(target: any): target is productData=>{
    return target.product_id !== undefined
}

const initialProductData: productData = {
    product_id: -1,
    product_name: "-",
    model_number: "-",
    product_type: initialProductTypeData,
    manufacturer: initialCompanyData,
}

export { productData, initialProductData, isProductData };
