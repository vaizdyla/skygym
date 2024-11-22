import * as z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Pamiršote įvesti el.pašto adresą' })
    .email({ message: 'Neteisingas el. pašto adreso formatas' }),
  password: z.string().min(1, { message: 'Pamiršote įvesti slaptažodį' }),
});

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export const ContactSchema = z.object({
  name: z.string().min(1, { message: 'Pamiršote įvesti savo vardą' }),
  email: z
    .string()
    .min(1, { message: 'Pamiršote įvesti el. pašto adresą' })
    .email({ message: 'Neteisingas el. pašto adreso formatas' }),
  emailText: z.string().min(5, { message: 'Pamiršote įvesti laiško tekstą' }),
});
