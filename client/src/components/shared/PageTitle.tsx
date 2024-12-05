import React from 'react';
import { Breadcrums } from './Breadcrums';

interface PageTitleProps {
  children: React.ReactElement | React.ReactNode;
}

export const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl py-2 pl-2">{children}</h1>
      <Breadcrums />
    </div>
  );
};
