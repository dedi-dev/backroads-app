import React from 'react';

import { pageLinks } from '../data';
import SocialLinks from './SocialLinks';

const MenuBar = ({ handleShowMenu }) => {
  return (
    <div className="menu-bar">
      <ul className="menu-bar-link" id="nav-bar-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id} className="menu-bar-link-list">
              <a
                href={href}
                className="menu-bar-link-item"
                onClick={() => handleShowMenu()}
              >
                {' '}
                {text}{' '}
              </a>
            </li>
          );
        })}
      </ul>
      <SocialLinks
        parentClass="nav-menu-bar-icons"
        itemClass="nav-menu-bar-nav-icon"
      />
    </div>
  );
};

export default MenuBar;
