export interface Iuser {
    id:number,
    username:string,
    email: string,
    Phone:number[],
    address: {
      city:string,
      Street: string,
      PostalCode: number
    },
    password:string
}
