import { Location } from 'react-router-dom';
import { BreadcrumbItem } from '../../types/BreadcrumbItem';
import { capitalize } from './capitalize';

export const getBreadcrumbsByPath = (location: Location): BreadcrumbItem[] => {
  const pathParts = location.pathname.split('/').slice(1);

  const formatateSlug = (slug: string): string => (
    slug.split('-').map(part => capitalize(part)).join(' ')
  );

  return pathParts.map((part, i, fullpath) => (
    {
      text: formatateSlug(part),
      link: i !== fullpath.length - 1
        ? '/' + fullpath.slice(0, i + 1).join('/')
        : undefined,
    }
  ));
};
