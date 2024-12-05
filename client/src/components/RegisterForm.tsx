import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { RegisterSchema } from './auth/Schemas';
import { zodResolver } from '@hookform/resolvers/zod';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      first_name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = async (
    formData
  ) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-screen-sm mx-auto shadow"
    >
      <fieldset>
        <legend>Registracija</legend>
        <label htmlFor="first_name">Vardas</label>
        <input
          className="border border-sky-500 p-2 rounded-lg"
          type="text"
          id="first_name"
          autoComplete="on"
          {...register('first_name')}
        />
        {errors.first_name && <span>{errors.first_name.message}</span>}
      </fieldset>
      <button type="submit">Užsiregistruoti</button>
    </form>
  );
};
