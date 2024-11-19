import { Link, useLocation } from 'react-router-dom';
import { Breadcrums } from './Breadcrums';

interface Props {
  pageTitle: string;
}

export const PageTitle = (props: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl py-2 pl-2">{props.pageTitle}</h1>
      <Breadcrums />
    </div>
  );
};
