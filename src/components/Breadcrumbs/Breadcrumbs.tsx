import React from 'react';
import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';
import { BreadcrumbItem } from '../../types/BreadcrumbItem';
import { useModifiedUrl } from '../../components/ToggleTheme';

type Props = {
  breadcrumbs?: BreadcrumbItem[];
};

export const Breadcrumbs: React.FC<Props> = ({ breadcrumbs = [] }) => {
  // const breadcrumbs: BreadcrumbItem[] = [
  //   {
  //     link: '/phones',
  //     text: 'Phones',
  //   },
  //   {
  //     text: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
  //   },
  // ];
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__child">
        <Link to={'/home'} className="breadcrumbs__link">
          <img
            src={useModifiedUrl(
              'icons/home16x16.svg',
              localStorage.getItem('themeName') || 'light',
            )}
            alt="Home link icon"
          />
        </Link>
      </div>

      {breadcrumbs.map(breadcrumb => (
        <React.Fragment key={breadcrumb.text}>
          <div className="breadcrumbs__child">
            <img src="icons/right16x16.svg" alt="Move right icon" />
          </div>

          <div className="breadcrumbs__child">
            {breadcrumb.link ? (
              <Link to="/catalog" className="breadcrumbs__link">
                {breadcrumb.text}
              </Link>
            ) : (
              <p>
                {breadcrumb.text}
              </p>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
