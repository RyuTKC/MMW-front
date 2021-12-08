declare namespace MMW {

  export interface configParam {
    API_URL: string,
    VERSION: string,
  }
  export interface machineData {
    machine_id: number
    machine_name: string
    administrator: string
    host_name: string
    place: string
    qr_or_barcode: string
    maintenance_date: string
    assurance: string
    serial_number: string
    purchase_date: string
    notes: string
    product_id: number
    status_type: number
    role_id: number
    vender_id: number
    created_at: string
    updated_at: string
  }

  export interface systemData {
    system_id: number,
    system_name: string,
    system_en_name: string,
    created_at: string,
    updated_at: string,
  }

  export interface productData {
    product_id: number,
    product_name: string,
    model_number: string,
    prod_type: number,
    company_id: number,
    created_at: string,
    updated_at: string,
  }
}