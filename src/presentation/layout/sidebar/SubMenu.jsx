import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SubMenu = ({ category }) => {
  const [children, setChildren] = useState(false);

  const showchildren = () => setChildren(!children);

  return (
    <>
      <NavLink className="sidebar-link" to={(Array.isArray(category.children) && category.children.length) ? `/categories?categoryId=${category.id}` : `/articles?categoryId=${category.id}`}
        onClick={category.children && showchildren}
        activeClassName="selected">
        <div>
          {category.icon}
          <span className="sidebar-label">{category.name}</span>
        </div>
        <div>
          {category.children && children ? <i className="fas fa-sort-up" /> : category.children ? <i className="fas fa-sort-down" /> : null }
        </div>
      </NavLink>
      {children &&
        category.children.map((category, index) => {
          return (
            <NavLink className="dropdown-link" to={(Array.isArray(category.children) && category.children.length) ? `/categories?categoryId=${category.id}` : `/articles?categoryId=${category.id}`} key={index} activeClassName="selected">
              {category.icon}
              <span className="sidebar-label">{category.name}</span>
            </NavLink>
          );
        })}
    </>
  );
};

export default SubMenu;