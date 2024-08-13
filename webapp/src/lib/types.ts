export type TGroup = {
    collectionId: string
    collectionName: string
    created: string
    id: string
    name: string
    updated: string
    users: string[]
}

export type GroupsResponse = {
    items: TGroup[];
    page: number;
    perPage: number
    totalItems: number
    totalPages: number
}

export type TPolicy = {
    id: string
    name: string
}

export type PoliciesResponse = {
    items: TPolicy[];
    page: number;
    perPage: number
    totalItems: number
    totalPages: number
}

export type TUser = {
    id: string;
    name: string;
    email: string;
    verified: boolean;
    createdAt: Date;
    updatedAt: Date;
} 

export type UserResponse = {
    items: TUser[]
    page: number
    perPage: number
    totalItems: number
    totalPages: number
}