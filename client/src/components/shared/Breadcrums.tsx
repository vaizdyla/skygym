import { Link, useLocation } from 'react-router';

export const Breadcrums = () => {
  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="">{crumbs}</div>;
};
