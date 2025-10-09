import { z } from "zod";
import { formSchema } from "@/lib/validators";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
};

export type FormData = z.infer<typeof formSchema>;
