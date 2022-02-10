interface companyData {
    company_id: number
    company_name: string
}
const initialCompanyData: companyData = {
    company_id: -1,
    company_name: "",
}

const isCompanyData = (target: any): target is companyData => {
    return target.company_id !== undefined
}

export { companyData, initialCompanyData, isCompanyData };
