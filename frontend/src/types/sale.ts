import { seller } from "./seller"

export type sale =  {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: seller;
}

export type SalePage = {
    content?: sale[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;

}

export type SaleSum = {
    sellerName: string;
    sum: number;
}
export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}
