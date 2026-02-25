import { z } from "zod"

export const contactsSchema = z.object({
    nome: z.string().min(5, "Digite nome e sobrenome.").max(50, "Máximo 50 caracteres."),
    email: z.string().email("E-mail inválido."),
    telefone: z.string().regex(/^\d+$/, "Apenas números.").length(11, "Telefone deve ter 11 números (DDD + número).")
})

export type ContactsFormType = z.infer<typeof contactsSchema>