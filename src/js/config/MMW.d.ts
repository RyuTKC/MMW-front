declare namespace MMW {

  export interface configParam {
    API_URL: string,
    VERSION: string,
  }
  export interface machineData {
    administrator: string
    assurance: string
    created_at: string
    host_name: string
    machine_id: number
    machine_name: string
    maintenance_date: string
    notes: string
    place: string
    product_id: number
    purchase_date: string
    qr_or_barcode: string
    role_id: number
    serial_number: string
    status_type: number
    updated_at: string
    vender_id: number
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