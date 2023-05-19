import React from 'react';
import './Breadcrumbs.scss';
import { HOME_PAGE } from '../../utils/constants/route';
import { Link, useLocation } from 'react-router-dom';
import { getBreadcrumbsByPath } from '../../utils/helpers/getBreadcrumbsByPath';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbsByPath(location);

  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__child">
        <Link to={HOME_PAGE} className="breadcrumbs__link">
          <img src="icons/home16x16.svg" alt="Home link icon" />
        </Link>
      </div>

      {breadcrumbs.map(breadcrumb => (
        <React.Fragment key={breadcrumb.text}>
          <div className="breadcrumbs__child">
            <img src="icons/right16x16.svg" alt="Move right icon" />
          </div>

          <div className="breadcrumbs__child">
            {breadcrumb.link ? (
              <Link to={breadcrumb.link} className="breadcrumbs__link">
                {breadcrumb.text}
              </Link>
            ) : (
              <p className="breadcrumbs__truncate">
                {breadcrumb.text}
              </p>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
