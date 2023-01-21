import { IRequestSystem, IUpdateSystem } from "../../interfaces/system";


export const createSystemMock: IRequestSystem = {
    description: "Teste Sistema",
    acronym: "TS",
    systemEmail: "Teste@gmail.com",
    url: "https:urlteste"
}

export const updateSystemMock: IUpdateSystem = {
    description: "Alterado",
    acronym: "CC",
    status: "Cancelado",
    justificationChange: "Teste",
    lastChangeUser: "Usuário",    
}