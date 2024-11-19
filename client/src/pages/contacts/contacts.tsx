import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../components/shared/PageTitle';

export const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <main className="sg-container">
      <PageTitle pageTitle={t('titleContacts')} />
      <p className="test-class">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, hic dolor
        minus cupiditate doloremque asperiores dolores corporis laboriosam
        aliquam quis tenetur cumque aliquid consequatur inventore velit. Modi
        alias explicabo vel.
      </p>
    </main>
  );
};
