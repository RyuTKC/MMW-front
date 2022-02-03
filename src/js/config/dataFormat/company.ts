import { initialIpAddress, ipAddress } from "./ipAddress";
import { initialProductData, productData } from "./product";
import { initialSystemData, systemData } from "./system";

interface companyData {
    company_id: number
    company_name: string
}
const initialCompanyData: companyData = {
    company_id: -1,
    company_name: "-",
}

export { companyData, initialCompanyData };
