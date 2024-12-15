import { LoginForm } from '../components/auth/LoginForm';
import { PageTitle } from '../components/shared/PageTitle';

export const LoginPage = () => {
  return (
    <main>
      <PageTitle>Registracija</PageTitle>
      <LoginForm />
    </main>
  );
};
