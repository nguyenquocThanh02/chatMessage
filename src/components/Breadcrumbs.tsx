import React from "react";

import { Link } from "react-router-dom";

interface NavItem {
  path: string;
  page: string;
}

interface BreadcrumbsProps {
  nav: NavItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ nav }) => {
  return (
    <>
      <div className="text-sm breadcrumbs mt-3">
        <ul>
          {nav.map((item: NavItem, index: number) => (
            <li key={index}>
              <Link to={item.path}>{item.page}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Breadcrumbs;
