export interface IRequestSystem {
    description: string,
    acronym: string,
    sistemEmail?: string,
    url?: string
}

export interface iUpdateSystem {
    description: string,
    acronym: string,
    sistemEmail?: string,
    url?: string,
    justificationChange: string
    lastUserChange: string
}