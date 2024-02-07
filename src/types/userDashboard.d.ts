export interface Department {
    id: string;
    name: string;
}
export interface AddressDB {
    id?: string | string[];
    district: string;
    city: string;
    phone: string;
    neighborhood: string;
    addressReference: string;
}
export interface Favorite {
    id: string;
}