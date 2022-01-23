interface productData {
    product_id: number,
    product_name: string,
    model_number: string,
    prod_type: number,
    company_id: number,
    created_at: string,
    updated_at: string,
}

const initialProductData: productData = {
    product_id: -1,
    product_name: "-",
    model_number: "-",
    prod_type: -1,
    company_id: -1,
    created_at: "-",
    updated_at: "",
}

export { productData, initialProductData };
