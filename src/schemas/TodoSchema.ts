import { z } from "zod"

export const todoSchema = z.object({
  titulo: z.string().min(5, "Título obrigatório"),
  descricao: z.string().optional(),
  categoria: z.enum(["Pessoal", "Trabalho", "Outro"]),
})

export type TodoFormData = z.infer<typeof todoSchema>