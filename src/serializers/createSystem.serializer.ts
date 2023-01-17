import * as yup from "yup";
import { IRequestSystem } from "../interfaces/system";

export const createSystemSerializer: yup.SchemaOf<IRequestSystem> = yup.object().shape({
    description: yup.string().max(100).required(),
    acronym: yup.string().max(100).required(),
    sistemEmail: yup.string().email().max(100).notRequired(),
    url: yup.string().email().max(50).notRequired()
});