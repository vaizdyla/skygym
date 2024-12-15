import * as z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginSchema } from './Schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { AuthContext } from '../../main';

export const LoginForm = () => {
  const { store } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (formData) => {
    store.login(formData.email, formData.password);
    console.log(formData);
    console.log(errors);
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto"
    >
      <div>
        <h1>Prisijungimas</h1>
      </div>
      <div>
        <input
          id="email"
          type="email"
          autoComplete="off"
          placeholder="El. pašto adresas"
          {...register('email', {
            required: 'Pamiršote įvesti el. pašto adresą',
          })}
        />
      </div>
      <div>
        <input
          id="password"
          type="password"
          autoComplete="off"
          placeholder="Slaptažodis"
          {...register('password', { required: 'Pamiršote įvesti slaptažodį' })}
        />
      </div>
      <button type="submit">Prisijungti</button>
    </form>
  );
};
