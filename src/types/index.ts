import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, { message: 'O título deve ter 3 ou mais caracteres' }),
  value: z.number({ message: "Por favor insira um valor" }).min(1, { message: 'O valor deve ser maior que 1' }),
  brand: z.string({ message: 'A marca é obrigatória' }),
  rating: z.number().min(1, { message: 'O valor deve ser maior que 1' }).max(5, { message: 'O valor deve ser menor que 5' }),
})

export type ProductFormType = z.infer<typeof productSchema>
