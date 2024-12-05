import axios from 'axios';
import { API_BASE } from '../helpers/constants';
import * as z from 'zod';
import { RegisterSchema } from '../components/auth/Schemas';

export const registerUser = async (
  formData: z.infer<typeof RegisterSchema>
) => {
  try {
    const res = await axios.post(API_BASE, formData);
    return res.data;
  } catch (e: unknown) {}
};
