declare namespace MMW {

  export interface configParam {
    API_URL: string,
    VERSION: string,
  }

  const Machines = {
    root: "machines",
    search: "search",
    show: "show",
    exchange: "exchange",
    edit_by_qr: "",

  } as const;

  export type Machines = typeof Machines[keyof typeof Machines];

}