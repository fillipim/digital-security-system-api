import * as yup from "yup"
import { IUpdateSystem } from "../interfaces/system"

export const updateSystemSerializer: yup.SchemaOf<IUpdateSystem> = yup.object().shape({
    description: yup.string().required(),
    acronym: yup.string().required(),
    systemEmail: yup.string().email().notRequired(),
    justificationChange: yup.string().max(500).required(),
    lastChangeUser: yup.string().required(),
    url: yup.string().notRequired(),
    status: yup.string().required()
});