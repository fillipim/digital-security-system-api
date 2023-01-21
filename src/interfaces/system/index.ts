export interface IRequestSystem {
    description: string,
    acronym: string,
    systemEmail?: string,
    url?: string
}

export interface IUpdateSystem {
    description: string,
    acronym: string,
    systemEmail?: string,
    url?: string,
    justificationChange: string
    lastChangeUser: string,
    status: string
}

export interface ISearchSystem {
    description?: string,
    acronym?: string,
    systemEmail?: string
    offset?: number ,
    limit?: number 
}