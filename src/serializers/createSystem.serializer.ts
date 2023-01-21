import * as yup from "yup";
import { IRequestSystem } from "../interfaces/system";

export const createSystemSerializer: yup.SchemaOf<IRequestSystem> = yup
  .object()
  .shape({
    description: yup.string().max(100).required(),
    acronym: yup.string().max(100).required(),
    systemEmail: yup
      .string()
      .email()
      .matches(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i)
      .max(100)
      .notRequired(),
    url: yup.string().max(50).notRequired(),
  });
