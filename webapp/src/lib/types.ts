export type TUser = {
    id: string;
    name: string;
    email: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
} 
export type TResponse = {
    items: TUser[]
    page: number
    perPage: number
    totalItems: number
    totalPages: number
}
