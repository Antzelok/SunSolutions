import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Το όνομα είναι υποχρεωτικό"),
  lastName: z.string().min(2, "Το επώνυμο είναι υποχρεωτικό"),
  email: z.string().email("Μη έγκυρο email"),
  phone: z
    .string()
    .min(6, "Το κινητό είναι υποχρεωτικό")
    .regex(/^[0-9+\s-]{6,15}$/, "Μη έγκυρος αριθμός τηλεφώνου"),
});
