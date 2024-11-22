import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../components/shared/PageTitle';
import { ContactForm } from './ContactForm';

export const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <main className="sg-container">
      <PageTitle pageTitle={t('titleContacts')} />
      <div className="grid md:grid-cols-3 md:gap-3 py-4">
        <ContactForm />
        <p className="test-class">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, hic
          dolor minus cupiditate doloremque asperiores dolores corporis
          laboriosam aliquam quis tenetur cumque aliquid consequatur inventore
          velit. Modi alias explicabo vel.
        </p>
        <p className="test-class">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, hic
          dolor minus cupiditate doloremque asperiores dolores corporis
          laboriosam aliquam quis tenetur cumque aliquid consequatur inventore
          velit. Modi alias explicabo vel.
        </p>
      </div>
    </main>
  );
};
