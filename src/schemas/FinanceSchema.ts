import * as z from "zod"

export const schemaFinance = z.object({
  descricao: z.string().min(3, "A descrição deve ter pelo menos 3 caracteres."),
  valor: z.coerce.number().positive("O valor deve ser maior que zero."),
  tipo: z.enum(["entrada", "saida"])
})

export type FinanceFormData = z.infer<typeof schemaFinance>