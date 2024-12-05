import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactSchema } from '../../components/auth/Schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';

export const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      emailText: '',
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof ContactSchema>> = (
    formData
  ) => {};

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="flex flex-col gap-1 py-2">
        {form.formState.errors.name && (
          <p className="text-rose-500 text-sm">
            {form.formState.errors.name.message}
          </p>
        )}
        <input
          className="border border-slate-700 rounded-full px-3 py-2"
          type="text"
          autoComplete="on"
          placeholder="Jūsų vardas"
          id="name"
          {...form.register('name')}
        />
      </div>
      <div className="flex flex-col gap-1 py-3">
        {form.formState.errors.email && (
          <p className="text-rose-500 text-sm">
            {form.formState.errors.email.message}
          </p>
        )}
        <input
          className="border border-slate-700 rounded-full px-3 py-2"
          type="email"
          autoComplete="on"
          placeholder="Jūsų el. paštas"
          id="email"
          {...form.register('email')}
        />
      </div>
      <div className="flex flex-col gap-1">
        {form.formState.errors.emailText && (
          <p className="text-rose-500 text-sm">
            {form.formState.errors.emailText?.message}
          </p>
        )}
        <textarea
          className="border border-slate-700 rounded-3xl px-3 py-2"
          autoComplete="off"
          id="emailText"
          rows={4}
          placeholder="Laiško tekstas"
          {...form.register('emailText')}
        />
      </div>
      <button
        className="w-full bg-slate-500 my-3 py-2 rounded-full text-slate-50 hover:bg-slate-600"
        type="submit"
      >
        Siųsti
      </button>
    </form>
  );
};
